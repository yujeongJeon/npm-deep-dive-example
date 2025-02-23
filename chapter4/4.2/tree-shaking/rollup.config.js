const commonjs = require("@rollup/plugin-commonjs");
const resolve = require("@rollup/plugin-node-resolve");
const buble = require("@rollup/plugin-buble");
const sizes = require("rollup-plugin-sizes");

module.exports = {
    input: "./index.js",
    output: {
        format: "cjs",
        dir: "./dist/cjs/index.js",
    },
    plugins: [commonjs(), resolve(), buble(), sizes()],
};
