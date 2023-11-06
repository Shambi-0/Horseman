import Roact from "@rbxts/roact";

import { useMemo, withHooks } from "@rbxts/roact-hooked";

import { StoryContext } from "../Contexts/Story.context";
import { StoryController } from "../Stories/Controls";

export interface Properties extends Roact.PropsWithChildren {
    Controls: StoryController
};

const SetProperties = (Properties: Properties) => {
    return Properties;
};

export const Provider = withHooks<Properties>(Configuration => {
    const Properties = identity<Required<Properties>>(SetProperties(Configuration) as Required<Properties>)

    const SourceContext = useMemo(() => {
        return {
            Controls: Properties.Controls
        };
    }, [ Properties.Controls ]);

    return (
        <StoryContext.Provider value={SourceContext} >
            { Properties[Roact.Children] }
        </StoryContext.Provider>
    );
});