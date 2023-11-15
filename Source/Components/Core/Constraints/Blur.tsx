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
    export type NeonParts = [ undefined, undefined, undefined, undefined ] | [ WedgePart, WedgePart, WedgePart, WedgePart ];

    const Depth = 0.2;

    export const DrawTriangle = (v0: Vector3, v1: Vector3, v2: Vector3, p0?: WedgePart, p1?: WedgePart): LuaTuple<[ WedgePart, WedgePart ]> => {
        let A = v0, B = v1, C = v2;
        
        let AB = B.sub(A), AC = C.sub(A), BC = C.sub(B);
        const ABD = AB.Dot(AB), ACD = AC.Dot(AC), BCD = BC.Dot(BC);

        if ((ABD > ACD) && (ABD > BCD)) {
            const T = A; A = B; B = T;

        } else if ((ACD > BCD) && (ACD > ABD)) {
            const T = A; A = C; C = T;
        };

        AB = B.sub(A), AC = C.sub(A), BC = C.sub(B);

        const Right = AC.Cross(AB).Unit;
        const Up = BC.Cross(Right).Unit;
        const Back = BC.Unit

        const Height = math.abs(AB.Dot(Up));

        p0 = p0 || Wedge.Clone();

        p0.Size = new Vector3(Depth, Height, math.abs(AB.Dot(Back)));
        p0.CFrame = CFrame.fromMatrix(A.add(B).div(2), Right, Up, Back);
        p0.Parent = Cache;

        p1 = p1 || Wedge.Clone();

        p1.Size = new Vector3(Depth, Height, math.abs(AC.Dot(Back)));
        p1.CFrame = CFrame.fromMatrix(A.add(C).div(2), Right.mul(-1), Up, Back.mul(-1));
        p1.Parent = Cache;

        return $tuple(p0, p1 );
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
                Camera.ScreenPointToRay(TL.X + 64, TL.Y + 46, zIndex).Origin,
                Camera.ScreenPointToRay(TR.X - 64, TR.Y + 46, zIndex).Origin,
                Camera.ScreenPointToRay(BL.X + 64, BL.Y - 46, zIndex).Origin,
                Camera.ScreenPointToRay(BR.X - 64, BR.Y - 46, zIndex).Origin,
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