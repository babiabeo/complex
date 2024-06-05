import { test } from "@cross/test";
import { assertAlmostEquals, assertEquals } from "@std/assert";
import { exp, log, log10 } from "../src/math/mod.ts";
import { cmplx } from "../src/complex.ts";

test("Complex exponential", () => {
    assertEquals(exp(cmplx(Infinity)), cmplx(Infinity));
    assertEquals(exp(cmplx(-Infinity, NaN)), cmplx(0));

    const ex = exp(cmplx(3, 4));

    assertAlmostEquals(ex.real, -13.1287831);
    assertAlmostEquals(ex.imag, -15.2007845);
});

test("Complex natural logarithm", () => {
    const ex = log(cmplx(3, 4));

    assertAlmostEquals(ex.real, 1.6094379);
    assertAlmostEquals(ex.imag, 0.9272952);
});

test("Complex base 10 logarithm", () => {
    const ex = log10(cmplx(3, 4));

    assertAlmostEquals(ex.real, 0.6989700);
    assertAlmostEquals(ex.imag, 0.4027192);
});
