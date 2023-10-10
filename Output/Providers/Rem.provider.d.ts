/// <reference types="roact" />
import Roact from "@rbxts/roact";
export declare const DEFAULT_REM = 16;
export declare const MIN_REM = 8;
export declare const RemContext: {
    Provider: Roact.ComponentConstructor<{
        value: number;
    }, {}>;
    Consumer: Roact.ComponentConstructor<{
        render: (value: number) => Roact.Element | undefined;
    }, {}>;
};
export interface Properties extends Roact.PropsWithChildren {
    BaseRem?: number;
    RemOverride?: number;
    MinimumRem?: number;
    MaximumRem?: number;
}
export declare const Provider: (props: Properties) => Roact.Element;
