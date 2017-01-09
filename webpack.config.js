var webpack = require('webpack');
var path = require("path");

module.exports = {
    context: __dirname + '/src',
    entry: {
        app: './app.js',
        vendor: ['angular']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};