const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '_dist'),
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
  plugins: [new MiniCssExtractPlugin({
    filename: 'bundle.css'
    chunkFilename: 'chunk.css',
  })],
};
