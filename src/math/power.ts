import { cmplx, Complex, type complex } from "../complex.ts";
import { isInf, isNumber, POS_INF } from "../_utils.ts";

/**
 * Returns the square root of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * import { ComplexMath, cmplx } from "@babia/complex";
 *
 * ComplexMath.sqrt(cmplx(4, 0)); // 2
 * ComplexMath.sqrt(cmplx(0, 0)); // 0
 * ```
 */
export function sqrt(a: complex): complex {
    let r = 0;

    if (a.imag === 0) {
        if (a.real === 0) {
            return cmplx(0, a.imag);
        }

        r = Math.sqrt(Math.abs(a.real));

        if (a.real < 0) {
            return cmplx(r, a.imag);
        }

        return cmplx(r, a.imag);
    }

    if (isInf(a.imag)) {
        return cmplx(POS_INF, a.imag);
    }

    if (a.real === 0) {
        r = Math.sqrt(Math.abs(a.imag) * 0.5);

        if (a.imag > 0) {
            return cmplx(r, r);
        }

        return cmplx(r, -r);
    }

    let x = a.real;
    let y = a.imag;
    let scale = 0;

    if (Math.abs(x) > 4 || Math.abs(y) > 4) {
        x *= 0.25;
        y *= 0.25;
        scale = 2;
    } else {
        x *= 1.8014398509481984e16; // 2^54
        y *= 1.8014398509481984e16;
        scale = 7.450580596923828125e-9; // 2^-27
    }

    r = cmplx(x, y).abs();
    let t = 0;

    if (x > 0) {
        t = Math.sqrt(0.5 * (r + x));
        r = scale * Math.abs((0.5 * y) / t);
        t *= scale;
    } else {
        r = Math.sqrt(0.5 * (r - x));
        t = scale * Math.abs((0.5 * y) / r);
        r *= scale;
    }

    if (y < 0) {
        return cmplx(t, -r);
    }

    return cmplx(t, r);
}

/**
 * Returns the `n`-th power of a complex number.
 *
 * @param a A complex number
 * @param n A real number
 *
 * @example
 * ```ts
 * import { ComplexMath, cmplx } from "@babia/complex";
 *
 * ComplexMath.pow(cmplx(0, 0), 4); // 0 + 0i
 * ComplexMath.pow(cmplx(3, 1), 4); // ≈ 28 + 96i
 * ```
 */
export function pow(a: complex, n: number): complex;
/**
 * Raises the complex number to the complex `b`-th power.
 *
 * @param a A complex number
 * @param b The complex `b`-th power
 *
 * @example
 * ```ts
 * import { ComplexMath, cmplx } from "@babia/complex";
 *
 * const i = cmplx(0, 1);
 *
 * ComplexMath.pow(i, i); // i^i = e^(-pi / 2) = 0.20787957635076193
 * ```
 */
export function pow(a: complex, b: complex): complex;
export function pow(a: complex, nb: number | complex): complex {
    if (isNumber(nb)) {
        nb = cmplx(nb);
    }

    if (a.isZero()) {
        if (nb.isNaN()) {
            return Complex.NaN();
        }

        const real = nb.real;
        const imag = nb.imag;

        if (real === 0) {
            return cmplx(1);
        }

        if (real < 0) {
            if (imag === 0) {
                return cmplx(POS_INF);
            }

            return Complex.Inf();
        }

        return cmplx(0);
    }

    const modulus = a.abs();
    if (modulus === 0) {
        return cmplx(0);
    }

    const arg = a.phase();

    let r = Math.pow(modulus, nb.real);
    let theta = nb.real * arg;

    if (nb.imag !== 0) {
        r *= Math.exp(-nb.imag * arg);
        theta += nb.imag * Math.log(modulus);
    }

    const cos = Math.cos(theta);
    const sin = Math.sin(theta);

    return cmplx(r * cos, r * sin);
}
