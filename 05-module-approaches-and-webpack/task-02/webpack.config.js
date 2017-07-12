var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

module.exports = {
    // your root file
    entry: './src/index.js',
    // output JS bundle to: build/bundle.js
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },


    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],

                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]

    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),

        // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendors.bundle.js')
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push({
        new webpack.webpackUglifyJsPlugin({
            cacheFolder: path.resolve(__dirname, 'public/cached_uglify/'),
            debug: true,
            minimize: true,
            sourceMap: false,
            output: {
                comments: false
            },
            compressor: {
                warnings: false
            }
        })
    })
    module.exports.loaders.push(
        {
            test: /\.css$/,
            loader: 'css-loader!autoprefixer-loader?browsers=last 2 versions'
        }
    )

} else {
    module.exports.loaders.push({
        test: /\.js$/,
        use: ["source-map-loader"]
    }),
    module.exports.devServer = {
        host: 'localhost',
        port: 8080,
    }

}
