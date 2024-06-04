import { Complex, type complex } from "../complex.ts";
import { isInf, isNaN2, POS_INF, sign } from "../utils.ts";
import { acos, asin, atan } from "./trigonometric.ts";

/**
 * Returns the hyperbolic sine of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * ComplexMath.sinh(new Complex(1, 1)); // 0.6349639147847361 + 1.2984575814159773i
 * ```
 */
export function sinh(a: complex): complex {
    const r = a.real;
    const i = a.imag;

    if (r === 0 && (isInf(i) || isNaN2(i))) {
        return new Complex(r, NaN);
    }

    if (isInf(r)) {
        if (i === 0) {
            return new Complex(r, i);
        }

        if (isInf(i) || isNaN2(i)) {
            return new Complex(r, NaN);
        }
    }

    if (i === 0 && isNaN2(r)) {
        return new Complex(NaN, i);
    }

    return new Complex(
        Math.sinh(r) * Math.cos(i),
        Math.cosh(r) * Math.sin(i),
    );
}

/**
 * Returns the hyperbolic cosine of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * ComplexMath.cosh(new Complex(1, 1)); // 0.8337300251311491 + 0.9888977057628651i
 * ```
 */
export function cosh(a: complex): complex {
    const r = a.real;
    const i = a.imag;

    if (r === 0 && (isInf(i) || isNaN2(i))) {
        return new Complex(NaN);
    }

    if (isInf(r)) {
        if (i === 0) {
            return new Complex(POS_INF);
        }

        if (isInf(i) || isNaN2(i)) {
            return new Complex(POS_INF, NaN);
        }
    }

    if (i === 0 && isNaN2(r)) {
        return new Complex(NaN, i);
    }

    return new Complex(
        Math.cosh(r) * Math.cos(i),
        Math.sinh(r) * Math.sin(i),
    );
}

/**
 * Returns the hyperbolic tangent of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * ComplexMath.tanh(new Complex(1, 1)); // 1.0839233273386948 + 0.27175258531951174i
 * ```
 */
export function tanh(a: complex): complex {
    const r = a.real;
    const i = a.imag;

    if (isInf(r)) {
        return new Complex(sign(r));
    }

    if (i === 0 && isNaN2(r)) {
        return new Complex(NaN, i);
    }

    const d = Math.cosh(2 * r) + Math.cos(2 * i);

    if (d === 0) {
        return Complex.Inf();
    }

    return new Complex(
        Math.sinh(2 * r) / d,
        Math.sin(2 * i) / d,
    );
}

/**
 * Returns the inverse hyperbolic sine of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * ComplexMath.asinh(new Complex(1, 1)); // 1.0612750619050355 + 0.6662394324925153i
 * ```
 */
export function asinh(a: complex): complex {
    const w = asin(new Complex(-a.imag, a.real));
    return new Complex(w.imag, -w.real);
}

/**
 * Returns the inverse hyperbolic cosine of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * ComplexMath.acosh(new Complex(1, 1)); // 1.0612750619050355 + 0.9045568943023813i
 * ```
 */
export function acosh(a: complex): complex {
    const w = acos(a);
    return new Complex(-w.imag, w.real);
}

/**
 * Returns the inverse hyperbolic tangent of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * ComplexMath.atanh(new Complex(1, 1)); // 0.40235947810852507 + 1.0172219678978514i
 * ```
 */
export function atanh(a: complex): complex {
    const w = atan(new Complex(-a.imag, a.real));
    return new Complex(w.imag, -w.real);
}
