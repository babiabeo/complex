# complex

[![JSR](https://jsr.io/badges/@babia/complex)](https://jsr.io/@babia/complex)
[![CI](https://github.com/babiabeo/complex/actions/workflows/ci.yml/badge.svg)](https://github.com/babiabeo/complex/actions/workflows/ci.yml)

A package provides implementation of complex numbers and mathematical functions
for complex numbers.

## What is a complex number?

A complex number is an extension of the real numbers. It combines both real and
imaginary components. It can be expressed in form `a + bi`, where:

- `a`: the real part
- `b`: the imaginary part
- `i`: the imaginary unit

A real number can be regarded as a complex number `a + 0i`, whose the imaginary
part is `0`. A purely imaginary number is a complex number `0 + bi`, whose the
real part is `0`.

## `Complex` class

This package provides an implementation of complex numbers through the `Complex`
class. It has methods to perform basic operations on complex numbers:

```ts
const cmplx1 = new Complex(3, 1); // 3 + i
const cmplx2 = new Complex(2, 9); // 2 + 9i

cmplx1.add(cmplx2); // (3 + i) + (2 + 9i) = (5 + 10i)

// Also works with real numbers
cmplx1.add(3); // (3 + i) + 3 = (3 + i) + (3 + 0i) = (6 + i)
```

Methods `conj()`, `abs()`, `phase()` return the conjugate, absolute value, and
argument of the complex number respectively:

```ts
cmplx2.conj(); // (2 - 9i)
cmplx2.abs(); // ≈ 9.219544457292889 = Math.sqrt(85)
cmplx2.phase(); // 1.3521273809209546
```

## `cmplx` function

For convenience, the `cmplx` function was added in `v1.1.0` to help create
complex numbers more easily.

```ts
cmplx(2, 3); // 2 + 3i
```

Unlike the `Complex` class, the `cmplx` function requires the first argument
(the real part).

```ts
cmplx(0); // 0 + 0i
```

## `ComplexMath`

Like [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), `ComplexMath` provides basic mathematics functionality for
complex numbers.

- Exponential and logarithm functions

```ts
ComplexMath.exp();
ComplexMath.log();
// ...
```

- Hyperbolic functions:

```ts
ComplexMath.sinh();
ComplexMath.atanh();
// ...
```

- Power functions:

```ts
ComplexMath.sqrt();
ComplexMath.pow();
// ...
```

- Trigonometric functions:

```ts
ComplexMath.asin();
ComplexMath.tan();
// ...
```

## Related

- Go [`math/cmplx`](https://pkg.go.dev/math/cmplx)
- C++ [`std::complex`](https://en.cppreference.com/w/cpp/numeric/complex)
- Python [`complex`](https://docs.python.org/3/library/functions.html#complex)
  and [`cmath`](https://docs.python.org/3/library/cmath.html)

## License

MIT
