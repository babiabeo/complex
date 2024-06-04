import { test } from "@cross/test";
import { assertEquals } from "@std/assert";
import { acosh, asinh, atanh, cosh, sinh, tanh } from "../src/math/mod.ts";
import { Complex } from "../mod.ts";

test("Complex hyperbolic sine", () => {
    assertEquals(
        sinh(new Complex(0, Infinity)),
        new Complex(0, NaN),
    );
    assertEquals(
        sinh(new Complex(Infinity, Infinity)),
        new Complex(Infinity, NaN),
    );
    assertEquals(
        sinh(new Complex(NaN, 0)),
        new Complex(NaN, 0),
    );
    assertEquals(
        sinh(new Complex(1, 1)),
        new Complex(0.6349639147847361, 1.2984575814159773),
    );
});

test("Complex hyperbolic cosine", () => {
    assertEquals(
        cosh(new Complex(0, Infinity)),
        new Complex(NaN, 0),
    );
    assertEquals(
        cosh(new Complex(Infinity, Infinity)),
        new Complex(Infinity, NaN),
    );
    assertEquals(
        cosh(new Complex(NaN, 0)),
        new Complex(NaN, 0),
    );
    assertEquals(
        cosh(new Complex(1, 1)),
        new Complex(0.8337300251311491, 0.9888977057628651),
    );
});

test("Complex hyperbolic tangent", () => {
    assertEquals(
        tanh(new Complex(-Infinity, 32)),
        new Complex(-1, 0),
    );
    assertEquals(
        tanh(new Complex(Infinity, Infinity)),
        new Complex(1, 0),
    );
    assertEquals(
        tanh(new Complex(NaN, 0)),
        new Complex(NaN, 0),
    );
    assertEquals(
        tanh(new Complex(1, 1)),
        new Complex(1.0839233273386948, 0.27175258531951174),
    );
});

test("Complex inverse hyperbolic sine", () => {
    assertEquals(
        asinh(new Complex(1, 1)),
        new Complex(1.0612750619050355, 0.6662394324925153),
    );
});

test("Complex inverse hyperbolic cosine", () => {
    assertEquals(
        acosh(new Complex(1, 1)),
        new Complex(1.0612750619050355, 0.9045568943023813),
    );
});

test("Complex inverse hyperbolic tangent", () => {
    assertEquals(
        atanh(new Complex(1, 1)),
        new Complex(0.40235947810852507, 1.0172219678978514),
    );
});
