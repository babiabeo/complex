import { test } from "@cross/test";
import { assertEquals } from "@std/assert";
import { acos, asin, atan, cos, cot, sin, sinh, tan } from "../src/math/mod.ts";
import { Complex } from "../mod.ts";

test("Complex sine", () => {
    assertEquals(sin(new Complex(Infinity)), new Complex(NaN));
    assertEquals(
        sin(
            new Complex(0, -Infinity),
        ),
        new Complex(0, -Infinity),
    );
    assertEquals(
        sin(
            new Complex(NaN, -Infinity),
        ),
        new Complex(NaN, -Infinity),
    );
    assertEquals(
        sin(new Complex(1, 1)),
        new Complex(1.2984575814159773, 0.6349639147847361),
    );
    assertEquals(
        sin(new Complex(2, 3)),
        sinh(
            new Complex(2, 3).mult(new Complex(0, 1)),
        ).mult(new Complex(0, -1)),
    );
});

test("Complex cosine", () => {
    //
});

test("Complex tangent", () => {
    //
});

test("Complex cotangent", () => {
    //
});

test("Complex arc sine", () => {
    //
});

test("Complex arc cosine", () => {
    //
});

test("Complex arc tangent", () => {
    //
});
