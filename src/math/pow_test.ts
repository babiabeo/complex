import { test } from "@cross/test";
import { assertAlmostEquals, assertEquals } from "@std/assert";
import { complex } from "../complex.ts";
import { pow } from "./pow.ts";
import { TOLERANCE } from "../utils.ts";

test("pow()", () => {
    const i = new complex(0, 1);
    const z = pow(i, i);
    assertAlmostEquals(z.real, 0.2078796, TOLERANCE);
    assertEquals(z.imag, 0);
});
