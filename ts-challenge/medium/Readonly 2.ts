type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [key in K] : T[key] 
} & {
  [key in keyof T as key extends K ? never : key] : T[key]
}