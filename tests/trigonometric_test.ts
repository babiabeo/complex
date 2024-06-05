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
import { cmplx } from "../src/complex.ts";

const POS_I = cmplx(0, 1);
const NEG_I = cmplx(0, -1);

test("Complex sine", () => {
    assertEquals(
        sin(cmplx(Infinity)),
        cmplx(NaN),
    );
    assertEquals(
        sin(cmplx(0, -Infinity)),
        cmplx(0, -Infinity),
    );
    assertEquals(
        sin(cmplx(NaN, -Infinity)),
        cmplx(NaN, -Infinity),
    );

    const ex = sin(cmplx(1, 1));

    assertAlmostEquals(ex.real, 1.2984576);
    assertAlmostEquals(ex.imag, 0.6349639);

    // sin(a) = (-i) * sinh(a * i)

    const a = cmplx(2, 3);
    const x = sin(a);
    const y = sinh(a.mult(POS_I)).mult(NEG_I);

    assertAlmostEquals(x.real, y.real);
    assertAlmostEquals(x.imag, y.imag);
});

test("Complex cosine", () => {
    assertEquals(
        cos(cmplx(Infinity)),
        cmplx(NaN),
    );
    assertEquals(
        cos(cmplx(0, -Infinity)),
        cmplx(Infinity),
    );
    assertEquals(
        cos(cmplx(NaN, -Infinity)),
        cmplx(Infinity, NaN),
    );

    const ex = cos(cmplx(1, 1));

    assertAlmostEquals(ex.real, 0.8337300);
    assertAlmostEquals(ex.imag, -0.9888977);
});

test("Complex tangent", () => {
    assertEquals(
        tan(cmplx(0, NaN)),
        cmplx(0, NaN),
    );
    assertEquals(
        tan(cmplx(3, -Infinity)),
        cmplx(0, -1),
    );

    const ex = tan(cmplx(1, 1));

    assertAlmostEquals(ex.real, 0.2717526);
    assertAlmostEquals(ex.imag, 1.0839233);

    // tan(a) = (-i) * tanh(a * i)

    const a = cmplx(2, 3);
    const x = tan(a);
    const y = tanh(a.mult(POS_I)).mult(NEG_I);

    assertAlmostEquals(x.real, y.real);
    assertAlmostEquals(x.imag, y.imag);
});

test("Complex cotangent", () => {
    const ex = cot(cmplx(1, 1));

    assertAlmostEquals(ex.real, 0.2176216);
    assertAlmostEquals(ex.imag, -0.8680141);
});

test("Complex arc sine", () => {
    assertEquals(
        asin(cmplx(-Infinity, NaN)),
        cmplx(NaN, -Infinity),
    );
    assertEquals(
        asin(cmplx(0, NaN)),
        cmplx(0, NaN),
    );
    assertEquals(
        asin(cmplx(Infinity, Infinity)),
        cmplx(Math.PI / 4, Infinity),
    );

    const ex = asin(cmplx(1, 1));

    assertAlmostEquals(ex.real, 0.6662394);
    assertAlmostEquals(ex.imag, 1.0612750);

    // asin(a) = (-i) * asinh(a * i)

    const a = cmplx(2, 3);
    const x = asin(a);
    const y = asinh(a.mult(POS_I)).mult(NEG_I);

    assertAlmostEquals(x.real, y.real);
    assertAlmostEquals(x.imag, y.imag);
});

test("Complex arc cosine", () => {
    const ex = acos(cmplx(1, 1));

    assertAlmostEquals(ex.real, 0.9045569);
    assertAlmostEquals(ex.imag, -1.0612750);
});

test("Complex arc tangent", () => {
    assertEquals(
        atan(cmplx(NaN, -Infinity)),
        cmplx(NaN),
    );
    assertEquals(
        atan(cmplx(Infinity, Infinity)),
        cmplx(Math.PI / 2),
    );

    const ex = atan(cmplx(1, 1));

    assertAlmostEquals(ex.real, 1.0172220);
    assertAlmostEquals(ex.imag, 0.4023595);

    // atan(a) = (-i) * atanh(a * i)

    const a = cmplx(2, 3);
    const x = atan(a);
    const y = atanh(a.mult(POS_I)).mult(NEG_I);

    assertAlmostEquals(x.real, y.real);
    assertAlmostEquals(x.imag, y.imag);
});
