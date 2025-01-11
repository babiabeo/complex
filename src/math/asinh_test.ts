import { test } from "@cross/test";
import { assertAlmostEquals } from "@std/assert";
import { acosh, asinh } from "./asinh.ts";
import { complex } from "../complex.ts";
import { TOLERANCE } from "../utils.ts";

test("asinh()", () => {
    const z = asinh(new complex(1, 2));
    assertAlmostEquals(z.real, 1.4693517, TOLERANCE);
    assertAlmostEquals(z.imag, 1.0634400, TOLERANCE);
});

test("acosh()", () => {
    const z = acosh(new complex(1, 1));
    assertAlmostEquals(z.real, 1.0612751, TOLERANCE);
    assertAlmostEquals(z.imag, 0.9045569, TOLERANCE);
});
