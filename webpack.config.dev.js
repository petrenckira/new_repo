var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: {
    app: path.resolve('./src/app/app.js')
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@less-helpers-module': path.resolve('src/assets/less/helpers'),  // alias for less helpers
      '@images-root-path': path.resolve('src/assets/images')            // alias for images path
    }
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      },
      {
        test: /\.(jpe?g|png)$/,
        loader: 'url-loader?limit=10000&name=images/[name].[ext]'
      },
      {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'file'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
  watch: true
};
