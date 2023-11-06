import Roact from "@rbxts/roact";
import { StoryController } from "../Stories/Controls";
export declare const StoryContext: {
    Provider: Roact.ComponentConstructor<{
        value: {
            Controls: StoryController | undefined;
        };
    }, {}>;
    Consumer: Roact.ComponentConstructor<{
        render: (value: {
            Controls: StoryController | undefined;
        }) => Roact.Element | undefined;
    }, {}>;
};
