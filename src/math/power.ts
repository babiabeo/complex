import { Complex, type complex } from "../complex.ts";
import { POS_INF } from "../utils.ts";

/**
 * Returns the square root of the complex number.
 *
 * @param a A complex number
 *
 * @example
 * ```ts
 * ComplexMath.sqrt(new Complex(4, 0)); // 2
 * ComplexMath.sqrt(new Complex(0, 0)); // 0
 * ```
 */
export function sqrt(a: complex): complex {
    let r = 0;

    if (a.imag === 0) {
        if (a.real === 0) {
            return new Complex();
        }

        r = Math.sqrt(Math.abs(a.real));

        if (a.real < 0) {
            return Complex.fromImagNum(r);
        }

        return new Complex(r, a.imag);
    }

    if (a.real === 0) {
        r = Math.sqrt(Math.abs(a.imag) * 0.5);

        if (a.imag > 0) {
            return new Complex(r, r);
        }

        return new Complex(r, -r);
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

    r = new Complex(x, y).abs();
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
        return new Complex(t, -r);
    }

    return new Complex(t, r);
}

/**
 * Returns the `n`-th power of a complex number using
 * {@link https://en.wikipedia.org/wiki/De_Moivre%27s_formula | de Moivre's formula}.
 *
 * @param a A complex number
 * @param n A real number
 *
 * @example
 * ```ts
 * ComplexMath.pow(new Complex(0, 0), 4); // 0 + 0i
 * ComplexMath.pow(new Complex(3, 3), 4); // -324 + 0i
 * ```
 */
export function pow(a: complex, n: number): complex {
    if (a.isZero()) {
        if (isNaN(n)) {
            return Complex.NaN();
        }

        if (n > 0) {
            return new Complex();
        }

        return Complex.Inf();
    }

    if (n === 0) {
        return Complex.fromRealNum(1);
    }

    const r = Math.pow(a.abs(), n);
    if (r === 0) {
        return new Complex();
    }

    const p = a.phase();
    const cos = Math.cos(n * p);
    const sin = Math.sin(n * p);

    return new Complex(r * cos, r * sin);
}

/**
 * Raises the complex number to the complex `b`-th power.
 *
 * @param a The complex number
 * @param b The complex `b`-th power
 * @returns A new complex number
 *
 * @example
 * ```ts
 * const i = new Complex(0, 1);
 *
 * ComplexMath.powCmplx(i, i); // i^i = e^(-pi / 2) = 0.20787957635076193
 * ```
 */
export function powCmplx(a: complex, b: complex): complex {
    if (a.isZero()) {
        if (b.isNaN()) {
            return Complex.NaN();
        }

        const real = b.real;
        const imag = b.imag;

        if (real === 0) {
            return Complex.fromRealNum(1);
        }

        if (real < 0) {
            if (imag === 0) {
                return Complex.fromRealNum(POS_INF);
            }

            return Complex.Inf();
        }

        return new Complex();
    }

    const modulus = a.abs();
    if (modulus === 0) {
        return new Complex();
    }

    const arg = a.phase();

    let r = Math.pow(modulus, b.real);
    let theta = b.real * arg;

    if (b.imag) {
        r *= Math.exp(-b.imag * arg);
        theta += b.imag * Math.log(modulus);
    }

    const cos = Math.cos(theta);
    const sin = Math.sin(theta);

    return new Complex(r * cos, r * sin);
}
