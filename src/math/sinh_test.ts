import { test } from "@cross/test";
import { assertAlmostEquals, assertEquals } from "@std/assert";
import { cosh, sinh } from "./sinh.ts";
import { complex } from "../complex.ts";
import { TOLERANCE } from "../utils.ts";

test("sinh() normal cases", () => {
    assertEquals(sinh(new complex(0, 0)), new complex(0, 0));
    assertEquals(sinh(new complex(-0, -0)), new complex(-0, -0));

    const result = sinh(new complex(1, 1));
    assertAlmostEquals(result.real, 0.6349639, TOLERANCE);
    assertAlmostEquals(result.imag, 1.2984576, TOLERANCE);
});

test("sinh() special cases", () => {
    const rd = 100 * Math.random();

    assertEquals(sinh(new complex(0, Infinity)), new complex(0, NaN));
    assertEquals(sinh(new complex(0, -Infinity)), new complex(0, NaN));
    assertEquals(sinh(new complex(-0, NaN)), new complex(-0, NaN));

    assertEquals(
        sinh(new complex(rd, Infinity)),
        new complex(NaN, NaN),
    );
    assertEquals(
        sinh(new complex(rd, -Infinity)),
        new complex(NaN, NaN),
    );
    assertEquals(
        sinh(new complex(rd, NaN)),
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
        sinh(new complex(NaN, rd)),
        new complex(NaN, NaN),
    );
});

test("cosh() normal cases", () => {
    assertEquals(cosh(new complex(0, 0)), new complex(1, 0));
    assertEquals(cosh(new complex(-0, -0)), new complex(1, -0));

    const result = cosh(new complex(1, 1));
    assertAlmostEquals(result.real, 0.8337300, TOLERANCE);
    assertAlmostEquals(result.imag, 0.9888977, TOLERANCE);
});

test("cosh() special cases", () => {
    const rd = 100 * Math.random();

    assertEquals(cosh(new complex(0, Infinity)), new complex(NaN, 0));
    assertEquals(cosh(new complex(0, -Infinity)), new complex(NaN, 0));
    assertEquals(cosh(new complex(-0, NaN)), new complex(NaN, -0));

    assertEquals(
        cosh(new complex(rd, Infinity)),
        new complex(NaN, NaN),
    );
    assertEquals(
        cosh(new complex(rd, -Infinity)),
        new complex(NaN, NaN),
    );
    assertEquals(
        cosh(new complex(rd, NaN)),
        new complex(NaN, NaN),
    );

    assertEquals(cosh(new complex(Infinity, 0)), new complex(Infinity, 0));
    assertEquals(
        cosh(new complex(-Infinity, Infinity)),
        new complex(-Infinity, NaN),
    );
    assertEquals(cosh(new complex(Infinity, NaN)), new complex(Infinity, NaN));
    assertEquals(
        cosh(new complex(-Infinity, 10)),
        new complex(Infinity, -Infinity),
    );

    assertEquals(cosh(new complex(NaN, -0)), new complex(NaN, -0));
    assertEquals(cosh(new complex(NaN, NaN)), new complex(NaN, NaN));
    assertEquals(cosh(new complex(NaN, -Infinity)), new complex(NaN, NaN));
    assertEquals(
        cosh(new complex(NaN, rd)),
        new complex(NaN, NaN),
    );
});
