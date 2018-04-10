const path = require('path');
const nodeEnv = process.env.NODE_ENV;

module.exports = {
    entry: './home',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, '')
    },

    watch: nodeEnv === 'development',

    devtool: nodeEnv === 'development' ? 'source-map': false
};