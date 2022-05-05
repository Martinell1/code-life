type RemoveIndexSignature<T> = {
    [key in keyof T as key extends `${infer R}` ? R : never] : T[key]
  }