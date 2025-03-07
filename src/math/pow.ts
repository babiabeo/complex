import type { complex } from "../complex.ts";
import { exp } from "./exp.ts";
import { log } from "./log.ts";

/**
 * Raises a complex number to the complex `c`-th power.
 *
 * @example
 * ```ts
 * const i = new complex(0, 1);
 * pow(i, i); // 0.2078796 + 0i
 * ```
 *
 * @param z The "base" complex number.
 * @param c The "exponent" complex number.
 */
export function pow(z: complex, c: complex): complex {
    return exp(log(z).mul(c));
}
