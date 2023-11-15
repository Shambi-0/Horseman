import Roact from "@rbxts/roact";

import { useMemo, useRef, useState, withHooks } from "@rbxts/roact-hooked";
import { Lighting, RunService, Workspace } from "@rbxts/services";

import { resolveNumber } from "../../../Utility/Common/Number";
import { getBindingValue, useComposedRef, useEventListener } from "@rbxts/pretty-roact-hooks";
import { pSize } from "@rbxts/precomputed";

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

const Wedge = new Instance("WedgePart");

Wedge.Anchored = true;
Wedge.TopSurface = Enum.SurfaceType.Smooth;
Wedge.BottomSurface = Enum.SurfaceType.Smooth;

namespace Neon {
    export type TrianglePart = Part & { Wedge: SpecialMesh };
    export type NeonParts = [ undefined, undefined, undefined, undefined ] | [ TrianglePart, TrianglePart, TrianglePart, TrianglePart ];

    const Depth = 0.2;

    export const DrawTriangle = (v0: Vector3, v1: Vector3, v2: Vector3, p0?: TrianglePart, p1?: TrianglePart): LuaTuple<[ TrianglePart, TrianglePart ]> => {
        const s0 = v0.sub(v1).Magnitude, s1 = v1.sub(v2).Magnitude, s2 = v2.sub(v0).Magnitude, Furthest = math.max(s0, s1, s2);

        let A!: Vector3, B!: Vector3, C!: Vector3;
        
        if (Furthest === s0) {
            [ A, B, C ] = [ v0, v1, v2 ];

        } else if (Furthest === s1) {
            [ A, B, C ] = [ v1, v2, v0 ];

        } else if (Furthest === s2) {
            [ A, B, C ] = [ v2, v0, v1 ];
        };

        const Para = (B.sub(A).X * C.sub(A).X + B.sub(A).Y * C.sub(A).Y + B.sub(A).Z * C.sub(A).Z) / A.sub(B).Magnitude;
        const Perp = math.sqrt(C.sub(A).Magnitude ^ 2 - Para ^ 2);
        const dif_para = A.sub(B).Magnitude - Para;

        const st = new CFrame(B, A);
        const za = CFrame.Angles(math.pi / 2, 0, 0);

        let cf0 = st;

        const Top_Look = cf0.mul(za).LookVector
		const Mid_Point = A.add(new CFrame(A, B).LookVector.mul(Para))
		const Needed_Look = new CFrame(Mid_Point, C).LookVector
		const dot = Top_Look.X * Needed_Look.X + Top_Look.Y * Needed_Look.Y + Top_Look.Z * Needed_Look.Z

		const ac = CFrame.Angles(0, 0, math.acos(dot))

		cf0 = cf0.mul(ac);

		if (cf0.mul(za).LookVector.sub(Needed_Look).Magnitude > 0.01) {
			cf0 = cf0.mul(CFrame.Angles(0, 0, -2 * math.acos(dot)))
        };

		cf0 = cf0.mul(new CFrame(0, Perp / 2, -(dif_para + Para / 2)));

		let cf1 = st.mul(ac.mul(CFrame.Angles(0, math.pi, 0)));

		if (cf1.mul(za).LookVector.sub(Needed_Look).Magnitude > 0.01) {
			cf1 = cf1.mul(CFrame.Angles(0, 0, 2 * math.acos(dot)))
        };

		cf1 = cf1.mul(new CFrame(0, Perp / 2, dif_para / 2));

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

        p0.Wedge.Scale = new Vector3(0, Perp / 0.2, Para / 0.2);
        p0.CFrame = cf0;

        if (p1 === undefined) p1 = p0.Clone();
        p1.Wedge.Scale = new Vector3(0, Perp / 0.2, dif_para / 0.2);
        p1.CFrame = cf1;

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
                Camera.ScreenPointToRay(TL.X + 16, TL.Y + 16, zIndex).Origin,
                Camera.ScreenPointToRay(TR.X - 16, TR.Y + 16, zIndex).Origin,
                Camera.ScreenPointToRay(BL.X + 16, BL.Y - 16, zIndex).Origin,
                Camera.ScreenPointToRay(BR.X - 16, BR.Y - 16, zIndex).Origin,
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
        Material: Enum.Material.Glass,
        Transparency: 0.98,
        Size: pSize.Full
    }
});