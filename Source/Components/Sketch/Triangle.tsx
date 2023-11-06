import Roact from "@rbxts/roact";

import { useMemo, withHooks } from "@rbxts/roact-hooked";
import { pAnchor, pColor } from "@rbxts/precomputed";
import { getBindingValue } from "@rbxts/pretty-roact-hooks";
import { Image } from "../Core/Components/Image";

interface Properties {
    P: Vector2,
    Q: Vector2,
    R: Vector2
};

const LEFT_IMAGE = "rbxassetid://319692171", RIGHT_IMAGE = "rbxassetid://319692151";

export const Triangle = withHooks<Bindable<Properties, Frame>>(Properties => {
    const Data = useMemo(() => {
        let A = getBindingValue(Properties.P) || Vector2.zero;
        let B = getBindingValue(Properties.Q) || Vector2.zero;
        let C = getBindingValue(Properties.R) || Vector2.zero;

        let AB = B.sub(A), AC = C.sub(A), BC = C.sub(B);
        const ABD = AB.Dot(AB), ACD = AC.Dot(AC), BCD = BC.Dot(BC);

        if ((ABD > ACD) && (ABD > BCD)) { const T = C; C = A, A = T;
        } else if ((ACD > BCD) && (ACD > ABD)) { const T = A; A = B, B = T; };

        AB = B.sub(A), AC = C.sub(A), BC = C.sub(B);

        const Unit = BC.Unit;
        const Height = Unit.Cross(AB);
        const Flip = Height >= 0;
        const Theta = math.deg(math.atan2(Unit.Y, Unit.X)) + (Flip ? 0 : 180);

        const Left = A.add(B).div(2);
        const Right = A.add(C).div(2);

        return { Flip, Unit, AB, AC, Left, Right, Height, Theta };
    }, [ Properties ]);

    return (
        <>
            <Image
                Size={UDim2.fromOffset(math.abs(Data.Unit.Dot(Data.AB)), Data.Height)}
                BackgroundTransparency={Properties.BackgroundTransparency}
                Position={UDim2.fromOffset(Data.Left.X, Data.Left.Y)}
                Image={Data.Flip ? RIGHT_IMAGE : LEFT_IMAGE}
                ImageColor3={Properties.BackgroundColor3}
                AnchorPoint={pAnchor.Center.Center}
                Rotation={Data.Theta}
                Key="Left"
            />
            <Image
                Size={UDim2.fromOffset(math.abs(Data.Unit.Dot(Data.AC)), Data.Height)}
                BackgroundTransparency={Properties.BackgroundTransparency}
                Position={UDim2.fromOffset(Data.Right.X, Data.Right.Y)}
                Image={Data.Flip ? LEFT_IMAGE : RIGHT_IMAGE}
                ImageColor3={Properties.BackgroundColor3}
                AnchorPoint={pAnchor.Center.Center}
                Rotation={Data.Theta}
                Key="Right"
            />
        </>
    );
}, {
    "defaultProps": {
        BackgroundColor3: pColor.White
    }
})