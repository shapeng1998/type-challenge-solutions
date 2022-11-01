// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>
]

// ============= Your Code Here =============
// basic solution
// type ToTuple<T extends number, U extends readonly unknown[] = []> = U['length'] extends T
//   ? U
//   : ToTuple<T, [...U, unknown]>
// type MinusOne<T extends number> = ToTuple<T> extends [unknown, ...infer F] ? F['length'] : 0

// advanced solution
type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type DigitToTuple<S extends Digit, T extends readonly unknown[] = []> = S extends `${T['length']}`
  ? T
  : DigitToTuple<S, [...T, unknown]>
type MultiplyByTen<T extends readonly unknown[]> = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T]
type ToTuple<S extends string, T extends readonly unknown[] = []> = S extends `${infer F extends Digit}${infer R}`
  ? ToTuple<R, [...MultiplyByTen<T>, ...DigitToTuple<F>]>
  : T
type MinusOne<T extends number> = ToTuple<`${T}`> extends [unknown, ...infer F] ? F['length'] : 0
