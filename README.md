# `@babia/complex`

[![JSR](https://jsr.io/badges/@babia/complex)](https://jsr.io/@babia/complex)
[![CI](https://github.com/babiabeo/complex/actions/workflows/ci.yml/badge.svg)](https://github.com/babiabeo/complex/actions/workflows/ci.yml)

A package providing the implementation of complex numbers and mathematical
functions.

#### Install

```sh
# deno
deno add jsr:@babia/complex

# node.js
npx jsr add @babia/complex
yarn dlx jsr add @babia/complex
pnpm dlx jsr add @babia/complex

# bun
bunx jsr add @babia/complex
```

## What is a complex number?

A complex number is an extension of the real number. It combines both real and
imaginary components. It can be expressed in the standard form `a + bi`, where:

- `a`: the real part
- `b`: the imaginary part
- `i`: the imaginary unit

A real number can be regarded as a complex number `a + 0i`, whose the imaginary
part is `0`. A purely imaginary number is a complex number `0 + bi`, whose the
real part is `0`.

## `complex` class

This package provides an implementation of complex number through the `complex`
class. It has methods to perform basic operations on complex numbers:

```ts
const cmplx1 = new complex(3, 1); // 3 + i
const cmplx2 = new complex(2, 9); // 2 + 9i

cmplx1.add(cmplx2); // (3 + i) + (2 + 9i) = (5 + 10i)

// Also works with real numbers
cmplx1.add(3); // (3 + i) + 3 = (6 + i)
```

Methods `abs()`, `conj()`, `phase()` return the absolute value, the conjugate,
and the argument of the complex number respectively:

```ts
cmplx2.abs(); // 9.2195445
cmplx2.conj(); // (2 - 9i)
cmplx2.phase(); // 1.3521274
```

## `cmplx` function

The `cmplx` function was added in `v1.1.0` to simplify the creation of complex
numbers.

```ts
cmplx(2, 3); // 2 + 3i
```

Unlike `complex` class, the `cmplx` function requires the first argument (the
real part).

```ts
cmplx(0); // 0 + 0i
```

## `cmath`

Besides `complex`, there is also `cmath` which is a collection of mathematical
functions for complex numbers:

- Power and logarithm functions: `exp`, `log`, `log10`, `sqrt`
- Hyperbolic functions: `sinh`, `cosh`, `tanh`, `asinh`, `acosh`, `atanh`
- Trigonometric functions: `sin`, `cos`, `tan`, `asin`, `acos`, `atan`

> [!NOTE]
> Do not confuse with `<cmath>` header in C++

## Related

- Go [`math/cmplx`](https://pkg.go.dev/math/cmplx)
- C++ [`std::complex`](https://en.cppreference.com/w/cpp/numeric/complex)
- Python [`complex`](https://docs.python.org/3/library/functions.html#complex)
  and [`cmath`](https://docs.python.org/3/library/cmath.html)

## License

MIT
