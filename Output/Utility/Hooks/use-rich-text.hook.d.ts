/// <reference types="@rbxts/compiler-types" />
import Rich from "@rbxts/rich-text-stream";
type RichTextStream = ReturnType<typeof Rich>;
export declare function useRichText(factory: (Stream: RichTextStream) => RichTextStream, deps?: readonly unknown[] | undefined): string;
export {};
