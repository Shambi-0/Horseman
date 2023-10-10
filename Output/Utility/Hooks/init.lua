-- Compiled with roblox-ts v2.2.0
local TS = _G[script]
local useInputDevice = TS.import(script, script, "use-input-service.hook").useInputDevice
local _use_once_hook = TS.import(script, script, "use-once.hook")
local useOnce = _use_once_hook.default
local useJanitor = _use_once_hook.useJanitor
local useProductInfo = TS.import(script, script, "use-product-info.hook").default
local useDebounce = TS.import(script, script, "use-debounce.hook").default
local useSounds = TS.import(script, script, "use-sounds.hook").useSounds
local usePremium = TS.import(script, script, "use-premium.hook").default
local useMotion = TS.import(script, script, "use-motion.hook").default
local useTheme = TS.import(script, script, "use-theme.hook").default
local useNav = TS.import(script, script, "use-nav.hook").default
local useRem = TS.import(script, script, "use-rem.hook").default
return {
	useDebounce = useDebounce,
	useInputDevice = useInputDevice,
	useOnce = useOnce,
	useJanitor = useJanitor,
	useProductInfo = useProductInfo,
	useSounds = useSounds,
	usePremium = usePremium,
	useMotion = useMotion,
	useTheme = useTheme,
	useNav = useNav,
	useRem = useRem,
}
