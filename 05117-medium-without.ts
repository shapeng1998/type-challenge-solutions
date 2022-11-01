// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
]

// ============= Your Code Here =============
type TupleOrNumberToUnion<T extends unknown | readonly unknown[]> = T extends readonly unknown[] ? T[number] : T
type Without<
  T extends readonly unknown[],
  U extends unknown | readonly unknown[],
  P extends readonly unknown[] = []
> = T extends [infer F, ...infer R] ? Without<R, U, F extends TupleOrNumberToUnion<U> ? P : [...P, F]> : P
