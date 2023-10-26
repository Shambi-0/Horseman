-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
-- Primitive Components
local CanvasGroup = TS.import(script, script, "Core", "Components", "CanvasGroup").CanvasGroup
local Capture = TS.import(script, script, "Core", "Components", "Capture").Capture
local Frame = TS.import(script, script, "Core", "Components", "Frame").Frame
local Image = TS.import(script, script, "Core", "Components", "Image").Image
local Text = TS.import(script, script, "Core", "Components", "Text").Text
--* @hidden 
-- Primitive Constraints
local AspectRatio = TS.import(script, script, "Core", "Constraints", "AspectRatio").AspectRatio
local Gradient = TS.import(script, script, "Core", "Constraints", "Gradient").Gradient
local Padding = TS.import(script, script, "Core", "Constraints", "Padding").Padding
local Corner = TS.import(script, script, "Core", "Constraints", "Corner").Corner
local Stroke = TS.import(script, script, "Core", "Constraints", "Stroke").Stroke
local Blur = TS.import(script, script, "Core", "Constraints", "Blur").Blur
--* @hidden 
-- Public
local LoadingSpinner = TS.import(script, script, "Base", "Display", "LoadingSpinner").LoadingSpinner
local MeasureFrame = TS.import(script, script, "Base", "Decoration", "MeasureFrame").MeasureFrame
local DropShadow = TS.import(script, script, "Base", "Decoration", "DropShadow").DropShadow
local NumberSpinner = TS.import(script, script, "Base", "Text", "NumberSpinner").NumberSpinner
local Checkbox = TS.import(script, script, "Base", "Input", "Buttons", "Checkbox").Checkbox
local Switch = TS.import(script, script, "Base", "Input", "Buttons", "Switch").Switch
local Progress = TS.import(script, script, "Base", "Display", "Progress").Progress
local Rating = TS.import(script, script, "Base", "Display", "Rating").Rating
local Line = TS.import(script, script, "Base", "Decoration", "Line").Line
local Slider = TS.import(script, script, "Base", "Input", "Slider").Slider
local Dot = TS.import(script, script, "Base", "Decoration", "Dot").Dot
local Accordion = TS.import(script, script, "Base", "Layout", "Accordion")
--* @hidden 
return {
	CanvasGroup = CanvasGroup,
	Capture = Capture,
	Frame = Frame,
	Image = Image,
	Text = Text,
	AspectRatio = AspectRatio,
	Gradient = Gradient,
	Padding = Padding,
	Corner = Corner,
	Stroke = Stroke,
	Blur = Blur,
	LoadingSpinner = LoadingSpinner,
	MeasureFrame = MeasureFrame,
	DropShadow = DropShadow,
	NumberSpinner = NumberSpinner,
	Checkbox = Checkbox,
	Switch = Switch,
	Progress = Progress,
	Rating = Rating,
	Line = Line,
	Slider = Slider,
	Dot = Dot,
	Accordion = Accordion,
}
