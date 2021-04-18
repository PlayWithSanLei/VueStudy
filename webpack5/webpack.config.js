const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 单入口文件
    // entry: './src/index.js',
    // 多入口文件
    // entry: ["./src/index.js", "./src/main.js"],

    // 对象 chunk的名称为key
    // entry: {
    //     one: './src/index.js',
    //     two: './src/main.js'
    // },
// 特殊用法:
//     entry: {
//         onea: ['./src/main.js', './src/index.js'],
//         twob: './src/index.js'
//     },

    entry: {
        vendor: ['./src/js/jquery.js', './src/js/common.js'],
        index: './src/js/index.js',
        cart: './src/js/cart.js'
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: []
    },
    plugins: [
        // 默认会创建一个空的html, 自动引入打包的资源
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index', 'vendor'],
            minify: {
                // 移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true,
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/cart.html',
            filename: 'cart.html',
            chunks: ['cart', 'vendor']
        }),
    ],
    mode: 'development'
}
