import { complex } from "../complex.ts";

/**
 * Returns the natural logarithm of a complex number.
 *
 * @example
 * ```ts
 * const z = new complex(3, 1);
 * log(z); // log(3 + i) = 1.15129255 + 0.32175055i
 * ```
 */
export function log(z: complex): complex {
    const [r, phi] = z.polar();
    return new complex(Math.log(r), phi);
}

/**
 * Returns the base-10 logarithm of a complex number.
 *
 * @example
 * ```ts
 * const z = new complex(3, 1);
 * log10(z); // log10(3 + i) = 0.5 + 0.13973449i
 * ```
 */
export function log10(z: complex): complex {
    // log10(z) = log10(e) * log(x)
    return log(z).mul(Math.LOG10E);
}
