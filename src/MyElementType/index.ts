type MyElementType<T> = T extends (infer U)[] ? U : never;

type A1 = MyElementType<string[]>;
type B1 = MyElementType<number[]>;
type C1 = MyElementType<boolean[]>;
