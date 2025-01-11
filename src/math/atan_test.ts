import { test } from "@cross/test";
import { assertAlmostEquals } from "@std/assert";
import { atan } from "./atan.ts";
import { complex } from "../complex.ts";
import { TOLERANCE } from "../utils.ts";

test("atan()", () => {
    const z = atan(new complex(0, 2));
    assertAlmostEquals(z.real, 1.5707963, TOLERANCE);
    assertAlmostEquals(z.imag, 0.5493061, TOLERANCE);
});
