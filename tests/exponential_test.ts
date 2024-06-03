import { assertEquals } from "@std/assert";
import { exp, log, log10 } from "../src/math/mod.ts";
import { Complex } from "../mod.ts";

Deno.test("Complex exponential", () => {
    assertEquals(
        exp(new Complex(3, 4)),
        new Complex(-13.128783081462158, -15.200784463067954),
    );
});

Deno.test("Complex natural logarithm", () => {
    assertEquals(
        log(new Complex(3, 4)),
        new Complex(1.6094379124341003, 0.9272952180016122),
    );
});

Deno.test("Complex base 10 logarithm", () => {
    assertEquals(
        log10(new Complex(3, 4)),
        new Complex(0.6989700043360187, 0.4027191962733731),
    );
});
