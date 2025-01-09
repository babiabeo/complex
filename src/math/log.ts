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
    const x = Math.abs(z.real);
    const y = Math.abs(z.imag);
    const r = Math.hypot(x, y);
    const phi = Math.atan2(z.real, z.imag);

    // if sqrt(0.5) <= r <= sqrt(3), use log1p() for more accurate results
    //
    //                                 log(x^2 + y^2)   log1p((x^2 - 1) + y^2)
    // log(r) = log(sqrt(x^2 + y^2)) = -------------- = ----------------------
    //                                        2                   2
    if (0.71 <= r && r <= 1.73) {
        const a = Math.max(x, y);
        const b = Math.min(x, y);

        return new complex(
            Math.log1p((a - 1) * (a + 1) + b * b) / 2,
            phi,
        );
    }

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
