import { test } from "@cross/test";
import { assertAlmostEquals, assertEquals } from "@std/assert";
import { exp } from "./exp.ts";
import { complex } from "../complex.ts";
import { TOLERANCE } from "../utils.ts";

test("exp() normal cases", () => {
    assertEquals(exp(new complex(0, 0)), new complex(1, 0));
    assertEquals(exp(new complex(-0, -0)), new complex(1, -0));

    const result = exp(new complex(3, 4));
    assertAlmostEquals(result.real, -13.1287831, TOLERANCE);
    assertAlmostEquals(result.imag, -15.2007845, TOLERANCE);
});

test("exp() special cases", () => {
    const rd = 100 * Math.random();

    assertEquals(
        exp(new complex(rd, Infinity)),
        new complex(NaN, NaN),
    );
    assertEquals(
        exp(new complex(rd, -Infinity)),
        new complex(NaN, NaN),
    );
    assertEquals(
        exp(new complex(rd, NaN)),
        new complex(NaN, NaN),
    );

    assertEquals(exp(new complex(Infinity, 0)), new complex(Infinity, 0));
    assertEquals(exp(new complex(-Infinity, 30)), new complex(0, -0));
    assertEquals(
        exp(new complex(Infinity, 30)),
        new complex(Infinity, -Infinity),
    );
    assertEquals(
        exp(new complex(-Infinity, Infinity)),
        new complex(0, 0),
    );
    assertEquals(
        exp(new complex(Infinity, -Infinity)),
        new complex(Infinity, NaN),
    );
    assertEquals(exp(new complex(-Infinity, NaN)), new complex(0, 0));
    assertEquals(exp(new complex(Infinity, NaN)), new complex(Infinity, NaN));

    assertEquals(exp(new complex(NaN, -0)), new complex(NaN, -0));
    assertEquals(exp(new complex(NaN, NaN)), new complex(NaN, NaN));
    assertEquals(exp(new complex(NaN, -Infinity)), new complex(NaN, NaN));
    assertEquals(
        exp(new complex(NaN, rd)),
        new complex(NaN, NaN),
    );
});
