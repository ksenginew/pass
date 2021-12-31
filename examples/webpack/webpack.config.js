const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '__dist__'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.pass\.js$/i,
        type: 'asset/source',
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "./pass-loader.js"
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
