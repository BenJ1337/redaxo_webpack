module.exports = {
    watch: true,
    output: {
        filename: 'styles.js',
        path: __dirname + '../../../dev'
    },
    module: {
        rules: [
            {
                test: /\.(s)?css$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};