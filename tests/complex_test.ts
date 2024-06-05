import { test } from "@cross/test";
import { assertAlmostEquals, assertEquals } from "@std/assert";
import { cmplx } from "../src/complex.ts";

test("Complex parts", () => {
    const ex = cmplx(3, 5);

    assertEquals(ex.real, 3);
    assertEquals(ex.imag, 5);
    assertEquals(String(ex), "3 + 5i");
});

test("Complex addition", () => {
    const ex1 = cmplx(3, 5);
    const ex2 = cmplx(3, 5);

    assertEquals(ex1.add(ex2), cmplx(6, 10));
    assertEquals(ex1.add(2), cmplx(5, 5));
});

test("Complex subtraction", () => {
    const ex1 = cmplx(86, 15);
    const ex2 = cmplx(21, 9);

    assertEquals(ex1.sub(ex2), cmplx(65, 6));
    assertEquals(ex1.sub(7), cmplx(79, 15));
});

test("Complex multiplication", () => {
    const ex1 = cmplx(3, 2);
    const ex2 = cmplx(4, -1);

    assertEquals(ex1.mult(ex2), cmplx(14, 5));
    assertEquals(ex1.mult(3), cmplx(9, 6));
});

test("Complex division", () => {
    const ex1 = cmplx(3, 2);
    const ex2 = cmplx(4, -1);

    const result = ex1.div(ex2);

    assertAlmostEquals(result.real, 0.588235294);
    assertAlmostEquals(result.imag, 0.647058824);
    assertEquals(ex1.div(2), cmplx(1.5, 1));
});

test("Complex conjugate, absolute value, argument", () => {
    const ex = cmplx(10, 10);

    assertEquals(ex.abs(), 10 * Math.sqrt(2));
    assertEquals(ex.conj(), cmplx(10, -10));
    assertEquals(ex.phase(), Math.PI / 4);
});
