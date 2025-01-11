import { complex } from "../complex.ts";
import { copysign, IS_INF, IS_NAN, POS_INF, sign } from "../utils.ts";

/**
 * Returns the square root of a complex number.
 *
 * ### Special cases
 *
 * | real              | imaginary        | `sqrt()`     |
 * | ----------------- | ---------------- | ------------ |
 * | ±0                | ±0               | (+0, ±0)     |
 * | x (including NaN) | ±Inf             | (+Inf, ±Inf) |
 * | x (any finite x)  | NaN              | (NaN, NaN)   |
 * | -Inf              | y (any finite y) | (+0, ±Inf)   |
 * | +Inf              | y (any finite y) | (+Inf, ±0)   |
 * | -Inf              | NaN              | (NaN, +Inf)  |
 * | +Inf              | NaN              | (+Inf, NaN)  |
 * | NaN               | y                | (NaN, NaN)   |
 * | NaN               | NaN              | (NaN, NaN)   |
 *
 * @example
 * ```ts
 * sqrt(new complex(-4, 0)); // 0 + 2i
 * ```
 *
 * @param z A complex number.
 */
export function sqrt(z: complex): complex {
    let x = z.real;
    let y = z.imag;

    if (x === 0 && y === 0) {
        return new complex(0, y);
    }

    // sqrt(x +- i Inf)   = Inf +- i Inf
    // sqrt(NaN +- i Inf) = Inf +- i Inf
    if (IS_INF(y)) {
        return new complex(POS_INF, y);
    }

    // sqrt(NaN + i y)   = NaN + i NaN
    // sqrt(NaN + i NaN) = NaN + i NaN
    if (IS_NAN(x)) {
        return new complex(NaN, NaN);
    }

    // sqrt(-Inf + i y)   = 0 + i Inf
    // sqrt(-Inf + i NaN) = NaN +- i Inf
    // sqrt(+Inf + i y)   = Inf + i 0
    // sqrt(+Inf + i NaN) = Inf + i NaN
    if (IS_INF(x)) {
        if (sign(x)) {
            return new complex(Math.abs(y - y), copysign(x, y));
        }
        return new complex(x, copysign(y - y, y));
    }

    let scale;
    // Rescale avoiding overflow and underflow
    if (Math.abs(x) > 4 || Math.abs(y) > 4) {
        x *= 0.25;
        y *= 0.25;
        scale = 2;
    } else {
        x *= 1.8014398509481984e16; // 2**54
        y *= 1.8014398509481984e16;
        scale = 7.450580596923828125e-9; // 2**-27
    }

    let t;
    let r = Math.hypot(x, y);
    if (x >= 0) {
        t = Math.sqrt(0.5 * (r + x));
        r = scale * Math.abs(y / (2 * t));
        t *= scale;
    } else {
        r = Math.sqrt(0.5 * (r - x));
        t = scale * Math.abs(y / (2 * r));
        r *= scale;
    }

    return new complex(t, copysign(r, y));
}
