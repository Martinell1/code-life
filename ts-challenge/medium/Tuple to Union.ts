type TupleToUnion<T extends any[]> = T extends [infer First,...infer Rest] ? TupleToUnion<Rest> | First : never
//type TupleToUnion<T extends any[]> = T[number]