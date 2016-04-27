const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
  devtool: 'sourcemap',
  entry: {
    app: [
      './src/index.scss',
      'babel-polyfill',
      './src/index.js',
    ],
  },
  module: {
    //preLoaders: [
    //  { test: /\.js$/, exclude: [/vendor/, /node_modules/], loader: 'eslint-loader' },
    //],
    loaders: [
      { test: /\.js$/, exclude: [/vendor/, /node_modules/], loader: 'babel' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.yml$/, loader: 'json!yaml' },
      { test: /\.scss$/, loader: "style!css!autoprefixer?browsers=last 2 versions!sass" },
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.Tether': 'tether',
    }),
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      hash: true,
    }),
    new ExtractTextPlugin('index.css'),
  ],
};

if (NODE_ENV === 'development') {
  config.output = {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'src'),
  };
} else if (NODE_ENV === 'production') {
  config.output = {
    filename: '[name].bundle.js',
    publicPath: '',
    path: path.resolve(__dirname, 'dist'),
  };

  config.plugins = config.plugins.concat([
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      minChunks: module => module.resource && module.resource.indexOf('node_modules') !== -1,
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$super', '$', 'exports', 'require'],
      },
    }),
  ]);
}

module.exports = config;
