import Roact from "@rbxts/roact";

import { RunService, UserInputService } from "@rbxts/services";
import { useEventListener } from "@rbxts/pretty-roact-hooks";
import { withHooks } from "@rbxts/roact-hooked";

import { useDebounce } from "../../../Utility/Hooks";

import { Frame } from "./Frame";

export const IS_EDIT = RunService.IsStudio() && !RunService.IsRunning();

interface Properties {
    readonly onHovering: (Hovering: boolean) => void;
    
    readonly onInputBegan: (Object: Frame, Input: InputObject, Outside: boolean) => boolean | void;
    readonly onInputChanged: (Object: Frame, Input: InputObject) => void;
    readonly onInputEnded: (Object: Frame, Input: InputObject) => void;

    readonly Cooldown: number;
    readonly Visible: boolean;

    readonly Size: UDim2;
    readonly Position: UDim2;
    readonly AnchorPoint: Vector2;
};

export const Capture = withHooks<Bindable<Properties, Instance, "onHovering" | "onInputBegan" | "onInputChanged" | "onInputEnded">>(Properties => {
    const [ , Try ] = useDebounce(Properties.Cooldown!);

    const FrameRef = Roact.createRef<Frame>();

    useEventListener(UserInputService.InputBegan, (Input, GameProcessed) => {
        if (FrameRef.getValue() && !GameProcessed && !IS_EDIT && Try()) Properties.onInputBegan?.(FrameRef.getValue()!, Input, true);
    });

    useEventListener(UserInputService.InputEnded, Input => {
        if (FrameRef.getValue() && !IS_EDIT) Properties.onInputEnded?.(FrameRef.getValue()!, Input);
    });

    useEventListener(UserInputService.InputChanged, Input => {
        if (FrameRef.getValue() && !IS_EDIT) Properties.onInputChanged?.(FrameRef.getValue()!, Input);
    });

    return (
        <Frame
            Selectable
            ClipsDescendants
            Ref={FrameRef}
            Size={Properties.Size}
            Position={Properties.Position}
            AnchorPoint={Properties.AnchorPoint}
            ZIndex={math.huge}
            Event={{
                InputBegan: ((O: Frame, I: InputObject) => {
                    if (Try() && Properties.onInputBegan) Properties.onInputBegan(O, I, false)
                }),

                InputChanged: IS_EDIT ? Properties.onInputChanged : undefined,
                InputEnded: IS_EDIT ? Properties.onInputEnded : undefined,

                MouseEnter: () => { if (Properties.onHovering) Properties.onHovering(true) },
                MouseLeave: () => { if (Properties.onHovering) Properties.onHovering(false) },

                SelectionGained: () => { if (Properties.onHovering) Properties.onHovering(true) },
                SelectionLost: () => { if (Properties.onHovering) Properties.onHovering(false) },
            }}
        />
    );
}, {
    "defaultProps": {
        Cooldown: 0.2
    }
});