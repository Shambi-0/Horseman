import Rich from "@rbxts/rich-text-stream";

import { useMemo } from "@rbxts/roact-hooked";

type RichTextStream = ReturnType<typeof Rich>;

export function useRichText(factory: (Stream: RichTextStream) => RichTextStream, deps?: readonly unknown[] | undefined): string {
    return useMemo(() => factory(Rich()).toString(), deps);
};