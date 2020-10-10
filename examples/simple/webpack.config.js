const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './main.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  optimization: {
    minimize: false
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'bundle.js'
  }
};