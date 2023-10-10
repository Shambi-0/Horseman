export declare function useSounds<Pack extends {
    [Key: string]: number;
}>(Sounds: Pack): (Name: keyof Pack, Volume?: number, Speed?: number) => void;
