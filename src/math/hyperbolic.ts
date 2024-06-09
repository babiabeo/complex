import { cmplx, Complex, type complex } from "../complex.ts";
import { isInf, isNaN2, POS_INF, sign } from "../_utils.ts";
import { acos, asin, atan } from "./trigonometric.ts";

/**
 * Returns the hyperbolic sine of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * import { ComplexMath, cmplx } from "@babia/complex";
 *
 * ComplexMath.sinh(cmplx(1, 1)); // 0.6349639147847361 + 1.2984575814159773i
 * ```
 */
export function sinh(a: complex): complex {
    const r = a.real;
    const i = a.imag;

    if (r === 0 && (isInf(i) || isNaN2(i))) {
        return cmplx(r, NaN);
    }

    if (isInf(r)) {
        if (i === 0) {
            return cmplx(r, i);
        }

        if (isInf(i) || isNaN2(i)) {
            return cmplx(r, NaN);
        }
    }

    if (i === 0 && isNaN2(r)) {
        return cmplx(NaN, i);
    }

    return cmplx(Math.sinh(r) * Math.cos(i), Math.cosh(r) * Math.sin(i));
}

/**
 * Returns the hyperbolic cosine of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * import { ComplexMath, cmplx } from "@babia/complex";
 *
 * ComplexMath.cosh(cmplx(1, 1)); // 0.8337300251311491 + 0.9888977057628651i
 * ```
 */
export function cosh(a: complex): complex {
    const r = a.real;
    const i = a.imag;

    if (r === 0 && (isInf(i) || isNaN2(i))) {
        return cmplx(NaN);
    }

    if (isInf(r)) {
        if (i === 0) {
            return cmplx(POS_INF);
        }

        if (isInf(i) || isNaN2(i)) {
            return cmplx(POS_INF, NaN);
        }
    }

    if (i === 0 && isNaN2(r)) {
        return cmplx(NaN, i);
    }

    return cmplx(Math.cosh(r) * Math.cos(i), Math.sinh(r) * Math.sin(i));
}

/**
 * Returns the hyperbolic tangent of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * import { ComplexMath, cmplx } from "@babia/complex";
 *
 * ComplexMath.tanh(cmplx(1, 1)); // 1.0839233273386948 + 0.27175258531951174i
 * ```
 */
export function tanh(a: complex): complex {
    const r = a.real;
    const i = a.imag;

    if (isInf(r)) {
        return cmplx(sign(r));
    }

    if (i === 0 && isNaN2(r)) {
        return cmplx(NaN, i);
    }

    const d = Math.cosh(2 * r) + Math.cos(2 * i);

    if (d === 0) {
        return Complex.Inf();
    }

    return cmplx(Math.sinh(2 * r) / d, Math.sin(2 * i) / d);
}

/**
 * Returns the inverse hyperbolic sine of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * import { ComplexMath, cmplx } from "@babia/complex";
 *
 * ComplexMath.asinh(cmplx(1, 1)); // 1.0612750619050355 + 0.6662394324925153i
 * ```
 */
export function asinh(a: complex): complex {
    const w = asin(cmplx(-a.imag, a.real));
    return cmplx(w.imag, -w.real);
}

/**
 * Returns the inverse hyperbolic cosine of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * import { ComplexMath, cmplx } from "@babia/complex";
 *
 * ComplexMath.acosh(cmplx(1, 1)); // 1.0612750619050355 + 0.9045568943023813i
 * ```
 */
export function acosh(a: complex): complex {
    const w = acos(a);
    return cmplx(-w.imag, w.real);
}

/**
 * Returns the inverse hyperbolic tangent of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * import { ComplexMath, cmplx } from "@babia/complex";
 *
 * ComplexMath.atanh(cmplx(1, 1)); // 0.40235947810852507 + 1.0172219678978514i
 * ```
 */
export function atanh(a: complex): complex {
    const w = atan(cmplx(-a.imag, a.real));
    return cmplx(w.imag, -w.real);
}
