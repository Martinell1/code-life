type MinusOne<T extends number,arr extends unknown[] = []> = [T,...arr]['length'] extends T ? arr['length'] : MinusOne<T,[T,...arr]>