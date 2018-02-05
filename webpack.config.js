const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: "./dist/bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  // devtool: 'cheap-module-source-map',
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /(node_modules)/ }
    ]
  }
};
