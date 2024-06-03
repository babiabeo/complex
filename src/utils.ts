import type { complex } from "./complex.ts";

export const POS_INF = Number.POSITIVE_INFINITY;

/** Whether the number is an infinity. */
export function isInf(n: number): boolean {
    return !Number.isFinite(n);
}

/** Whether the number is NaN (not-a-number). */
export function isNaN2(n: number): boolean {
    return Number.isNaN(n);
}

/** Whether the argument is a number. */
export function isNumber(arg: unknown): arg is number {
    return typeof arg === "number";
}

/** Gets the sign of number. */
export function sign(n: number): number {
    if (n < 0) {
        return -1;
    }

    return 1;
}

/** Calculates the cosh and sinh of the number. */
export function coshSinh(n: number): [number, number] {
    if (Math.abs(n) <= 0.5) {
        return [Math.cosh(n), Math.sinh(n)];
    }

    let e = Math.exp(n);
    const ei = 0.5 / e;
    e = 0.5 * e;

    return [e + ei, e - ei];
}

/** Machine epsilon = 2^-53 */
const MACHEP = 1.1102230246251563e-16;

/** Taylor series expansion for cosh(2y) - cos(2x). */
export function tans(a: complex): number {
    let x = Math.abs(2 * a.real);
    let y = Math.abs(2 * a.imag);

    x = reducePi(x);

    x = x * x;
    y = y * y;

    let x2 = 1;
    let y2 = 1;
    let f = 1;
    let rn = 0;
    let d = 0;
    let t = 0;

    do {
        ++rn;
        f *= rn;
        ++rn;
        f *= rn;
        x2 *= x;
        y2 *= y;
        t = y2 + x2;
        t /= f;
        d += t;

        ++rn;
        f *= rn;
        ++rn;
        f *= rn;
        x2 *= x;
        y2 *= y;
        t = y2 - x2;
        t /= f;
        d += t;
    } while (Math.abs(t / d) > MACHEP);

    return d;
}

const DP1 = 3.14159265160560607910e0;
const DP2 = 1.98418714791870343106e-9;
const DP3 = 1.14423774522196636802e-17;

export function reducePi(n: number): number {
    let t = n / Math.PI;

    if (t < 0) {
        t -= 0.5;
    } else {
        t += 0.5;
    }

    const i = Math.trunc(t);
    t = i;

    return ((n - t * DP1) - t * DP2) - t * DP3;
}
