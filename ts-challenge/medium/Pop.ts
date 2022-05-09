type Pop<T extends any[]> = T extends [...infer Rest, infer Last] ? Rest : never

type Shift<T extends any[]> = T extends [infer First, ...infer Rest] ? Rest : never

type Push<T extends any[] , V > = [...T , V]

type Unshift<T extends any[],V> = [V , ...T]