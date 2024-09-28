import { bench, describe } from "vitest";
import isEmpty from "./isEmpty.js";
import _isEmpty from "lodash.isempty";

const testCases = [
    null,
    undefined,
    "",
    "hello",
    [],
    [1, 2, 3],
    {},
    { key: "value" },
    0,
    1,
    true,
    false,
    new Date(),
    new Map(),
    new Set(),
    NaN,
    Infinity,
];

function generateTestSequence(length) {
    return Array.from({ length }, () => testCases[Math.floor(Math.random() * testCases.length)]);
}

const testSequence = generateTestSequence(1000000);

describe("isEmpty benchmark test", () => {
    bench("Custom", () => {
        testSequence.forEach((value) => isEmpty(value));
    });

    bench("lodash", () => {
        testSequence.forEach((value) => _isEmpty(value));
    });
});
