const path = require('path')

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
                loader: "babel-loader",
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/public')
        },
        port: 8080,
        liveReload: true,
        open: true
    },
}