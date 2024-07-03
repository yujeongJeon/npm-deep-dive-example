import { transform } from "@babel/core";

const code = `
const sum = (a, b) => a + b;
`;

const output = transform(code, {
  presets: ["@babel/preset-env"],
});

console.log(output.code);
