const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  filename: `main.html`,
  chunks: "main",
  templateContent: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Template Example</title>
    </head>
    <body>
    <div id="loading">Loading...</div>
    <div id="hidden" style="display: none;">이 div 요소는 3초후에 보이는 div 요소입니다.</div>
    </body>
    </html>
  `,
});

module.exports = (env, argv) => ({
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    browsers: ["last 2 versions", "ie >= 11"],
                  },
                  modules: false,
                },
              ],
            ],
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  mode: argv.mode === "production" ? "production" : "development",
  plugins: [htmlPlugin],
});
