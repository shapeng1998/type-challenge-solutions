// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>
]

// ============= Your Code Here =============
type Chunk<T extends readonly unknown[], L extends number, U extends readonly unknown[] = []> = U['length'] extends L
  ? [U, ...Chunk<T, L>]
  : T extends [infer F, ...infer R]
  ? Chunk<R, L, [...U, F]>
  : U extends []
  ? []
  : [U]
