import { complex } from "../mod.ts";
import { tanh } from "./tanh.ts";

/**
 * Returns the tangent of a complex number.
 *
 * @example
 * ```ts
 * tan(new complex(1, 1)); // 0.2717526 + 1.0839233i
 * ```
 *
 * @param z A complex number
 */
export function tan(z: complex): complex {
    const w = tanh(new complex(-z.imag, z.real));
    return new complex(w.imag, -w.real);
}
