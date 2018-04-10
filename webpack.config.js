const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target:'web',
    entry: path.resolve(__dirname, 'src'),
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'file-loader',
            },
            {
                test: /\.jsx?/,
                include:[path.resolve(__dirname,'src')],
                exclude:[path.resolve(__dirname,'node_modules')],
                use:'babel-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'web-app',
            meta: {
                viewport: 'width=device-width,initial-scale=1',
            },
            inject:true,
            favicon:path.resolve(__dirname,'assets','react.svg'),//?不起作用
        })
    ],
    devServer:{
        host:'127.0.0.1',
        port:8090,
        open:true,
    },
    resolve:{
        alias:{
            
        }
    }
}