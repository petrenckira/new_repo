var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const firebase = require('firebase');
module.exports = {

  entry: {
    app: path.resolve('./src/app/app.js')
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!less-loader'})
      },
      {
        test: /\.(jpe?g|png)$/,
        loader: 'url-loader?limit=10000&name=images/[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
      },
      {
        test: /\.handlebars$/,
        loader: "handlebars-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: 'styles.css', disable: false, allChunks: true})
  ],
  resolve: {
    alias: {
      '@less-helpers-module': path.resolve('src/assets/less/helpers'),
      '@images-root-path': path.resolve('src/assets/images')
    }
  },

};
