require('dotenv').config();
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ['./src/js/index.js', './src/sass/basic.scss'],
    output: {
        filename: 'script.js',
        path:path.join(__dirname, (process.env.RESOURCE_PATH === undefined ? 'dist' : process.env.RESOURCE_PATH))
    },
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(s)?css$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin({filename: "./[name].bundle.css"})]
};