import Roact from "@rbxts/roact";

import { StoryController } from "../Stories/Controls";

export const StoryContext = Roact.createContext({
	Controls: identity<StoryController | undefined>(undefined)
});