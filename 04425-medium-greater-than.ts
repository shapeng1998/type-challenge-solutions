// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>
]

// ============= Your Code Here =============
type ToTuple<T extends number, U extends readonly unknown[] = []> = U['length'] extends T
  ? U
  : ToTuple<T, [...U, unknown]>
type GreaterThanTuple<T extends readonly unknown[], U extends readonly unknown[]> = T extends [...infer F, ...U]
  ? F extends []
    ? false
    : true
  : false
type GreaterThan<T extends number, U extends number> = GreaterThanTuple<ToTuple<T>, ToTuple<U>>
