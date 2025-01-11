import { test } from "@cross/test";
import { assertAlmostEquals } from "@std/assert";
import { acos, asin } from "./asin.ts";
import { complex } from "../complex.ts";
import { TOLERANCE } from "../utils.ts";

test("asin()", () => {
    const z = asin(new complex(-2, 0));
    assertAlmostEquals(z.real, -1.5707963, TOLERANCE);
    assertAlmostEquals(z.imag, 1.3169579, TOLERANCE);
});

test("acos()", () => {
    const z = acos(new complex(-2, 0));
    assertAlmostEquals(z.real, 3.1415927, TOLERANCE);
    assertAlmostEquals(z.imag, -1.3169579, TOLERANCE);
});
