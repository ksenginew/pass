const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '_dist'),
    filename: 'bundle.js',
  },
};
