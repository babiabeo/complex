import { test } from "@cross/test";
import { assertAlmostEquals, assertEquals } from "@std/assert";
import { pow, powCmplx, sqrt } from "../src/math/mod.ts";
import { Complex } from "../mod.ts";
import { POS_INF } from "../src/utils.ts";

test("Complex square root", () => {
    assertEquals(sqrt(new Complex()), new Complex());
    assertEquals(sqrt(new Complex(4)), new Complex(2));
    assertEquals(
        sqrt(new Complex(4, Infinity)),
        new Complex(Infinity, Infinity),
    );

    const ex = sqrt(new Complex(5, 9));

    assertAlmostEquals(ex.real, 2.7654683);
    assertAlmostEquals(ex.imag, 1.6272108);
});

test("Complex with real power", () => {
    assertEquals(
        pow(new Complex(), NaN),
        new Complex(NaN, NaN),
    );
    assertEquals(pow(new Complex(), 32), new Complex());
    assertEquals(
        pow(new Complex(), -4),
        new Complex(Infinity, Infinity),
    );

    const ex = pow(new Complex(3, 1), 4);

    assertAlmostEquals(ex.real, 28);
    assertAlmostEquals(ex.imag, 96);
});

test("Complex with complex power", () => {
    assertEquals(
        powCmplx(new Complex(), Complex.NaN()),
        new Complex(NaN, NaN),
    );
    assertEquals(
        powCmplx(new Complex(), new Complex(0, 9)),
        new Complex(1),
    );
    assertEquals(
        powCmplx(new Complex(), new Complex(-1)),
        new Complex(POS_INF, 0),
    );
    assertEquals(
        powCmplx(new Complex(0, 1), new Complex(0, 1)),
        new Complex(Math.pow(Math.E, -Math.PI / 2)),
    );
});
