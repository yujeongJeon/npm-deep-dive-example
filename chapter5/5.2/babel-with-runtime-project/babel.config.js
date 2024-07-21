module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["ie >= 11"],
        },
      },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: { version: 3, proposals: false },
        absoluteRuntime: false,
        useESModules: false,
        helpers: true,
        regenerator: true,
      },
    ],
  ],
};
