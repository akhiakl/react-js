const path = require('path');

const config = {
  entry: './index.jsx',
  output: {
    publicPath: '/dist',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader', exclude: [/node_modules/] }
    ]
  },
  devServer: {
    proxy: [
      {
        context: ['/api/**'],
        target: 'http://localhost:4000',
        secure: false
      }
    ]
  }
};

module.exports = config;
