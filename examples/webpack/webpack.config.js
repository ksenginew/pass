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
        type: 'javascript/auto',
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
