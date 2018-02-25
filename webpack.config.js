let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');


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
  ],
  devServer:{
    contentBase: paths.PUBLIC,
    port: 8080
  },
  resolve: {
    extensions: ['.js','.jsx']
  }
}