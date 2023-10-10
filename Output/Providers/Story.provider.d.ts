/// <reference types="roact" />
import Roact from "@rbxts/roact";
import { StoryController } from "../Stories/Controls";
export interface Properties extends Roact.PropsWithChildren {
    Controls: StoryController;
}
export declare const Provider: (props: Properties) => Roact.Element;
