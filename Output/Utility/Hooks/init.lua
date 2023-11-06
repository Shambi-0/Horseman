-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local useInputDevice = TS.import(script, script, "use-input-service.hook").useInputDevice
local useProductInfo = TS.import(script, script, "use-product-info.hook").useProductInfo
local useOrientation = TS.import(script, script, "use-orientation.hook").useOrientation
local _use_once_hook = TS.import(script, script, "use-once.hook")
local useOnce = _use_once_hook.useOnce
local useJanitor = _use_once_hook.useJanitor
local useRichText = TS.import(script, script, "use-rich-text.hook").useRichText
local useDebounce = TS.import(script, script, "use-debounce.hook").useDebounce
local usePremium = TS.import(script, script, "use-premium.hook").usePremium
local useSounds = TS.import(script, script, "use-sounds.hook").useSounds
local useMotion = TS.import(script, script, "use-motion.hook").useMotion
local useTheme = TS.import(script, script, "use-theme.hook").useTheme
local useNav = TS.import(script, script, "use-nav.hook").useNav
local useRem = TS.import(script, script, "use-rem.hook").useRem
--* @hidden 
return {
	useDebounce = useDebounce,
	useInputDevice = useInputDevice,
	useOrientation = useOrientation,
	useOnce = useOnce,
	useJanitor = useJanitor,
	useRichText = useRichText,
	useProductInfo = useProductInfo,
	useSounds = useSounds,
	usePremium = usePremium,
	useMotion = useMotion,
	useTheme = useTheme,
	useNav = useNav,
	useRem = useRem,
}
