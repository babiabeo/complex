import { test } from "@cross/test";
import { assertAlmostEquals, assertEquals } from "@std/assert";
import { pow, sqrt } from "../src/math/mod.ts";
import { cmplx, Complex } from "../src/complex.ts";
import { POS_INF } from "../src/_utils.ts";

test("Complex square root", () => {
    assertEquals(sqrt(cmplx(0)), cmplx(0));
    assertEquals(sqrt(cmplx(4)), cmplx(2));
    assertEquals(
        sqrt(cmplx(4, Infinity)),
        cmplx(Infinity, Infinity),
    );

    const ex = sqrt(cmplx(5, 9));

    assertAlmostEquals(ex.real, 2.7654683);
    assertAlmostEquals(ex.imag, 1.6272108);
});

test("Complex with real power", () => {
    assertEquals(
        pow(cmplx(0), NaN),
        cmplx(NaN, NaN),
    );
    assertEquals(pow(cmplx(0), 32), cmplx(0));
    assertEquals(
        pow(cmplx(0), -4),
        cmplx(Infinity, 0),
    );

    const ex = pow(cmplx(3, 1), 4);

    assertAlmostEquals(ex.real, 28);
    assertAlmostEquals(ex.imag, 96);
});

test("Complex with complex power", () => {
    assertEquals(
        pow(cmplx(0), Complex.NaN()),
        cmplx(NaN, NaN),
    );
    assertEquals(
        pow(cmplx(0), cmplx(0, 9)),
        cmplx(1),
    );
    assertEquals(
        pow(cmplx(0), cmplx(-1)),
        cmplx(POS_INF, 0),
    );
    assertEquals(
        pow(cmplx(0, 1), cmplx(0, 1)),
        cmplx(Math.pow(Math.E, -Math.PI / 2)),
    );
});
