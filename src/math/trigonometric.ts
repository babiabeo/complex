import { cmplx, Complex, type complex } from "../complex.ts";
import {
    coshSinh,
    isInf,
    isNaN2,
    POS_INF,
    reducePi,
    sign,
    tans,
} from "../_utils.ts";
import { log } from "./exponential.ts";
import { sqrt } from "./power.ts";

/**
 * Returns the sine of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * import { ComplexMath, cmplx } from "@babia/complex";
 *
 * ComplexMath.sin(cmplx(1, 1)); // 1.2984575814159773 + 0.6349639147847361i
 * ```
 */
export function sin(a: complex): complex {
    const r = a.real;
    const i = a.imag;

    if (i === 0 && (isInf(r) || isNaN2(r))) {
        return cmplx(NaN, i);
    }

    if (isInf(i)) {
        if (r === 0) {
            return cmplx(r, i);
        }

        if (isNaN2(r) || isInf(r)) {
            return cmplx(NaN, i);
        }
    }

    if (r === 0 && isNaN2(i)) {
        return cmplx(r, i);
    }

    const [cosh, sinh] = coshSinh(i);

    return cmplx(
        Math.sin(r) * cosh,
        Math.cos(r) * sinh,
    );
}

/**
 * Returns the cosine of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * import { ComplexMath, cmplx } from "@babia/complex";
 *
 * ComplexMath.cos(cmplx(1, 1)); // 0.8337300251311491 - 0.9888977057628651i
 * ```
 */
export function cos(a: complex): complex {
    const r = a.real;
    const i = a.imag;

    if (i === 0 && (isInf(r) || isNaN2(r))) {
        return cmplx(NaN);
    }

    if (isInf(i)) {
        if (r === 0) {
            return cmplx(POS_INF);
        }

        if (isNaN2(r) || isInf(r)) {
            return cmplx(POS_INF, NaN);
        }
    }

    if (r === 0 && isNaN2(i)) {
        return cmplx(NaN);
    }

    const [cosh, sinh] = coshSinh(i);

    return cmplx(
        Math.cos(r) * cosh,
        -Math.sin(r) * sinh,
    );
}

/**
 * Returns the tangent of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * import { ComplexMath, cmplx } from "@babia/complex";
 *
 * ComplexMath.tan(cmplx(1, 1)); // 0.27175258531951174 + 1.0839233273386948i
 * ```
 */
export function tan(a: complex): complex {
    const r = a.real;
    const i = a.imag;

    if (isInf(i)) {
        return cmplx(0, sign(i));
    }

    if (r === 0 && isNaN2(i)) {
        return cmplx(r, i);
    }

    let d = Math.cosh(2 * i) + Math.cos(2 * r);

    if (Math.abs(d) < 0.25) {
        d = tans(a);
    }

    if (d === 0) {
        return Complex.Inf();
    }

    return cmplx(
        Math.sin(2 * r) / d,
        Math.sinh(2 * i) / d,
    );
}

/**
 * Returns the cotangent of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * import { ComplexMath, cmplx } from "@babia/complex";
 *
 * ComplexMath.cot(cmplx(1, 1)); // 0.2176215618544027 - 0.868014142895925i
 * ```
 */
export function cot(a: complex): complex {
    const r = a.real;
    const i = a.imag;

    let d = Math.cosh(2 * i) - Math.cos(2 * r);

    if (Math.abs(d) < 0.25) {
        d = tans(a);
    }

    if (d === 0) {
        return Complex.Inf();
    }

    return cmplx(
        Math.sin(2 * r) / d,
        -Math.sinh(2 * i) / d,
    );
}

/**
 * Returns the arc sine of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * import { ComplexMath, cmplx } from "@babia/complex";
 *
 * ComplexMath.asin(cmplx(1, 1)); // 0.6662394324925153 + 1.0612750619050355i
 * ```
 */
export function asin(a: complex): complex {
    const r = a.real;
    const i = a.imag;

    if (i === 0 && Math.abs(r) <= 1) {
        return cmplx(Math.asin(r), i);
    }

    if (r === 0 && Math.abs(i) <= 1) {
        return cmplx(r, Math.asinh(i));
    }

    if (isNaN2(i)) {
        if (r === 0) {
            return cmplx(r, NaN);
        }

        if (isInf(r)) {
            return cmplx(NaN, r);
        }

        return Complex.NaN();
    }

    if (isInf(i)) {
        if (isNaN2(r)) {
            return cmplx(r, i);
        }

        if (isInf(r)) {
            return cmplx(sign(r) * Math.PI / 4, i);
        }

        return cmplx(0, i);
    }

    if (isInf(r)) {
        return cmplx(
            sign(r) * (Math.PI / 2),
            sign(i) * r,
        );
    }

    const ct = cmplx(-i, r); // (a + bi) * i = -b + ai

    const aa = cmplx((r - i) * (r + i), 2 * r * i);
    const a1 = cmplx(1 - aa.real, -aa.imag);
    const a2 = log(sqrt(a1).add(ct));

    return cmplx(a2.imag, -a2.real); // (a + bi) * (-i) = b - ai
}

/**
 * Returns the arc cosine of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * import { ComplexMath, cmplx } from "@babia/complex";
 *
 * ComplexMath.acos(cmplx(1, 1)); // 0.9045568943023813 - 1.0612750619050355i
 * ```
 */
export function acos(a: complex): complex {
    const as = asin(a);
    return cmplx((Math.PI / 2) - as.real, -as.imag);
}

/**
 * Returns the arc tangent of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * import { ComplexMath, cmplx } from "@babia/complex";
 *
 * ComplexMath.atan(cmplx(1, 1)); // 1.0172219678978514 + 0.40235947810852507i
 * ```
 */
export function atan(a: complex): complex {
    const r = a.real;
    const i = a.imag;

    if (i === 0) {
        return cmplx(Math.atan(r), i);
    }

    if (r === 0 && Math.abs(i) <= 1) {
        return cmplx(r, Math.atanh(i));
    }

    if (isInf(r) || isInf(i)) {
        if (isNaN2(r)) {
            return cmplx(NaN);
        }

        return cmplx(sign(r) * (Math.PI / 2));
    }

    if (isNaN2(r) || isNaN2(i)) {
        return Complex.NaN();
    }

    const r2 = r * r;

    let aa = 1 - r2 - (i * i);
    if (aa === 0) {
        return Complex.Inf();
    }

    let t = 0.5 * Math.atan2(2 * r, aa);
    const w = reducePi(t);

    t = i - 1;
    aa = r2 + (t * t);

    if (aa === 0) {
        return Complex.Inf();
    }

    t = i + 1;
    aa = (r2 + (t * t)) / aa;

    return cmplx(w, 0.25 * Math.log(aa));
}
