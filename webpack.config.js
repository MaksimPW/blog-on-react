/* eslint-disable */

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3030',
    'webpack/hot/only-dev-server',
    APP_DIR + '/index.jsx'
  ],

  output: {
    path: BUILD_DIR,
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1'
        ]
      },
      { test: /\.(eot|jpg|png|ttf|svg|woff|woff2)$/, loader: 'url-loader'}
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      "node_modules",
      './src'
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
