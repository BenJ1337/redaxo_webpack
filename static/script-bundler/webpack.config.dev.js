var webpack = require('webpack');

module.exports = {
    watch: true,
    output: {
        filename: 'script.js',
        path: __dirname + '../../../dev'
    },
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    }
};