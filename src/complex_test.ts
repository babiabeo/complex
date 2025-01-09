import { test } from "@cross/test";
import { assertAlmostEquals, assertEquals } from "@std/assert";
import { complex } from "./complex.ts";

test("Complex parts", () => {
    const ex = new complex(3, 5);

    assertEquals(ex.real, 3);
    assertEquals(ex.imag, 5);
    assertEquals(String(ex), "3 + 5i");
});

test("Complex polar form", () => {
    const ex = complex.fromPolar(2, Math.PI / 2);

    assertAlmostEquals(ex.real, 0, Number.EPSILON);
    assertEquals(ex.imag, 2);
    assertEquals(ex.polar(), [2, Math.PI / 2]);
});

test("Complex addition", () => {
    const ex1 = new complex(3, 5);
    const ex2 = new complex(3, 5);

    assertEquals(ex1.add(ex2), new complex(6, 10));
    assertEquals(ex1.add(2), new complex(5, 5));
});

test("Complex subtraction", () => {
    const ex1 = new complex(86, 15);
    const ex2 = new complex(21, 9);

    assertEquals(ex1.sub(ex2), new complex(65, 6));
    assertEquals(ex1.sub(7), new complex(79, 15));
});

test("Complex multiplication", () => {
    const ex1 = new complex(3, 2);
    const ex2 = new complex(4, -1);

    assertEquals(ex1.mul(ex2), new complex(14, 5));
    assertEquals(ex1.mul(3), new complex(9, 6));
});

test("Complex division", () => {
    const ex1 = new complex(3, 2);
    const ex2 = new complex(4, -1);

    const result = ex1.div(ex2);
    assertAlmostEquals(result.real, 0.588235294);
    assertAlmostEquals(result.imag, 0.647058824);

    assertEquals(ex1.div(2), new complex(1.5, 1));
});

test("Complex conjugate, absolute value, argument, negation", () => {
    const ex = new complex(10, 10);

    assertEquals(ex.abs(), 10 * Math.sqrt(2));
    assertEquals(ex.conj(), new complex(10, -10));
    assertEquals(ex.arg(), Math.PI / 4);
    assertEquals(ex.neg(), new complex(-10, -10));
});
