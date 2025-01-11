import { test } from "@cross/test";
import { assertAlmostEquals } from "@std/assert";
import { tan } from "./tan.ts";
import { complex } from "../complex.ts";
import { TOLERANCE } from "../utils.ts";

test("tan()", () => {
    const z = tan(new complex(1, 1));
    assertAlmostEquals(z.real, 0.2717526, TOLERANCE);
    assertAlmostEquals(z.imag, 1.0839233, TOLERANCE);
});
