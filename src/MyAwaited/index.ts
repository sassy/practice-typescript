type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;

type A2 = MyAwaited<Promise<string>>;
type B2 = MyAwaited<Promise<Promise<string>>>;
