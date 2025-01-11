import { test } from "@cross/test";
import { assertEquals } from "@std/assert";
import { complex } from "../complex.ts";
import { sqrt } from "./sqrt.ts";

test("sqrt() normal cases", () => {
    assertEquals(sqrt(new complex(-0, -0)), new complex(0, -0));

    const z = sqrt(new complex(-4, 0));
    assertEquals(z.real, 0);
    assertEquals(z.imag, 2);

    const w = sqrt(new complex(-4, -0));
    assertEquals(w.real, 0);
    assertEquals(w.imag, -2);
});

test("sqrt() special cases", () => {
    const rd = 100 * Math.random();

    assertEquals(
        sqrt(new complex(-10, Infinity)),
        new complex(Infinity, Infinity),
    );
    assertEquals(
        sqrt(new complex(NaN, Infinity)),
        new complex(Infinity, Infinity),
    );
    assertEquals(sqrt(new complex(rd, NaN)), new complex(NaN, NaN));

    assertEquals(sqrt(new complex(-Infinity, rd)), new complex(0, Infinity));
    assertEquals(sqrt(new complex(Infinity, -rd)), new complex(Infinity, -0));
    assertEquals(sqrt(new complex(-Infinity, NaN)), new complex(NaN, Infinity));
    assertEquals(sqrt(new complex(Infinity, NaN)), new complex(Infinity, NaN));

    assertEquals(sqrt(new complex(NaN, rd)), new complex(NaN, NaN));
    assertEquals(sqrt(new complex(NaN, NaN)), new complex(NaN, NaN));
});
