const path = require('path');
const nodeEnv = process.env.NODE_ENV;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: nodeEnv === 'development' ? 'development': 'production',

    //содержит абсолютный путь для директории frontend
    context: __dirname + "/frontend",
    entry: {
        home:'./home',
        about: './about'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './public')
    },

    watch: nodeEnv === 'development',

    devtool: nodeEnv === 'development' ? 'source-map': false,

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                //обязательно нужно указать, иначе не будет переводить
                options: {
                    //делает доступным перевод для ES2015+
                    presets: ['env']
                }
            }
        }]
    }
};

if (nodeEnv !== 'development') {

    module.exports.optimization = {
        minimizer:[
            new UglifyJsPlugin({
                sourceMap: true,
                uglifyOptions: {
                    compress:{
                        drop_console: false,
                        drop_debugger: true
                    }
                }
            })
        ]
    };
}