const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');
module.exports = (env, argv) => {
    const config = require(`./webpack.${argv.mode}`);
    return merge(commonConfig, config);
};
