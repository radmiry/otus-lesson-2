const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.ts'),
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath:'/'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(ts|tsx)$/i,
                loader: "ts-loader",
            },
        ],
    },
    devServer: {
        port: 8080,
        liveReload: true,
        open: true
    },
}