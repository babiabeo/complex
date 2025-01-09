import { IS_NUMBER } from "./utils.ts";

/**
 * Represents a complex number in rectangular form (standard form)
 * which has a real part and an imaginary part.
 *
 * @example
 * ```ts
 * new complex(1, 9);  // 1 + 9i
 * new complex(14, 6); // 14 + 6i
 *
 * // from polar form
 * complex.fromPolar(2, Math.PI / 2); // 2i
 * ```
 */
export class complex {
    /** The real part of the complex number. */
    real: number;
    /** The imaginary part of the complex number. */
    imag: number;

    constructor(real?: number, imag?: number) {
        this.real = real ?? 0;
        this.imag = imag ?? 0;
    }

    /**
     * Gets a complex number from its polar coordinates.
     *
     * @example
     * ```ts
     * complex.fromPolar(2, Math.PI / 2); // 0 + 2i
     * ```
     *
     * @param r The absolute value (or magnitude).
     * @param phi The phase (or argument). Must be in the range `[-pi, pi]`.
     * @returns A complex number in rectangular form `a + bi`.
     */
    static fromPolar(r: number, phi: number): complex {
        return new complex(
            r * Math.cos(phi),
            r * Math.sin(phi),
        );
    }

    /**
     * Returns the absolute value (or modulus or magnitude) of the complex number.
     *
     * @example
     * ```ts
     * new complex(3, 4).abs(); // abs(3 + 4i) = 5
     * ```
     */
    abs(): number {
        return Math.hypot(this.real, this.imag);
    }

    /**
     * Returns the argument (or phase) of the complex number.
     * The value is in the range `[-pi, pi]`.
     *
     * @example
     * ```ts
     * new complex(1, 1).arg(); // arg(1 + i) = pi/4
     * ```
     */
    arg(): number {
        return Math.atan2(this.imag, this.real);
    }

    /**
     * Returns the complex conjugate of the complex number.
     *
     * @example
     * ```ts
     * new complex(-9, 10).conj(); // conj(-9 + 10i) = -9 - 10i
     * ```
     */
    conj(): complex {
        return new complex(this.real, -this.imag);
    }

    /**
     * Returns the negation of the complex number.
     *
     * @example
     * ```ts
     * new complex(-9, 10).neg(); // neg(-9 + 10i) = 9 - 10i
     * ```
     */
    neg(): complex {
        return new complex(-this.real, -this.imag);
    }

    /**
     * Returns the polar coordinates of the complex number
     * which consists of two values:
     * - `r`: the absolute value (or amplitude).
     * - `θ`: the argument (or phase).
     *
     * @example
     * ```ts
     * new complex(0, 1).polar(); // polar(i) => r = 1, θ = pi/2
     * ```
     */
    polar(): [number, number] {
        return [this.abs(), this.arg()];
    }

    /**
     * Adds a real number to the complex number.
     *
     * @example
     * ```ts
     * new complex(5, 5).add(5); // (5 + 5i) + 5 = 10 + 5i
     * ```
     *
     * @param rhs The real number to be added.
     * @returns The result of addition.
     */
    add(rhs: number): complex;
    /**
     * Adds two complex numbers.
     *
     * @example
     * ```ts
     * const lhs = new complex(3, 8);
     * const rhs = new complex(6, 10);
     *
     * lhs.add(rhs); // (3 + 8i) + (6 + 10i) = 9 + 18i
     * ```
     *
     * @param rhs The complex number to be added.
     * @returns The result of addition.
     */
    add(rhs: complex): complex;
    add(rhs: number | complex): complex {
        if (IS_NUMBER(rhs)) {
            return new complex(this.real + rhs, this.imag);
        }

        return new complex(
            this.real + rhs.real,
            this.imag + rhs.imag,
        );
    }

    /**
     * Subtracts a real number from the complex number.
     *
     * @example
     * ```ts
     * new complex(5, 5).sub(5); // (5 + 5i) - 5 = 5i
     * ```
     *
     * @param rhs The real number to subtract.
     * @returns The result of subtraction.
     */
    sub(rhs: number): complex;
    /**
     * Subtracts a complex number from the complex number.
     *
     * @example
     * ```ts
     * const lhs = new complex(3, 8);
     * const rhs = new complex(6, 10);
     *
     * lhs.sub(rhs); // (3 + 8i) - (6 + 10i) = -3 - 2i
     * ```
     *
     * @param rhs The complex number to subtract.
     * @returns The result of subtraction.
     */
    sub(rhs: complex): complex;
    sub(rhs: number | complex): complex {
        if (IS_NUMBER(rhs)) {
            return new complex(this.real - rhs, this.imag);
        }

        return new complex(
            this.real - rhs.real,
            this.imag - rhs.imag,
        );
    }

    /**
     * Returns the product of a real number and the complex number.
     *
     * @example
     * ```ts
     * new complex(4, 5).mul(3); // (4 + 5i) * 3 = 12 + 15i
     * ```
     *
     * @param rhs The real number.
     * @returns The result of multiplication.
     */
    mul(rhs: number): complex;
    /**
     * Returns the product of two complex numbers.
     *
     * @example
     * ```ts
     * const lhs = new complex(2, 5);
     * const rhs = new complex(8, 1);
     *
     * lhs.mul(rhs); // (2 + 5i) * (8 + i) = 11 + 42i
     * ```
     *
     * @param rhs The other complex number.
     * @returns The result of multiplication.
     */
    mul(rhs: complex): complex;
    mul(rhs: number | complex): complex {
        if (IS_NUMBER(rhs)) {
            return new complex(this.real * rhs, this.imag * rhs);
        }

        return new complex(
            (this.real * rhs.real) - (this.imag * rhs.imag),
            (this.real * rhs.imag) + (this.imag * rhs.real),
        );
    }

    /**
     * Divides the complex number by a real number.
     *
     * @example
     * ```ts
     * new complex(14, 20).div(2); // (14 + 20i) / 2 = 7 + 10i
     * ```
     *
     * @param rhs The real number.
     * @returns The result of division.
     */
    div(rhs: number): complex;
    /**
     * Divides the complex number by another complex number.
     *
     * @example
     * ```ts
     * const lhs = new complex(9, 3);
     * const rhs = new complex(1, 1);
     *
     * lhs.div(rhs); // (9 + 3i) / (1 + i) = 9/2 + i/2
     * ```
     *
     * @param rhs The other complex number.
     * @returns The result of division.
     */
    div(rhs: complex): complex;
    div(rhs: number | complex): complex {
        if (IS_NUMBER(rhs)) {
            return new complex(this.real / rhs, this.imag / rhs);
        }

        const re = this.real * rhs.real + this.imag * rhs.imag;
        const im = this.imag * rhs.real - this.real * rhs.imag;
        const d = rhs.real * rhs.real + rhs.imag * rhs.imag;

        return new complex(re / d, im / d);
    }

    toString(): string {
        const sign = this.imag < 0 ? "-" : "+";
        return `${this.real} ${sign} ${Math.abs(this.imag)}i`;
    }
}
