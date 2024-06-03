/**
 * A package provides implementation of complex numbers and mathematical functions
 * for complex numbers.
 *
 * The `Complex` class represents a complex number which has a real part and an
 * imaginary part. It is expressed in form `a + bi`, where:
 * - `a`: the real part
 * - `b`: the imaginary part
 * - `i`: the imaginary unit
 *
 * For example
 * ```ts
 * const cmplx1 = new Complex(1, 9); // 1 + 9i
 * const cmplx2 = new Complex(5, 4); // 5 + 4i
 * ```
 *
 * It has methods to perform basic operations, such as `add()`, `sub()`, etc.
 * ```ts
 * cmplx1.add(cmplx2); // (1 + 9i) + (5 + 4i)
 * cmplx1.sub(cmplx2); // (1 + 9i) - (5 + 4i)
 * ```
 *
 * Besides that, this package also has `ComplexMath` which provides basic
 * mathematics functionality for complex numbers, such as `sin()`, `atan()`,
 * `log()`, etc.
 * ```ts
 * ComplexMath.sqrt(cmplx1);
 * ComplexMath.log(cmplx1);
 * ComplexMath.pow(cmplx2, 3);
 * ```
 *
 * Based on http://netlib.sandia.gov/cephes/c9x-complex and https://pkg.go.dev/math/cmplx.
 *
 * @module
 */

export * from "./src/complex.ts";
export * as ComplexMath from "./src/math/mod.ts";
