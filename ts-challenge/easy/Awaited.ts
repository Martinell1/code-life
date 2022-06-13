type MyAwaited<U> = U extends Promise<infer T> ? MyAwaited<T> : U
