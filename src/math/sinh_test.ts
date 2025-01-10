import { sinh } from "./sinh.ts";
import { complex } from "../complex.ts";
import { test } from "@cross/test";
import { assertAlmostEquals, assertEquals } from "@std/assert";

const tolerance = 1e-7;

test("Normal cases", () => {
    assertEquals(sinh(new complex(0, 0)), new complex(0, 0));
    assertEquals(sinh(new complex(-0, -0)), new complex(-0, -0));

    const result = sinh(new complex(1, 1));
    assertAlmostEquals(result.real, 0.6349639, tolerance);
    assertAlmostEquals(result.imag, 1.2984576, tolerance);
});

test("Special cases", () => {
    assertEquals(sinh(new complex(0, Infinity)), new complex(0, NaN));
    assertEquals(sinh(new complex(0, -Infinity)), new complex(0, NaN));
    assertEquals(sinh(new complex(-0, NaN)), new complex(-0, NaN));

    assertEquals(
        sinh(new complex(Math.random() * 100, Infinity)),
        new complex(NaN, NaN),
    );
    assertEquals(
        sinh(new complex(Math.random() * 100, -Infinity)),
        new complex(NaN, NaN),
    );
    assertEquals(
        sinh(new complex(Math.random() * 100, NaN)),
        new complex(NaN, NaN),
    );

    assertEquals(sinh(new complex(Infinity, 0)), new complex(Infinity, 0));
    assertEquals(
        sinh(new complex(-Infinity, Infinity)),
        new complex(-Infinity, NaN),
    );
    assertEquals(sinh(new complex(Infinity, NaN)), new complex(Infinity, NaN));
    assertEquals(
        sinh(new complex(-Infinity, 10)),
        new complex(Infinity, -Infinity),
    );

    assertEquals(sinh(new complex(NaN, -0)), new complex(NaN, -0));
    assertEquals(sinh(new complex(NaN, NaN)), new complex(NaN, NaN));
    assertEquals(sinh(new complex(NaN, -Infinity)), new complex(NaN, NaN));
    assertEquals(
        sinh(new complex(NaN, Math.random() * 100)),
        new complex(NaN, NaN),
    );
});
