import { test } from "@cross/test";
import { assertEquals } from "@std/assert";
import { exp, log, log10 } from "../src/math/mod.ts";
import { Complex } from "../mod.ts";

test("Complex exponential", () => {
    assertEquals(exp(new Complex(Infinity)), new Complex(Infinity));
    assertEquals(exp(new Complex(-Infinity, NaN)), new Complex());
    assertEquals(
        exp(new Complex(3, 4)),
        new Complex(-13.128783081462158, -15.200784463067954),
    );
});

test("Complex natural logarithm", () => {
    assertEquals(
        log(new Complex(3, 4)),
        new Complex(1.6094379124341003, 0.9272952180016122),
    );
});

test("Complex base 10 logarithm", () => {
    assertEquals(
        log10(new Complex(3, 4)),
        new Complex(0.6989700043360187, 0.4027191962733731),
    );
});
