var path = require('path');

var APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
  entry: APP_DIR +'/main.js',
  output: {
    path: APP_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: APP_DIR,
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
