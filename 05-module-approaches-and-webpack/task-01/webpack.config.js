/**
 * Created by Iryna_Petrenko1 on 7/12/2017.
 */
var webpack = require('webpack');

module.exports = {
    // your root file
    entry: './index.js',
    // output JS bundle to: build/bundle.js
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
            }
        ]
    }
};
