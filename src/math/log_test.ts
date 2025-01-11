import { test } from "@cross/test";
import { assertAlmostEquals } from "@std/assert";
import { complex } from "../complex.ts";
import { log, log10 } from "./log.ts";

test("log()", () => {
    const ex = log(new complex(3, 4));

    assertAlmostEquals(ex.real, 1.6094379);
    assertAlmostEquals(ex.imag, 0.9272952);
});

test("log10()", () => {
    const ex = log10(new complex(3, 4));

    assertAlmostEquals(ex.real, 0.6989700);
    assertAlmostEquals(ex.imag, 0.4027192);
});
