import { BindingOrValue, getBindingValue } from "@rbxts/pretty-roact-hooks";
import { useBinding } from "@rbxts/roact-hooked";

export default function useDebounce(Delay: BindingOrValue<number>) {
    const [ Last, Update ] = useBinding(0);

    const Can = (Now: number = os.clock()): boolean => {
        return (getBindingValue(Last) + getBindingValue(Delay)) <= Now;
    };

    const Try = (Callback?: () => void): boolean => {
        const Now = os.clock();

        if (!Can(Now)) return false;
        if (Callback) task.defer(Callback);

        Update(Now);
        return true;
    };

    return $tuple(Can, Try);
};