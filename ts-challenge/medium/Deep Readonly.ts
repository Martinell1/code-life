type DeepReadonly<T> = {
  readonly [k in keyof T]: T[k] extends Record<string, unknown>|Array<unknown> ? DeepReadonly<T[k]> : T[k]
}