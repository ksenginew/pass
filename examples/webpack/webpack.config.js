const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "__dist__"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.pass\.js$/i,
        type: "asset/source",
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "pass-loader",
        ],
      },
      {
        test: /\.pass\.ts$/i,
        type: "asset/source",
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "pass-loader",
          "ts-loader",
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
