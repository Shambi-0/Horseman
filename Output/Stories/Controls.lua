-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local pColor = TS.import(script, TS.getModule(script, "@rbxts", "precomputed").out).pColor
local _ControlsUtil = TS.import(script, TS.getModule(script, "@rbxts", "ui-labs").out.ControlsUtil)
local Boolean = _ControlsUtil.Boolean
local Choose = _ControlsUtil.Choose
local Color = _ControlsUtil.Color
local Slider = _ControlsUtil.Slider
local StoryControls = {}
do
	local _container = StoryControls
	local Default = {}
	_container.Default = Default
	local RATING_CONTROLS = {
		Digits = Slider(5, 3, 10, 1),
		Value = Slider(2.5, 0, 10, 0.5),
		TextColor3 = Color(pColor.White),
	}
	_container.RATING_CONTROLS = RATING_CONTROLS
	local PROGRESS_CONTROLS = {
		Value = Slider(0.25, 0, 1),
		Width = Slider(1, 0.1, 1, 0.1),
		Height = Slider(1, 1, 10, 1),
		Radius = Slider(1, 0, 1, 0.1),
	}
	_container.PROGRESS_CONTROLS = PROGRESS_CONTROLS
	local _object = {}
	for _k, _v in PROGRESS_CONTROLS do
		_object[_k] = _v
	end
	_object.Value = nil
	_object.Step = Choose({ 0, 0.05, 0.1, 0.25, 0.5 }, 1)
	_object.Increment = Boolean(true)
	local SLIDER_CONTROLS_ = _object
	_container.SLIDER_CONTROLS_ = SLIDER_CONTROLS_
end
return {
	StoryControls = StoryControls,
}
