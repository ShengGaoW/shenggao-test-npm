const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        'add': './src/index.js',
        'add.min': './src/index.js'
    },
    output: {
        filename: '[name].js',
        library: 'add',
        libraryTarget: 'umd',
        libraryExport: 'default',
        globalObject: 'this'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
            })
        ]
    }
}




