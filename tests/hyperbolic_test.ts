import { test } from "@cross/test";
import { assertAlmostEquals, assertEquals } from "@std/assert";
import { acosh, asinh, atanh, cosh, sinh, tanh } from "../src/math/mod.ts";
import { Complex } from "../mod.ts";

test("Complex hyperbolic sine", () => {
    assertEquals(
        sinh(new Complex(0, Infinity)),
        new Complex(0, NaN),
    );
    assertEquals(
        sinh(new Complex(Infinity, Infinity)),
        new Complex(Infinity, NaN),
    );
    assertEquals(
        sinh(new Complex(NaN, 0)),
        new Complex(NaN, 0),
    );

    const ex = sinh(new Complex(1, 1));

    assertAlmostEquals(ex.real, 0.6349639);
    assertAlmostEquals(ex.imag, 1.2984576);
});

test("Complex hyperbolic cosine", () => {
    assertEquals(
        cosh(new Complex(0, Infinity)),
        new Complex(NaN, 0),
    );
    assertEquals(
        cosh(new Complex(Infinity, Infinity)),
        new Complex(Infinity, NaN),
    );
    assertEquals(
        cosh(new Complex(NaN, 0)),
        new Complex(NaN, 0),
    );

    const ex = cosh(new Complex(1, 1));

    assertAlmostEquals(ex.real, 0.8337300);
    assertAlmostEquals(ex.imag, 0.9888977);
});

test("Complex hyperbolic tangent", () => {
    assertEquals(
        tanh(new Complex(-Infinity, 32)),
        new Complex(-1, 0),
    );
    assertEquals(
        tanh(new Complex(Infinity, Infinity)),
        new Complex(1, 0),
    );
    assertEquals(
        tanh(new Complex(NaN, 0)),
        new Complex(NaN, 0),
    );

    const ex = tanh(new Complex(1, 1));

    assertAlmostEquals(ex.real, 1.0839233);
    assertAlmostEquals(ex.imag, 0.2717526);
});

test("Complex inverse hyperbolic sine", () => {
    const ex = asinh(new Complex(1, 1));

    assertAlmostEquals(ex.real, 1.0612751);
    assertAlmostEquals(ex.imag, 0.6662394);
});

test("Complex inverse hyperbolic cosine", () => {
    const ex = acosh(new Complex(1, 1));

    assertAlmostEquals(ex.real, 1.0612751);
    assertAlmostEquals(ex.imag, 0.9045569);
});

test("Complex inverse hyperbolic tangent", () => {
    const ex = atanh(new Complex(1, 1));

    assertAlmostEquals(ex.real, 0.4023595);
    assertAlmostEquals(ex.imag, 1.0172220);
});
