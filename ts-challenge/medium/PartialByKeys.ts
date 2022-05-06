type PartialByKeys<T, K extends keyof any=keyof T> = {
    [key in keyof T & K]?:T[key]
  } & {
    [key in Exclude<keyof T,K> ]:T[key]
  } extends infer R ?{[P in keyof R]:R[P]} :never