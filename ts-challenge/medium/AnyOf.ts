type False = null | undefined | '' | false | 0 | [] | {[key:number | string]:never}

type AnyOf<T extends readonly any[]> = T extends [infer First,...infer Rest] ? First extends False ? AnyOf<Rest> : true : false