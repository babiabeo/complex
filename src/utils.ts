// Constants

export const POS_INF = Number.POSITIVE_INFINITY;
export const NEG_INF = Number.NEGATIVE_INFINITY;

// Checking

export function IS_NAN(x: number): boolean {
    return Number.isNaN(x);
}

export function IS_INF(x: number): boolean {
    return !IS_NAN(x) && !Number.isFinite(x);
}

export function IS_NUMBER(x: unknown): x is number {
    return typeof x === "number";
}

// Others

/** Gets the sign bit from the number. */
export function sign(x: number): boolean {
    if (x === 0) {
        // Whether x is positive or negative zero
        const inf = 1 / x;
        return inf === POS_INF;
    }

    return Math.sign(x) > 0;
}
