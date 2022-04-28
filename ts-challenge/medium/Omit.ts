type MyOmit<T extends Object, K> = {
  [key in keyof T as key extends K ? never : key ] : T[key]
}