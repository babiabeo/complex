import { complex } from "../complex.ts";
import { IS_FINITE, IS_INF, POS_INF } from "../utils.ts";

/**
 * Returns the hyperbolic sine of a complex number.
 *
 * ### Special cases
 *
 * | real             | imaginary        | `sinh()`       |
 * | ---------------- | ---------------- | -------------- |
 * | ±0               | ±0               | (±0, ±0)       |
 * | ±0               | ±Inf             | (±0, NaN)      |
 * | ±0               | NaN              | (±0, NaN)      |
 * | x (any finite x) | ±Inf             | (NaN, NaN)     |
 * | x (any finite x) | NaN              | (NaN, NaN)     |
 * | ±Inf             | ±0               | (±Inf, ±0)     |
 * | ±Inf             | ±Inf             | (±Inf, NaN)    |
 * | ±Inf             | NaN              | (±Inf, NaN)    |
 * | ±Inf             | y (any finite y) | ±Inf \* cis(y) |
 * | NaN              | ±0               | (NaN, ±0)      |
 * | NaN              | NaN              | (NaN, NaN)     |
 * | NaN              | ±Inf             | (NaN, NaN)     |
 * | NaN              | y (any finite y) | (NaN, NaN)     |
 *
 * <sup>_cis(y) = cos(y) + i sin(y)_</sup>
 *
 * @example
 * ```ts
 * sinh(new complex(1, 1)); // 0.6349639 + 1.2984576i
 * ```
 */
export function sinh(z: complex): complex {
    const x = z.real;
    const y = z.imag;

    // normal cases
    if (IS_FINITE(x) && IS_FINITE(y)) {
        if (y === 0) {
            return new complex(Math.sinh(x), y);
        }
        return new complex(
            Math.sinh(x) * Math.cos(y),
            Math.cosh(x) * Math.sin(y),
        );
    }

    // sinh(+-0 +- i Inf) = +-0 + i NaN
    // sinh(+-0 +- i NaN) = +-0 + i NaN
    //
    // sinh(x +- i Inf) = NaN + i NaN
    // sinh(x +- i NaN) = NaN + i NaN
    if (IS_FINITE(x) && !IS_FINITE(y)) {
        if (x === 0) {
            return new complex(x, NaN);
        }
        return new complex(NaN, NaN);
    }

    // sinh(+-Inf +- i 0) = +-Inf +- i 0
    // sinh(NaN +- i 0)   = NaN +- i 0
    if (!IS_FINITE(x) && y === 0) {
        return new complex(x, y);
    }

    // sinh(+-Inf +- i Inf) = +-Inf + i NaN
    // sinh(+-Inf +- i NaN) = +-Inf + i NaN
    //
    // sinh(+-Inf + y) = +-Inf * (cos(y) + i sin(y))
    if (IS_INF(x)) {
        if (!IS_FINITE(y)) {
            return new complex(x, NaN);
        }
        return new complex(x * Math.cos(y), POS_INF * Math.sin(y));
    }

    // sinh(NaN +- i NaN) = NaN + i NaN
    // sinh(NaN +- i Inf) = NaN + i NaN
    // sinh(NaN + i y)    = NaN + i NaN
    return new complex(NaN, NaN);
}
