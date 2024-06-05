import { test } from "@cross/test";
import { assertAlmostEquals, assertEquals } from "@std/assert";
import { acosh, asinh, atanh, cosh, sinh, tanh } from "../src/math/mod.ts";
import { cmplx } from "../src/complex.ts";

test("Complex hyperbolic sine", () => {
    assertEquals(
        sinh(cmplx(0, Infinity)),
        cmplx(0, NaN),
    );
    assertEquals(
        sinh(cmplx(Infinity, Infinity)),
        cmplx(Infinity, NaN),
    );
    assertEquals(
        sinh(cmplx(NaN, 0)),
        cmplx(NaN, 0),
    );

    const ex = sinh(cmplx(1, 1));

    assertAlmostEquals(ex.real, 0.6349639);
    assertAlmostEquals(ex.imag, 1.2984576);
});

test("Complex hyperbolic cosine", () => {
    assertEquals(
        cosh(cmplx(0, Infinity)),
        cmplx(NaN, 0),
    );
    assertEquals(
        cosh(cmplx(Infinity, Infinity)),
        cmplx(Infinity, NaN),
    );
    assertEquals(
        cosh(cmplx(NaN, 0)),
        cmplx(NaN, 0),
    );

    const ex = cosh(cmplx(1, 1));

    assertAlmostEquals(ex.real, 0.8337300);
    assertAlmostEquals(ex.imag, 0.9888977);
});

test("Complex hyperbolic tangent", () => {
    assertEquals(
        tanh(cmplx(-Infinity, 32)),
        cmplx(-1, 0),
    );
    assertEquals(
        tanh(cmplx(Infinity, Infinity)),
        cmplx(1, 0),
    );
    assertEquals(
        tanh(cmplx(NaN, 0)),
        cmplx(NaN, 0),
    );

    const ex = tanh(cmplx(1, 1));

    assertAlmostEquals(ex.real, 1.0839233);
    assertAlmostEquals(ex.imag, 0.2717526);
});

test("Complex inverse hyperbolic sine", () => {
    const ex = asinh(cmplx(1, 1));

    assertAlmostEquals(ex.real, 1.0612751);
    assertAlmostEquals(ex.imag, 0.6662394);
});

test("Complex inverse hyperbolic cosine", () => {
    const ex = acosh(cmplx(1, 1));

    assertAlmostEquals(ex.real, 1.0612751);
    assertAlmostEquals(ex.imag, 0.9045569);
});

test("Complex inverse hyperbolic tangent", () => {
    const ex = atanh(cmplx(1, 1));

    assertAlmostEquals(ex.real, 0.4023595);
    assertAlmostEquals(ex.imag, 1.0172220);
});
