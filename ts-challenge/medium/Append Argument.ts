type AppendArgument<Fn , A> = Fn extends (...args : infer B) => infer ReturnType ? (...args:[...B,A])=> ReturnType: never