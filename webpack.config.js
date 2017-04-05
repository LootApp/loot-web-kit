/* eslint-disable */
const webpack = require('webpack');

module.exports = {
  entry: {
    WebKitConfig: './src/WebKitConfig',
    vendor: ['react']
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'es2015', 'stage-0', 'react']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    minChunks: Infinity
  })
  ]
};
