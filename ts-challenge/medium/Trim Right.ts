type TrimRight<S extends string> = S extends `${infer Str}${' ' | '\n' | '\t'}` ? TrimRight<Str> : S