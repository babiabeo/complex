import { test } from "@cross/test";
import { assertAlmostEquals, assertEquals } from "@std/assert";
import { complex } from "../complex.ts";
import { tanh } from "./tanh.ts";
import { TOLERANCE } from "../utils.ts";

test("tanh() normal cases", () => {
    assertEquals(tanh(new complex(0, -0)), new complex(0, -0));

    const z = tanh(new complex(1, 1));
    assertAlmostEquals(z.real, 1.0839233, TOLERANCE);
    assertAlmostEquals(z.imag, 0.2717526, TOLERANCE);
});

test("tanh() special cases", () => {
    const rd = 100 * Math.random();

    assertEquals(tanh(new complex(0, Infinity)), new complex(0, NaN));
    assertEquals(tanh(new complex(-0, NaN)), new complex(-0, NaN));
    assertEquals(tanh(new complex(rd, -Infinity)), new complex(NaN, NaN));
    assertEquals(tanh(new complex(rd, NaN)), new complex(NaN, NaN));

    assertEquals(tanh(new complex(Infinity, -Infinity)), new complex(1, -0));
    assertEquals(tanh(new complex(-Infinity, -rd)), new complex(-1, -0));
    assertEquals(tanh(new complex(Infinity, NaN)), new complex(1, 0));

    assertEquals(tanh(new complex(NaN, 0)), new complex(NaN, 0));
    assertEquals(tanh(new complex(NaN, rd)), new complex(NaN, NaN));
    assertEquals(tanh(new complex(NaN, NaN)), new complex(NaN, NaN));
});
