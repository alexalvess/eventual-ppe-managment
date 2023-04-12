import { IDisposable } from "./idisposable";

export async function using<T extends IDisposable, U>(resource: T, func: (resource: T) => Promise<U>) {
    try {
        return await func(resource);
    } finally {
        await resource.dispose();
    }
}