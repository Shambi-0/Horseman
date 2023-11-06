/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/compiler-types" />
import { CanvasGroup } from "./Core/Components/CanvasGroup";
import { Capture } from "./Core/Components/Capture";
import { Frame } from "./Core/Components/Frame";
import { Image } from "./Core/Components/Image";
import { Text } from "./Core/Components/Text";
/** @hidden */
export { CanvasGroup, Capture, Frame, Image, Text };
import { AspectRatio } from "./Core/Constraints/AspectRatio";
import { Gradient } from "./Core/Constraints/Gradient";
import { Padding } from "./Core/Constraints/Padding";
import { Corner } from "./Core/Constraints/Corner";
import { Stroke } from "./Core/Constraints/Stroke";
import { Blur } from "./Core/Constraints/Blur";
/** @hidden */
export { AspectRatio, Gradient, Padding, Corner, Stroke, Blur };
import { LoadingSpinner } from "./Base/Display/LoadingSpinner";
import { MeasureFrame } from "./Base/Decoration/MeasureFrame";
import { DropShadow } from "./Base/Decoration/DropShadow";
import { NumberSpinner } from "./Base/Text/NumberSpinner";
import { Checkbox } from "./Base/Input/Buttons/Checkbox";
import { Switch } from "./Base/Input/Buttons/Switch";
import { Progress } from "./Base/Display/Progress";
import { Rating } from "./Base/Display/Rating";
import { Slider } from "./Base/Input/Slider";
import Accordion from "./Base/Layout/Accordion";
/** @hidden */
export { LoadingSpinner, MeasureFrame, DropShadow, NumberSpinner, Checkbox, Switch, Progress, Rating, Slider, Accordion };
/** @hidden */
export declare namespace Sketch {
    const Triangle: (props: Partial<{
        P: import("@rbxts/pretty-roact-hooks").BindingOrValue<Vector2>;
        Q: import("@rbxts/pretty-roact-hooks").BindingOrValue<Vector2>;
        R: import("@rbxts/pretty-roact-hooks").BindingOrValue<Vector2>;
    } & {
        [Children]?: import("@rbxts/roact/src/PropMarkers/Children") | undefined;
    } & import("@rbxts/roact").JsxInstanceProperties<Frame> & {
        Event?: import("@rbxts/roact").JsxInstanceEvents<Frame> | undefined;
        Change?: import("@rbxts/roact").JsxInstanceChangeEvents<Frame> | undefined;
        Ref?: import("@rbxts/roact").RefPropertyOrFunction<Frame> | undefined;
    } & JSX.IntrinsicAttributes>) => import("@rbxts/roact").Element;
    const Point: (props: Partial<{
        Thickness: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
        Location: import("@rbxts/pretty-roact-hooks").BindingOrValue<Vector2>;
    } & {
        [Children]?: import("@rbxts/roact/src/PropMarkers/Children") | undefined;
    } & import("@rbxts/roact").JsxInstanceProperties<Frame> & {
        Event?: import("@rbxts/roact").JsxInstanceEvents<Frame> | undefined;
        Change?: import("@rbxts/roact").JsxInstanceChangeEvents<Frame> | undefined;
        Ref?: import("@rbxts/roact").RefPropertyOrFunction<Frame> | undefined;
    } & JSX.IntrinsicAttributes>) => import("@rbxts/roact").Element;
    const Line: (props: Partial<{
        From: import("@rbxts/pretty-roact-hooks").BindingOrValue<Vector2>;
        To: import("@rbxts/pretty-roact-hooks").BindingOrValue<Vector2>;
        Thickness: import("@rbxts/pretty-roact-hooks").BindingOrValue<number>;
    } & {
        [Children]?: import("@rbxts/roact/src/PropMarkers/Children") | undefined;
    } & import("@rbxts/roact").JsxInstanceProperties<Frame> & {
        Event?: import("@rbxts/roact").JsxInstanceEvents<Frame> | undefined;
        Change?: import("@rbxts/roact").JsxInstanceChangeEvents<Frame> | undefined;
        Ref?: import("@rbxts/roact").RefPropertyOrFunction<Frame> | undefined;
    } & JSX.IntrinsicAttributes>) => import("@rbxts/roact").Element;
}
