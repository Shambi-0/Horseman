export function fromList<T>(... Objects: T[]): T {
    return Objects[math.floor(math.random() * Objects.size())];
};