import { cmplx, type complex } from "../complex.ts";
import { isInf, isNaN2, POS_INF } from "../utils.ts";

/**
 * Returns the complex exponential of the complex argument `a`
 * (the base-e exponential of `a`).
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * ComplexMath.exp(cmplx(3, 4)); // -13.128783081462158 - 15.200784463067954i
 * ```
 */
export function exp(a: complex): complex {
    const r = a.real;
    const i = a.imag;

    if (isInf(r)) {
        if (r > 0 && i === 0) {
            return a;
        }

        if (isInf(i) || isNaN2(i)) {
            if (r < 0) {
                return cmplx(0);
            }

            return cmplx(POS_INF, NaN);
        }
    }

    if (isNaN2(r) && i === 0) {
        return a;
    }

    const e = Math.exp(r);
    return cmplx(e * Math.cos(i), e * Math.sin(i));
}

/**
 * Returns the natural logarithm of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * ComplexMath.log(cmplx(3, 4)); // 1.6094379124341003 + 0.9272952180016122i
 * ```
 */
export function log(a: complex): complex {
    return cmplx(Math.log(a.abs()), a.phase());
}

/**
 * Returns the base 10 logarithm of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * ComplexMath.log10(cmplx(3, 4)); // 0.6989700043360187 + 0.4027191962733731i
 * ```
 */
export function log10(a: complex): complex {
    // log10(a) = log(a) / log(10) = log(a) * log10(e)
    return log(a).mult(Math.LOG10E);
}
