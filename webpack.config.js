const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const minimize = mode === 'production';
const plugins = [];

module.exports = {
  mode,
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'index.js'),
  externals: {
    osjs: 'OSjs'
  },
  optimization: {
    minimize,
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: 'javascript-tetris', to: 'javascript-tetris'},
      'icon.png'
    ]),
    ...plugins
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
