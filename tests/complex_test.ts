import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Complex } from "../mod.ts";

Deno.test("Complex parts", () => {
    const cmplx = new Complex(3, 5);

    assertEquals(cmplx.real, 3);
    assertEquals(cmplx.imag, 5);
    assertEquals(String(cmplx), "3 + 5i");
});

Deno.test("Complex addition", () => {
    const cmplx1 = new Complex(3, 5);
    const cmplx2 = new Complex(3, 5);

    assertEquals(cmplx1.add(cmplx2), new Complex(6, 10));
    assertEquals(cmplx1.add(2), new Complex(5, 5));
});

Deno.test("Complex subtraction", () => {
    const cmplx1 = new Complex(86, 15);
    const cmplx2 = new Complex(21, 9);

    assertEquals(cmplx1.sub(cmplx2), new Complex(65, 6));
    assertEquals(cmplx1.sub(7), new Complex(79, 15));
});

Deno.test("Complex multiplication", () => {
    const cmplx1 = new Complex(3, 2);
    const cmplx2 = new Complex(4, -1);

    assertEquals(cmplx1.mult(cmplx2), new Complex(14, 5));
    assertEquals(cmplx1.mult(3), new Complex(9, 6));
});

Deno.test("Complex division", () => {
    const cmplx1 = new Complex(3, 2);
    const cmplx2 = new Complex(4, -1);

    const result = cmplx1.div(cmplx2);

    assertAlmostEquals(result.real, 0.588235294);
    assertAlmostEquals(result.imag, 0.647058824);
    assertEquals(cmplx1.div(2), new Complex(1.5, 1));
});

Deno.test("Complex conjuntion, absolute value, argument", () => {
    const cmplx = new Complex(10, 10);

    assertEquals(cmplx.abs(), 10 * Math.sqrt(2));
    assertEquals(cmplx.conj(), new Complex(10, -10));
    assertEquals(cmplx.phase(), Math.PI / 4);
});
