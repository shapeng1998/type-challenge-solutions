// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [Expect<Equal<Fibonacci<3>, 2>>, Expect<Equal<Fibonacci<8>, 21>>]

// ============= Your Code Here =============
type Fibonacci<
  T extends number,
  U1 extends readonly unknown[] = [],
  U2 extends readonly unknown[] = [unknown],
  R extends readonly unknown[] = []
> = R['length'] extends T ? U1['length'] : Fibonacci<T, U2, [...U1, ...U2], [...R, unknown]>
