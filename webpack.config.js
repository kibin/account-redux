'use strict';

let path = require(`path`);
let webpack = require(`webpack`);
let autoprefixer = require(`autoprefixer`);

module.exports = {
  devtool: `eval`,
  entry: [
    `webpack-hot-middleware/client`,
    `./src/index`,
  ],
  output: {
    path: path.join(__dirname, `dist`),
    filename: `app.js`,
    publicPath: `/static/`,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      React: `react`,
      ReactDOM: `react-dom`,
      R: `ramda`,
      ___: `./src/helpers/polyfills`
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [`babel`],
      include: path.join(__dirname, `src`),
    }, {
      test: /\.styl$/,
      loader: `style!css!postcss!stylus`,
      include: path.join(__dirname, `src`),
    }],
  },
  postcss: [
    autoprefixer({ browsers: [ `last 2 versions` ] }),
  ],
  resolve: {
    root: [
      `${__dirname}/src`,
    ],
    extentions: [ ``, `js`, `jsx`, `styl` ],
  },
};
