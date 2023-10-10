import { Janitor as Maid } from "@rbxts/janitor";
export declare const useOnce: (Callback: () => void | (() => void)) => void;
export declare function useJanitor<Output, Cached extends void | object = void>(Callback: (Garbage: Maid<Cached>) => Output): void;
