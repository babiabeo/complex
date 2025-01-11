import { complex } from "../mod.ts";
import { copysign, IS_FINITE, IS_NAN } from "../utils.ts";

/**
 * Returns the hyperbolic tangent of a complex number.
 *
 * ### Special cases
 *
 * | real                     | imaginary         | `tanh()`   |
 * | ------------------------ | ----------------- | ---------- |
 * | ±0                       | ±0                | (±0, ±0)   |
 * | ±0                       | ±Inf              | (±0, NaN)  |
 * | ±0                       | NaN               | (±0, NaN)  |
 * | x (any finite nonzero x) | ±Inf              | (NaN, NaN) |
 * | x (any finite nonzero x) | NaN               | (NaN, NaN) |
 * | ±Inf                     | ±Inf              | (±1, ±0)   |
 * | ±Inf                     | y (any finite y)  | (±1, ±0)   |
 * | ±Inf                     | NaN               | (±1, +0)   |
 * | NaN                      | ±0                | (NaN, ±0)  |
 * | NaN                      | y (any nonzero y) | (NaN, NaN) |
 * | NaN                      | NaN               | (NaN, NaN) |
 *
 * @example
 * ```ts
 * tanh(new complex(1, 1)); // 1.0839233 + 0.2717526i
 * ```
 *
 * @param z A complex number.
 */
export function tanh(z: complex): complex {
    const x = z.real;
    const y = z.imag;

    // tanh(NaN +- i 0) = NaN +- i 0
    // tanh(NaN + i y)  = NaN + i NaN  (y != 0)
    //
    // tanh(+-Inf +- i Inf) = +-1 +- i 0
    // The sign of the imaginary part is unspecified.
    //
    // tanh(+-Inf + i y)   = +-1 +- i 0
    //
    // tanh(+-Inf + i NaN) = +-1 + i 0
    // The sign of the imaginary part is unspecified.
    if (!IS_FINITE(x)) {
        if (IS_NAN(x)) {
            return new complex(x, y === 0 ? y : x * y);
        }
        return new complex(
            copysign(1, x),
            copysign(0, y),
        );
    }

    // tanh(+-0 +- i Inf) = +-0 + i NaN
    // tanh(+-0 + i NaN)  = +-0 + i NaN
    // tanh(x +- i Inf)   = NaN + i NaN  (x != 0)
    // tanh(x +- i NaN)   = NaN + i NaN  (x != 0)
    if (!IS_FINITE(y)) {
        return new complex(x ? y - y : x, y - y);
    }

    // Kahan's algorithm
    const t = Math.tan(y);
    const beta = 1 + t * t; // 1 / cos^2(x) = 1 + tan^2(x)
    const s = Math.sinh(x);
    const rho = Math.sqrt(1 + s * s); // = cosh(x)
    const d = 1 + beta * s * s;

    return new complex((beta * rho * s) / d, t / d);
}
