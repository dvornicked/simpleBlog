const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    target: 'web',
    devServer: {
        static: {
            directory: __dirname + '/dist'
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: "index.html",
            template: "./src/index.html",
        }),
    ],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}