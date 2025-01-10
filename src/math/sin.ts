import { complex } from "../complex.ts";
import { cosh, sinh } from "./sinh.ts";

/**
 * Returns the sine of a complex number.
 *
 * @example
 * ```ts
 * sin(new complex(1, 1)); // 1.2984576 + 0.6349639i
 * ```
 *
 * @param z A complex number.
 */
export function sin(z: complex): complex {
    const w = sinh(new complex(-z.imag, z.real));
    return new complex(w.imag, -w.real);
}

/**
 * Returns the cosine of a complex number.
 *
 * @example
 * ```ts
 * cos(new complex(1, 1)); // 0.8337300 - 0.9888977i
 * ```
 *
 * @param z A complex number.
 */
export function cos(z: complex): complex {
    return cosh(new complex(-z.imag, z.real));
}
