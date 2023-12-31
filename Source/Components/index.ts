// Primitive Components
import { CanvasGroup } from "./Core/Components/CanvasGroup";
import { Capture } from "./Core/Components/Capture";
import { Frame } from "./Core/Components/Frame";
import { Image } from "./Core/Components/Image";
import { Text } from "./Core/Components/Text";

/** @hidden */
export { CanvasGroup, Capture, Frame, Image, Text };

// Primitive Constraints
import { AspectRatio } from "./Core/Constraints/AspectRatio";
import { Gradient } from "./Core/Constraints/Gradient";
import { Padding } from "./Core/Constraints/Padding";
import { Corner } from "./Core/Constraints/Corner";
import { Stroke } from "./Core/Constraints/Stroke";
import { Blur } from "./Core/Constraints/Blur";

/** @hidden */
export { AspectRatio, Gradient, Padding, Corner, Stroke, Blur };

// Public
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

// Public
import { Triangle as TriangleFrame } from "./Sketch/Triangle";
import { Point as PointFrame } from "./Sketch/Point";
import { Line as LineFrame } from "./Sketch/Line";

/** @hidden */
export namespace Sketch {
    export const Triangle = TriangleFrame;
    export const Point = PointFrame;
    export const Line = LineFrame;
};