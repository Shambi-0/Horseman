import { useEventListener } from "@rbxts/pretty-roact-hooks";
import { useState } from "@rbxts/roact-hooked";
import { Players } from "@rbxts/services";

export function usePremium() {
    const [ IsPremium, SetIsPremium ] = useState(Players.LocalPlayer.MembershipType === Enum.MembershipType.Premium);

    useEventListener(Players.PlayerMembershipChanged, Player => {
        if (Player === Players.LocalPlayer) {
            SetIsPremium(Player.MembershipType === Enum.MembershipType.Premium);
        };
    });

    return IsPremium;
};