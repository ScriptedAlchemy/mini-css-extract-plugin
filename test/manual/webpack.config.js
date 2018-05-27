const Self = require('../../');
const path = require('path');
const webpack = require('webpack');

const poop = {
  mode: 'development',
  output: {
    chunkFilename: "[contenthash].js",
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: Self.loader},
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new Self({
      filename: '[name].css',
      chunkFilename: "[contenthash].css",
    }),

    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: __dirname,
    hot: true
  },
};

module.exports = poop
