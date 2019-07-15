const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const env = process.env.NODE_ENV || 'development';


module.exports = {
  entry: ['babel-polyfill', 'index.js'],
  mode: env,
  output: {
    path: __dirname + '/dist',
    filename: 'coverage-[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/base.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'coverage-[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src'),
    ],
  },
}
