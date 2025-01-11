import { complex } from "../complex.ts";

/**
 * Returns the arc tangent of a complex number.
 *
 * @example
 * ```ts
 * atan(new complex(0, 2)); // 1.5707963 + 0.5493061i
 * ```
 *
 * @param z A complex number
 */
export function atan(z: complex): complex {
    const x = z.real;
    const y = z.imag;

    const x2 = x * x;
    let a = 1 - x2 - (y * y);

    let t = 0.5 * Math.atan2(2 * x, a);
    const w = t;

    t = y - 1;
    a = x2 + (t * t);
    t = y + 1;
    a = (x2 + (t * t)) / a;

    return new complex(w, 0.25 * Math.log(a));
}
