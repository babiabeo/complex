/**
 * A package providing implementation of complex numbers and mathematical
 * functions.
 *
 * The {@linkcode complex} class represents a complex number which has a
 * real part and an imaginary part. It is expressed in standard form
 * `a + bi`, where:
 * - `a`: the real part
 * - `b`: the imaginary part
 * - `i`: the imaginary unit
 *
 * You can also create a complex number using {@linkcode cmplx} function.
 *
 * ```ts
 * const cmplx1 = cmplx(1, 9); // 1 + 9i
 * const cmplx2 = cmplx(5, 4); // 5 + 4i
 * ```
 *
 * The {@linkcode complex} class has methods to perform basic operations,
 * such as `add()`, `sub()`, etc.
 *
 * ```ts
 * const cmplx1 = cmplx(1, 9); // 1 + 9i
 * const cmplx2 = cmplx(5, 4); // 5 + 4i
 *
 * cmplx1.add(cmplx2); // (1 + 9i) + (5 + 4i)
 * cmplx1.sub(cmplx2); // (1 + 9i) - (5 + 4i)
 * ```
 *
 * Besides that, this package also has `cmath` which is a collection of
 * mathematics functionality for complex numbers, such as `sin()`, `atan()`,
 * `log()`, etc.
 *
 * ```ts
 * const cmplx1 = cmplx(1, 9); // 1 + 9i
 * const cmplx2 = cmplx(5, 4); // 5 + 4i
 *
 * cmath.sqrt(cmplx1);
 * cmath.log(cmplx1);
 * cmath.pow(cmplx2, 3);
 * ```
 *
 * Based on
 * - https://en.cppreference.com/w/cpp/header/complex
 * - https://git.musl-libc.org/cgit/musl/tree/src/complex
 * - https://pkg.go.dev/math/cmplx.
 *
 * @module
 */

import { complex } from "./complex.ts";
import * as cmath from "./math/mod.ts";

/**
 * Creates a new complex number.
 *
 * @example
 * ```ts
 * cmplx(3);     // 3 + 0i
 * cmplx(9, -7); // 9 - 7i
 * ```
 *
 * @param re The real part.
 * @param im The imaginary part.
 * @returns A new complex number.
 */
function cmplx(re: number, im?: number): complex {
    return new complex(re, im);
}

export { cmath, cmplx, complex };
