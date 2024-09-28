import { Bench } from "tinybench";
import isEmpty from "./isEmpty.js";
import _isEmpty from "lodash.isempty";

const bench = new Bench({ iterations: 10 });

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

bench.add("Custom isEmpty", () => {
    testSequence.forEach((value) => isEmpty(value));
});

bench.add("Lodash isEmpty", () => {
    testSequence.forEach((value) => _isEmpty(value));
});

async function runBenchmark() {
    await bench.warmup();
    await bench.run();

    console.log("Custom isEmpty:");
    console.log(`  Mean time: ${bench.tasks[0].result.mean.toFixed(6)} ms`);
    console.log(`  Ops/sec: ${bench.tasks[0].result.hz.toFixed(2)}`);

    console.log("\nLodash isEmpty:");
    console.log(`  Mean time: ${bench.tasks[1].result.mean.toFixed(6)} ms`);
    console.log(`  Ops/sec: ${bench.tasks[1].result.hz.toFixed(2)}`);

    const customMean = bench.tasks[0].result.mean;
    const lodashMean = bench.tasks[1].result.mean;

    if (customMean < lodashMean) {
        console.log("\nCustom isEmpty is faster by", ((lodashMean / customMean - 1) * 100).toFixed(2) + "%");
    } else if (customMean === lodashMean) {
        console.log("\nCustom isEmpty and Lodash isEmpty have the same performance");
    } else {
        console.log("\nLodash isEmpty is faster by", ((customMean / lodashMean - 1) * 100).toFixed(2) + "%");
    }

    console.table(bench.table());
}

runBenchmark().catch(console.error);
