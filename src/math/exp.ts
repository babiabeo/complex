import { complex } from "../complex.ts";
import { IS_FINITE, IS_INF, NEG_INF } from "../utils.ts";

/**
 * Returns the complex exponential of a complex number (the base-e exponential of `z`).
 *
 * ### Special cases
 *
 * | real             | imaginary                | `exp()`        |
 * | ---------------- | ------------------------ | -------------- |
 * | ±0               | ±0                       | (1, ±0)        |
 * | x (any finite x) | ±Inf                     | (NaN, NaN)     |
 * | x (any finite x) | NaN                      | (NaN, NaN)     |
 * | +Inf             | ±0                       | (+Inf, ±0)     |
 * | -Inf             | y (any finite y)         | +0 \* cis(y)   |
 * | +Inf             | y (any finite nonzero y) | +Inf \* cis(y) |
 * | -Inf             | ±Inf                     | (+0, +0)       |
 * | +Inf             | ±Inf                     | (+Inf, NaN)    |
 * | -Inf             | NaN                      | (+0, +0)       |
 * | +Inf             | NaN                      | (+Inf, NaN)    |
 * | NaN              | ±0                       | (NaN, ±0)      |
 * | NaN              | NaN                      | (NaN, NaN)     |
 * | NaN              | ±Inf                     | (NaN, NaN)     |
 * | NaN              | y (any finite nonzero y) | (NaN, NaN)     |
 *
 * <sup>_cis(y) = cos(y) + i sin(y)_</sup>
 *
 * @example
 * ```ts
 * exp(new complex(3, 4)); // -13.1287831 - 15.2007845i
 * ```
 *
 * @param z A complex number.
 */
export function exp(z: complex): complex {
    const x = z.real;
    const y = z.imag;

    if (y === 0) {
        return new complex(Math.exp(x), y);
    }

    // exp(+-0 + i y) = cos(y) + i sin(y);
    if (x === 0) {
        return new complex(Math.cos(y), Math.sin(y));
    }

    // exp(finite|NaN +- i Inf|NaN) = NaN + i NaN
    // exp(-Inf +- i Inf|NaN)       = 0 + i 0
    // exp(+Inf +- i Inf|NaN)       = +Inf + i NaN
    if (!IS_FINITE(y)) {
        if (!IS_INF(x)) {
            return new complex(NaN, NaN);
        }
        if (x === NEG_INF) {
            return new complex(0, 0);
        }
        return new complex(x, NaN);
    }

    const e = Math.exp(x);
    return new complex(e * Math.cos(y), e * Math.sin(y));
}
