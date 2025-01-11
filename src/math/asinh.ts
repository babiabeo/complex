import { complex } from "../complex.ts";
import { acos, asin } from "./asin.ts";

/**
 * Returns the inverse hyperbolic sine (or area hyperbolic sine)
 * of a complex number.
 *
 * @example
 * ```ts
 * asinh(new complex(1, 2)); // 1.4693517 + 1.0634400i
 * ```
 *
 * @param z A complex number.
 */
export function asinh(z: complex): complex {
    const w = asin(new complex(-z.imag, z.real));
    return new complex(w.imag, -w.real);
}

/**
 * Returns the inverse hyperbolic cosine (or area hyperbolic cosine)
 * of a complex number.
 *
 * @example
 * ```ts
 * acosh(new complex(1, 1)); // 1.0612751 + 0.9045557i
 * ```
 *
 * @param z A complex number.
 */
export function acosh(z: complex): complex {
    const w = acos(z);
    return new complex(-w.imag, w.real);
}
