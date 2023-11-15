import Roact from "@rbxts/roact";

import { useMemo, useRef, useState, withHooks } from "@rbxts/roact-hooked";
import { Lighting, RunService, Workspace } from "@rbxts/services";

import { resolveNumber } from "../../../Utility/Common/Number";
import { getBindingValue, useComposedRef, useEventListener } from "@rbxts/pretty-roact-hooks";

const Camera = Workspace.CurrentCamera!;

resolveNumber(() => Camera.ScreenPointToRay(0, 0).Origin.X).await();

const Cache = new Instance("Folder");

Cache.Name = "Neon";
Cache.Parent = Camera;

const DOF = new Instance("DepthOfFieldEffect");

DOF.FocusDistance = 51.6;
DOF.InFocusRadius = 50;
DOF.Parent = Lighting;
DOF.NearIntensity = 1;
DOF.FarIntensity = 0;
DOF.Name = "DOF";

namespace Neon {
    export type TrianglePart = Part & { Wedge: SpecialMesh };
    export type NeonParts = [ undefined, undefined, undefined, undefined ] | [ TrianglePart, TrianglePart, TrianglePart, TrianglePart ];

    const Depth = 0.2;

    export const DrawTriangle = (v0: Vector3, v1: Vector3, v2: Vector3, p0?: TrianglePart, p1?: TrianglePart): LuaTuple<[ TrianglePart, TrianglePart ]> => {
        const s0 = v0.sub(v1).Magnitude, s1 = v1.sub(v2).Magnitude, s2 = v2.sub(v0).Magnitude, Furthest = math.max(s0, s1, s2);

        let A!: Vector3, B!: Vector3, C!: Vector3;
        switch(Furthest) {
            case s0: { [ A, B, C ] = [ v0, v1, v2 ]; break; };
            case s1: { [ A, B, C ] = [ v1, v2, v0 ]; break; };
            case s2: { [ A, B, C ] = [ v2, v0, v1 ]; break; };
            default: break;
        };

        const c0 = B.sub(A), c1 = C.sub(A), c2 = A.sub(B);
        const Parameter = ((c0.X * c1.X) + (c0.Y * c1.Y) + (c0.Z * c1.Z)) / c2.Magnitude;
        const Perspective = math.sqrt(math.pow(c1.Magnitude, 2) - (Parameter * Parameter));
        const Difference = c2.Magnitude - Parameter, Reach = Perspective / Depth;

        const Stare = new CFrame(B, A), Angle = CFrame.Angles(math.pi / 2, 0, 0);
        let From: CFrame = Stare, To: CFrame;

        const Top = From.mul(Angle).LookVector;
        const Middle = A.add(new CFrame(A, B).LookVector.mul(Parameter));
        const Goal = new CFrame(Middle, C).LookVector;
        const Dot = (Top.X * Goal.X) + (Top.Y * Goal.Y) + (Top.Z * Goal.Z);

        const Curve = math.acos(Dot);
        const Arc = CFrame.Angles(0, 0, Curve);

        From = From.mul(Arc);
        if (From.mul(Angle).LookVector.sub(Goal).Magnitude > 0.01) { From = From.mul(CFrame.Angles(0, 0, -2 * Curve)); };
        From = From.mul(new CFrame(0, Perspective / 2, -(Difference + (Parameter / 2))));

        To = Stare.mul(Arc.mul(CFrame.Angles(0, math.pi, 0)));
        if (To.mul(Angle).LookVector.sub(Goal).Magnitude > 0.01) { To = To.mul(CFrame.Angles(0, 0, 2 * math.acos(Dot))) };
        To = To.mul(new CFrame(0, Perspective / 2, Difference / 2));

        if (p0 === undefined) {
            p0 = new Instance("Part") as TrianglePart;
            p0.FormFactor = Enum.FormFactor.Custom;
            p0.TopSurface = Enum.SurfaceType.Smooth;
            p0.BottomSurface = Enum.SurfaceType.Smooth;
            p0.Anchored = true;
            p0.CanCollide = false;
            p0.Locked = true;

            const Mesh = new Instance("SpecialMesh");
            Mesh.Parent = p0;
            Mesh.MeshType = Enum.MeshType.Wedge;
            Mesh.Name = "Wedge";
        };

        p0.Wedge.Scale = new Vector3(0, Reach, Reach);
        p0.CFrame = From;

        if (p1 === undefined) p1 = p0.Clone();
        p1.Wedge.Scale = new Vector3(0, Reach, Difference / 0.2);
        p1.CFrame = To;

        return $tuple(p0, p1);
    };

    export const DrawQuad = (v0: Vector3, v1: Vector3, v2: Vector3, v3: Vector3, Parts: NeonParts): NeonParts => {
        const [ p0, p1 ] = DrawTriangle(v0, v1, v2, Parts[0], Parts[1]);
        const [ p2, p3 ] = DrawTriangle(v2, v1, v3, Parts[2], Parts[3]);

        return [ p0, p1, p2, p3 ];
    };
};

interface Properties {
    Material: Enum.Material;
    Transparency: number;
    Position: UDim2;
    ZIndex: number;
    Color: Color3;
    Size: UDim2;
};

export const Blur = withHooks<Bindable<Properties, Instance>>(Properties => {
    const [ Parts, SetParts ] = useState<Neon.NeonParts>([ undefined, undefined, undefined, undefined ]);

    const Ref = useRef<Frame>();

    useEventListener(RunService.RenderStepped, () => {
        const Obj = Ref.getValue()!;
        if (Obj === undefined) return;

        const zIndex = 1 - 0.05 * Obj.ZIndex;

        const TL = Obj.AbsolutePosition, BR = Obj.AbsolutePosition.add(Obj.AbsoluteSize);
        const TR = new Vector2(BR.X, TL.Y), BL = new Vector2(TL.X, BR.Y);

        // TODO: Add support for frame rotation.

        SetParts(
            Neon.DrawQuad(
                Camera.ScreenPointToRay(TL.X, TL.Y, zIndex).Origin,
                Camera.ScreenPointToRay(TR.X, TR.Y, zIndex).Origin,
                Camera.ScreenPointToRay(BL.X, BL.Y, zIndex).Origin,
                Camera.ScreenPointToRay(BR.X, BR.Y, zIndex).Origin,
                Parts
            )
        );
    });

    useMemo(() => {
        if (Parts[0] === undefined) return;

        for (const Part of Parts) {
            Part.Parent = Cache;
            
            Part.Transparency = getBindingValue(Properties.Transparency)!;
            Part.Material = getBindingValue(Properties.Material)!;
            Part.Color = getBindingValue(Properties.Color)!;
        };
    }, [ Parts, Properties ]);

    return (
        <frame
            Position={ Properties.Position}
            ZIndex={Properties.ZIndex}
            BackgroundTransparency={1}
            Size={Properties.Size}
            Key="Blur"
            Ref={Ref}
        />
    );
}, {
    "defaultProps": {
        Color: Color3.fromRGB(255, 255, 255),
        Material: Enum.Material.SmoothPlastic,
        Transparency: 0.98
    }
});