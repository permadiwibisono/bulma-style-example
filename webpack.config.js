const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCss = new ExtractTextPlugin('styles.bundle.css');
const autoprefixer = require('autoprefixer');

const paths = {
  SRC: path.resolve(__dirname, 'src'),
  DIST: path.resolve(__dirname, 'dist'),
  PUBLIC: path.resolve(__dirname, 'public'),
};
// console.log(paths);

const rules = [
  { test: /\.json$/, loader: 'json-loader' },
  { test: /\.(eot?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/, loader: 'file-loader' },
  { test: /\.(png|svg|jpg|gif)$/, loader: 'url-loader?limit=10000' },
  {
    enforce: 'pre',
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
  },
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  },
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: extractCss.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              autoprefixer,
            ],
          },
        },
        {
          loader: 'sass-loader',
        },
      ],
    }),
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: extractCss.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              autoprefixer,
            ],
          },
        },
      ],
    }),
  },
];

module.exports = {
  entry: path.join(paths.SRC, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'main.bundle.js',
  },
  module: {
    rules: [...rules],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.PUBLIC, 'index.html'),
    }),
    extractCss,
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: paths.PUBLIC,
    port: 8080,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
