import path from 'path';
import webpack from 'webpack';

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const BUILD_DIR = path.resolve(__dirname, '../../src/client/public');
const APP_DIR = path.resolve(__dirname, '../../src/client/app');

export default {
  entry: {
    bundle: `${APP_DIR}/index.jsx`
  },

  output: {
    path: `${BUILD_DIR}/assets`,
    publicPath: '/assets/',
    filename: '[name].[chunkhash].js'
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
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
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: false,
      __TEST__: false,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en|ru)$/),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunk: function(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: 'source-map'
    }),
    new BundleAnalyzerPlugin({
      analizerMode: 'static'
    })
  ]
};
