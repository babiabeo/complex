export const POS_INF = Number.POSITIVE_INFINITY;
export const NEG_INF = Number.NEGATIVE_INFINITY;

export function IS_NAN(x: number): boolean {
    return Number.isNaN(x);
}

export function IS_FINITE(x: number): boolean {
    return Number.isFinite(x);
}

export function IS_INF(x: number): boolean {
    return !IS_NAN(x) && !IS_FINITE(x);
}

export function IS_NUMBER(x: unknown): x is number {
    return typeof x === "number";
}

/** Gets the sign bit from the number. `true` if the number is negative. */
export function sign(x: number): boolean {
    if (x === 0) {
        // Whether x is positive or negative zero
        const inf = 1 / x;
        return inf === NEG_INF;
    }

    return Math.sign(x) < 0;
}

export function copysign(mag: number, sgn: number): number {
    return sign(mag) === sign(sgn) ? mag : -mag;
}
