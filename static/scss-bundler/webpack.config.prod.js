const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '../../../styles.css'
    })],
    module: {
        rules: [
            {
                test: /\.(s)?css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
};