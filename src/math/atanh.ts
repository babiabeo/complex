import { complex } from "../complex.ts";
import { atan } from "./atan.ts";

/**
 * Returns the inverse hyperbolic tangent (or area hyperbolic tangent)
 * of a complex number.

 * @example
 * ```ts
 * atanh(new complex(1, 2)); // 0.1732868 + 1.1780972i
 * ```
 *
 * @param z A complex number
 */
export function atanh(z: complex): complex {
    const w = atan(new complex(-z.imag, z.real));
    return new complex(w.imag, -w.real);
}
