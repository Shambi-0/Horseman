import { PhysicsService } from "@rbxts/services";

/**
 * @description Extracts all of the {@link BasePart BasePart} descendants.
 * @param { Instance } Object The root {@link Instance Instance} which will have all of it's {@link BaseParts BasePart} extracted.
 * @param { boolean } [ ExcludeRoot ] Whether the root object should be excluded.
 * @returns { BasePart[] } All of the {@link BaseParts BasePart}.
 */
export function getBaseParts(Object: Instance, ExcludeRoot = false): BasePart[] {
    const Parts = Object.GetDescendants().filter(Value => Value.IsA("BasePart")) as BasePart[]

    if (!ExcludeRoot && Object.IsA("BasePart")) Parts.push(Object);
    return Parts;
};

/**
 * @description Adds any given instances & their descendant {@link BasePart BasePart}s to any given collision group.
 * @param { Instance } Object The object to be appended.
 * @param { string } Group The collision group.
 * @deprecated
 */
export function addToCollisionGroup(Object: Instance, Group: string) {
    getBaseParts(Object)
        .forEach(Value => 
            PhysicsService.SetPartCollisionGroup(Value, Group));
};

/**
 * @description Adds any given instances & their descendant {@link BasePart BasePart}s to any given network.
 * @param { Instance } Object The object to be appended to the network.
 * @param { Player } [ Owner ] The owner of the given network.
 */
export function setNetworkOwner(Object: Instance, Owner: Player | undefined) {
    getBaseParts(Object)
        .filter(Value => 
            Value.CanSetNetworkOwnership()[0])
            .forEach(Value => 
                Value.SetNetworkOwner(Owner));
};