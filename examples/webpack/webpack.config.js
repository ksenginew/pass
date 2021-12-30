const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '_dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.pass\.js$/,
        type: 'asset/source',
        use: ["style-loader", "css-loader", "./pass-loader.js"],
      },
    ],
  },
};
