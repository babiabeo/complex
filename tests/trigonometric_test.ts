import { test } from "@cross/test";
import { assertAlmostEquals, assertEquals } from "@std/assert";
import {
    acos,
    asin,
    asinh,
    atan,
    atanh,
    cos,
    cot,
    sin,
    sinh,
    tan,
    tanh,
} from "../src/math/mod.ts";
import { Complex } from "../mod.ts";

const POS_I = new Complex(0, 1);
const NEG_I = new Complex(0, -1);

test("Complex sine", () => {
    assertEquals(
        sin(new Complex(Infinity)),
        new Complex(NaN),
    );
    assertEquals(
        sin(new Complex(0, -Infinity)),
        new Complex(0, -Infinity),
    );
    assertEquals(
        sin(new Complex(NaN, -Infinity)),
        new Complex(NaN, -Infinity),
    );

    const ex = sin(new Complex(1, 1));

    assertAlmostEquals(ex.real, 1.2984576);
    assertAlmostEquals(ex.imag, 0.6349639);

    // sin(a) = (-i) * sinh(a * i)

    const a = new Complex(2, 3);
    const x = sin(a);
    const y = sinh(a.mult(POS_I)).mult(NEG_I);

    assertAlmostEquals(x.real, y.real);
    assertAlmostEquals(x.imag, y.imag);
});

test("Complex cosine", () => {
    assertEquals(
        cos(new Complex(Infinity)),
        new Complex(NaN),
    );
    assertEquals(
        cos(new Complex(0, -Infinity)),
        new Complex(Infinity),
    );
    assertEquals(
        cos(new Complex(NaN, -Infinity)),
        new Complex(Infinity, NaN),
    );

    const ex = cos(new Complex(1, 1));

    assertAlmostEquals(ex.real, 0.8337300);
    assertAlmostEquals(ex.imag, -0.9888977);
});

test("Complex tangent", () => {
    assertEquals(
        tan(new Complex(0, NaN)),
        new Complex(0, NaN),
    );
    assertEquals(
        tan(new Complex(3, -Infinity)),
        new Complex(0, -1),
    );

    const ex = tan(new Complex(1, 1));

    assertAlmostEquals(ex.real, 0.2717526);
    assertAlmostEquals(ex.imag, 1.0839233);

    // tan(a) = (-i) * tanh(a * i)

    const a = new Complex(2, 3);
    const x = tan(a);
    const y = tanh(a.mult(POS_I)).mult(NEG_I);

    assertAlmostEquals(x.real, y.real);
    assertAlmostEquals(x.imag, y.imag);
});

test("Complex cotangent", () => {
    const ex = cot(new Complex(1, 1));

    assertAlmostEquals(ex.real, 0.2176216);
    assertAlmostEquals(ex.imag, -0.8680141);
});

test("Complex arc sine", () => {
    assertEquals(
        asin(new Complex(-Infinity, NaN)),
        new Complex(NaN, -Infinity),
    );
    assertEquals(
        asin(new Complex(0, NaN)),
        new Complex(0, NaN),
    );
    assertEquals(
        asin(new Complex(Infinity, Infinity)),
        new Complex(Math.PI / 4, Infinity),
    );

    const ex = asin(new Complex(1, 1));

    assertAlmostEquals(ex.real, 0.6662394);
    assertAlmostEquals(ex.imag, 1.0612750);

    // asin(a) = (-i) * asinh(a * i)

    const a = new Complex(2, 3);
    const x = asin(a);
    const y = asinh(a.mult(POS_I)).mult(NEG_I);

    assertAlmostEquals(x.real, y.real);
    assertAlmostEquals(x.imag, y.imag);
});

test("Complex arc cosine", () => {
    const ex = acos(new Complex(1, 1));

    assertAlmostEquals(ex.real, 0.9045569);
    assertAlmostEquals(ex.imag, -1.0612750);
});

test("Complex arc tangent", () => {
    assertEquals(
        atan(new Complex(NaN, -Infinity)),
        new Complex(NaN),
    );
    assertEquals(
        atan(new Complex(Infinity, Infinity)),
        new Complex(Math.PI / 2),
    );

    const ex = atan(new Complex(1, 1));

    assertAlmostEquals(ex.real, 1.0172220);
    assertAlmostEquals(ex.imag, 0.4023595);

    // atan(a) = (-i) * atanh(a * i)

    const a = new Complex(2, 3);
    const x = atan(a);
    const y = atanh(a.mult(POS_I)).mult(NEG_I);

    assertAlmostEquals(x.real, y.real);
    assertAlmostEquals(x.imag, y.imag);
});
