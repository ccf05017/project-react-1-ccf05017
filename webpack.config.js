const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// hello

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    filename: '[name].js',
    path: path.resolve('./build'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  devServer: {
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
