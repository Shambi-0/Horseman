import Ripple from "@rbxts/ripple";
import Roact from "@rbxts/roact";

import { useBinding, useMemo } from "@rbxts/roact-hooked";
import { useJanitor } from "./use-once.hook";

export function useMotion(goal: number): LuaTuple<[ Roact.Binding<number>, Ripple.Motion<number>]>;

export function useMotion<T extends Ripple.MotionGoal>(goal: T): LuaTuple<[ Roact.Binding<T>, Ripple.Motion<T>]>;

export function useMotion<T extends Ripple.MotionGoal>(goal: T) {
	const motion = useMemo(() => {
		return Ripple.createMotion(goal, { start: true });
	}, []);

	const [binding, setValue] = useBinding(motion.get());

	useJanitor(Garbage => {
		Garbage.Add(motion.onStep(setValue), true);
		Garbage.Add(motion, "destroy");
	});

	return $tuple(binding, motion);
};