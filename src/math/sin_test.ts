import { test } from "@cross/test";
import { assertAlmostEquals } from "@std/assert";
import { cos, sin } from "./sin.ts";
import { complex } from "../complex.ts";
import { TOLERANCE } from "../utils.ts";

test("sin()", () => {
    const z = sin(new complex(1, 1));
    assertAlmostEquals(z.real, 1.2984576, TOLERANCE);
    assertAlmostEquals(z.imag, 0.6349639, TOLERANCE);
});

test("cos()", () => {
    const z = cos(new complex(1, 1));
    assertAlmostEquals(z.real, 0.8337300, TOLERANCE);
    assertAlmostEquals(z.imag, -0.9888977, TOLERANCE);
});
