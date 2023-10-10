import { Janitor as Maid } from "@rbxts/janitor";
import { useEffect } from "@rbxts/roact-hooked";

export const useOnce = (Callback: () => void | (() => void)) => useEffect(() => { return Callback(); }, []);

export function useJanitor<Output, Cached extends void | object = void>(Callback: (Garbage: Maid<Cached>) => Output) {
	const Janitor = new Maid<Cached>();

    useOnce(() => { Callback(Janitor); return () => Janitor.Destroy(); });
};