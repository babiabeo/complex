import { isInf, isNaN2, isNumber, POS_INF } from "./utils.ts";

/** Alias type of {@linkcode Complex}. */
export type complex = Complex;

/**
 * Represents a complex number which has a real part and an imaginary part.
 *
 * @example
 * ```ts
 * new Complex(1, 9);  // 1 + 9i
 * new Complex(14, 6); // 14 + 6i
 *
 * // A complex number can be also created from a real number
 * Complex.fromReal(4);    // 4 + 0i
 * Complex.fromReal(32.9); // 32.9 + 0i
 *
 * // or a purely imaginary number
 * Complex.fromImag(11); // 0 + 11i
 * Complex.fromImag(6);  // 0 + 6i
 * ```
 */
export class Complex {
    /** The real part of the complex number. */
    real: number;
    /** The imaginary part of the complex number. */
    imag: number;

    constructor(real?: number, imag?: number) {
        this.real = real ?? 0;
        this.imag = imag ?? 0;
    }

    /**
     * Returns a complex number whose real part
     * and imaginary part are both positive infinity.
     */
    static Inf(): Complex {
        return new Complex(POS_INF, POS_INF);
    }

    /**
     * Returns a complex number whose real part
     * and imaginary part are NaN (not-a-number).
     */
    static NaN(): Complex {
        return new Complex(NaN, NaN);
    }

    /**
     * Creates a new complex number from a real number.
     *
     * @param real A real number
     *
     * @example
     * ```ts
     * Complex.fromReal(2); // 2 + 0i
     * Complex.fromReal(0); // 0 + 0i
     * ```
     */
    static fromReal(real: number): Complex {
        return new Complex(real);
    }

    /**
     * Creates a new complex number from a purely imaginary number.
     *
     * @param imag A purely imaginary number
     *
     * @example
     * ```ts
     * Complex.fromImag(1);  // 0 + i
     * Complex.fromImag(10); // 0 + 10i
     * ```
     */
    static fromImag(imag: number): Complex {
        return new Complex(0, imag);
    }

    /**
     * Creates a new complex number from a real number.
     *
     * @param real A real
     *
     * @example
     * ```ts
     * Complex.fromRealNum(2); // 2 + 0i
     * Complex.fromRealNum(0); // 0 + 0i
     * ```
     *
     * @deprecated (will be removed after v1.0.1) Use {@linkcode fromReal} instead
     */
    static fromRealNum(real: number): Complex {
        return new Complex(real);
    }

    /**
     * Creates a new complex number from a purely imaginary number.
     *
     * @param imag A purely imaginary number
     *
     * @example
     * ```ts
     * Complex.fromImagNum(1);  // 0 + i
     * Complex.fromImagNum(10); // 0 + 10i
     * ```
     *
     * @deprecated (will be removed after v1.0.1) Use {@linkcode fromImag} instead
     */
    static fromImagNum(imag: number): Complex {
        return new Complex(0, imag);
    }

    /**
     * Returns the complex conjugate of the complex number.
     *
     * @example
     * ```ts
     * const cmplx = new Complex(3, 9); // 3 + 9i
     *
     * cmplx.conj();                    // 3 - 9i
     * ```
     */
    conj(): Complex {
        return new Complex(this.real, -this.imag);
    }

    /**
     * Returns the absolute value (or modulus or magnitude) of the complex number.
     *
     * @example
     * ```ts
     * const cmplx = new Complex(3, 4); // 3 + 4i
     *
     * cmplx.abs();                     // 5
     * ```
     */
    abs(): number {
        return Math.hypot(this.real, this.imag);
    }

    /**
     * Returns the phase (or argument) of the complex number.
     *
     * @example
     * ```ts
     * const cmplx = new Complex(2, 7); // 2 + 7i
     *
     * cmplx.phase();                   // 1.292496667...
     * ```
     */
    phase(): number {
        return Math.atan2(this.imag, this.real);
    }

    /**
     * Whether either the real part or imaginary part of
     * the complex number is an infinity.
     *
     * @example
     * ```ts
     * new Complex(Infinity, 4).isInf();  // true
     * new Complex(21, Infinity).isInf(); // true
     * new Complex(0, 17).isInf();        // false
     * ```
     */
    isInf(): boolean {
        return isInf(this.real) || isInf(this.imag);
    }

    /**
     * Whether either the real part or imaginary part of
     * the complex number is NaN and neither is an infinity.
     *
     * @example
     * ```ts
     * new Complex(4, 4).isNaN();         // false
     * new Complex(21, Infinity).isNaN(); // false
     * new Complex(NaN, NaN).isNaN();     // true
     * ```
     */
    isNaN(): boolean {
        if (this.isInf()) {
            return false;
        }

        return isNaN2(this.real) || isNaN2(this.imag);
    }

    /**
     * Whether the complex number is equal to 0.
     *
     * @example
     * ```ts
     * new Complex(4, 4).isZero(); // false
     * new Complex(0, 0).isZero(); // true
     * ```
     */
    isZero(): boolean {
        return this.real === 0 && this.imag === 0;
    }

    /**
     * Adds a real number to the complex number.
     *
     * @param other A real number.
     *
     * @example
     * ```ts
     * const cmplx = new Complex(3, 2);  // 3 + 2i
     *
     * cmplx.add(3);                     // 6 + 2i
     * ```
     */
    add(other: number): Complex;
    /**
     * Adds two complex numbers.
     *
     * @param other The other complex number.
     *
     * @example
     * ```ts
     * const cmplx1 = new Complex(3, 2);  // 3 + 2i
     * const cmplx2 = new Complex(4, -1); // 4 - i
     *
     * cmplx1.add(cmplx2);                // 7 + i
     * ```
     */
    add(other: Complex): Complex;
    add(other: number | Complex): Complex {
        if (isNumber(other)) {
            return new Complex(this.real + other, this.imag);
        }

        return new Complex(
            this.real + other.real,
            this.imag + other.imag,
        );
    }

    /**
     * Subtracts a real number from the complex number.
     *
     * @param other A real number.
     *
     * @example
     * ```ts
     * const cmplx = new Complex(3, 2);  // 3 + 2i
     *
     * cmplx.sub(6);                     // -3 + 2i
     * ```
     */
    sub(other: number): Complex;
    /**
     * Subtracts two complex numbers.
     *
     * @param other The other complex number.
     *
     * @example
     * ```ts
     * const cmplx1 = new Complex(3, 2);  // 3 + 2i
     * const cmplx2 = new Complex(4, -1); // 4 - i
     *
     * cmplx1.sub(cmplx2);                // -1 + 3i
     * ```
     */
    sub(other: Complex): Complex;
    sub(other: number | Complex): Complex {
        if (isNumber(other)) {
            return new Complex(this.real - other, this.imag);
        }

        return new Complex(
            this.real - other.real,
            this.imag - other.imag,
        );
    }

    /**
     * Calculates the product of a real number and the complex number.
     *
     * @param other A real number.
     *
     * @example
     * ```ts
     * const cmplx = new Complex(3, 2);  // 3 + 2i
     *
     * cmplx.mult(5);                    // 15 + 10i
     * ```
     */
    mult(other: number): Complex;
    /**
     * Calculates the product of two complex numbers.
     *
     * @param other The other complex number.
     *
     * @example
     * ```ts
     * const cmplx1 = new Complex(3, 2);  // 3 + 2i
     * const cmplx2 = new Complex(4, -1); // 4 - i
     *
     * cmplx1.mult(cmplx2);               // 14 + 5i
     * ```
     */
    mult(other: Complex): Complex;
    mult(other: number | Complex): Complex {
        if (isNumber(other)) {
            return new Complex(this.real * other, this.imag * other);
        }

        const a = this.real;
        const b = this.imag;
        const c = other.real;
        const d = other.imag;

        const real = a * c - b * d;
        const imag = a * d + b * c;

        return new Complex(real, imag);
    }

    /**
     * Calculates the quotient of the complex number and a real number.
     *
     * @param other The other complex number.
     *
     * @example
     * ```ts
     * const cmplx = new Complex(3, 2);  // 3 + 2i
     *
     * cmplx.div(2);                     // 1.5 + i
     * ```
     */
    div(other: number): Complex;
    /**
     * Calculates the quotient of two complex numbers.
     *
     * @param other The other complex number.
     *
     * @example
     * ```ts
     * const cmplx1 = new Complex(3, 2);  // 3 + 2i
     * const cmplx2 = new Complex(4, -1); // 4 - i
     *
     * cmplx1.div(cmplx2);                // 0.5882352941176471 + 0.6470588235294118i
     * ```
     */
    div(other: Complex): Complex;
    div(other: number | Complex): Complex {
        if (isNumber(other)) {
            return new Complex(this.real / other, this.imag / other);
        }

        const y = other.real * other.real + other.imag * other.imag;
        const q = this.real * other.real + this.imag * other.imag;
        const p = this.imag * other.real - this.real * other.imag;

        if (y === 0) {
            return Complex.Inf();
        }

        return new Complex(q / y, p / y);
    }

    toString(): string {
        const sign = this.imag < 0 ? "-" : "+";
        return `${this.real} ${sign} ${Math.abs(this.imag)}i`;
    }
}
