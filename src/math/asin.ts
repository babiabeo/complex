import { complex } from "../complex.ts";
import { log } from "./log.ts";
import { sqrt } from "./sqrt.ts";

/**
 * Returns the inverse sine (or arc sine) of a complex number.
 *
 * @example
 * ```ts
 * asin(new complex(-2, 0)); // -1.5707963 + 1.3169590i
 * ```
 *
 * @param z A complex number.
 */
export function asin(z: complex): complex {
    const x = z.real;
    const y = z.imag;

    // (a + bi) * i = -b + ai
    const iz = new complex(-y, x);
    const w = new complex(1 - (x - y) * (x + y), -2 * x * y);
    const r = log(sqrt(w).add(iz));

    // (a + bi) * (-i) = b - ai
    return new complex(r.imag, -r.real);
}

/**
 * Returns the inverse cosine (or arc cosine) of a complex number.
 *
 * @example
 * ```ts
 * acos(new complex(-2, 0)); // 3.1415927 - 1.3169590i
 * ```
 *
 * @param z A complex number.
 */
export function acos(z: complex): complex {
    const w = asin(z);
    return new complex(0.5 * Math.PI - w.real, -w.imag);
}
