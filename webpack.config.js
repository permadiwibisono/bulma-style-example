let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
let extractCss = new ExtractTextPlugin('styles.bundle.css');


let paths = {
  SRC: path.resolve(__dirname,'src'),
  DIST: path.resolve(__dirname,'dist'),
  PUBLIC: path.resolve(__dirname,'public')
}
console.log(paths);
let rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use:[
      'babel-loader'
    ]
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: extractCss.extract({
      fallback: "style-loader",
      use: [
        {
          loader: "css-loader"
        },
        {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                  require('autoprefixer')
              ]
            }
        }
      ]
    })
  }
]

module.exports={
  entry: path.join(paths.SRC, 'index.js'),
  output: {
    path: paths.DIST,
    filename:'main.bundle.js'
  },
  module:{
    rules:[...rules]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.join(paths.PUBLIC, 'index.html'),
    }),
    extractCss,
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer:{
    contentBase: paths.PUBLIC,
    port: 8080
  },
  resolve: {
    extensions: ['.js','.jsx']
  }
}