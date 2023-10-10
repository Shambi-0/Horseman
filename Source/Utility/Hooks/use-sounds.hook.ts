import { SoundService, Workspace } from "@rbxts/services";

const PlayLocalSound = (Identity: number, Volume: number, Speed: number) => {
    const Sound = new Instance("Sound")

    Sound.SoundId = `rbxassetid://${Identity}`;
    Sound.PlaybackSpeed = Speed;
    Sound.Volume = Volume;

    Sound.Parent = Workspace;

    if (!Sound.IsLoaded) Sound.Loaded.Wait();

    SoundService.PlayLocalSound(Sound);

    task.delay(Sound.TimeLength, () => Sound.Destroy());
};

export function useSounds<Pack extends { [Key: string]: number }>(Sounds: Pack) {
    return (Name: keyof Pack, Volume: number = 0.5, Speed: number = 1) => {
        task.defer(PlayLocalSound, Sounds[Name], Volume, Speed);
    };
};