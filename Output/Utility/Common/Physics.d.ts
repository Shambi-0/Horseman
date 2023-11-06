/// <reference types="@rbxts/types" />
/**
 * @description Extracts all of the {@link BasePart BasePart} descendants.
 * @param { Instance } Object The root {@link Instance Instance} which will have all of it's {@link BaseParts BasePart} extracted.
 * @param { boolean } [ ExcludeRoot ] Whether the root object should be excluded.
 * @returns { BasePart[] } All of the {@link BaseParts BasePart}.
 */
export declare function getBaseParts(Object: Instance, ExcludeRoot?: boolean): BasePart[];
/**
 * @description Adds any given instances & their descendant {@link BasePart BasePart}s to any given collision group.
 * @param { Instance } Object The object to be appended.
 * @param { string } Group The collision group.
 * @deprecated
 */
export declare function addToCollisionGroup(Object: Instance, Group: string): void;
/**
 * @description Adds any given instances & their descendant {@link BasePart BasePart}s to any given network.
 * @param { Instance } Object The object to be appended to the network.
 * @param { Player } [ Owner ] The owner of the given network.
 */
export declare function setNetworkOwner(Object: Instance, Owner: Player | undefined): void;
