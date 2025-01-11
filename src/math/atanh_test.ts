import { test } from "@cross/test";
import { assertAlmostEquals } from "@std/assert";
import { atanh } from "./atanh.ts";
import { complex } from "../complex.ts";
import { TOLERANCE } from "../utils.ts";

test("atanh()", () => {
    const z = atanh(new complex(1, 2));
    assertAlmostEquals(z.real, 0.1732868, TOLERANCE);
    assertAlmostEquals(z.imag, 1.1780972, TOLERANCE);
});
