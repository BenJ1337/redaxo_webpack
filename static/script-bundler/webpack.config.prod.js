const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, '../../'),
        filename: 'script.js',
    },
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    }
};