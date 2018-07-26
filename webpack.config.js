const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var data = require('./content/index.js')
module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './js/index.js',
    './views/index.pug',
    './scss/main.scss'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  module:{
    rules:[
      {
        test: /\.pug$/,
        use: [
          {
            loader:'html-loader'
        },
        {
          loader:'pug-html-loader',
          options: {
            data: data
          }
        }]
      },
      {
        test: /\.css|scss$/,
        loader:['style-loader','css-loader','sass-loader']
      }
     
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'index.html',
      template: path.join('./views/index.pug'),
    }),
  ],
};
