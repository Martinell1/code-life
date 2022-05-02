type Flatten<A extends any[]> = A extends [infer First,...infer Rest] 
  ? First extends any[] 
    ? [...Flatten<First> ,...Flatten<Rest>]
    : [First,...Flatten<Rest>]
  : []