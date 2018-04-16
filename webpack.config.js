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
        path: path.resolve(__dirname, './public'),
        /*для динамического выполнения require. !!!ВАЖНО чтобы значение publicPath оканчивалось на / иначе
        сборка выполенся, но при выполнении require выпадет ошибка
        */
        publicPath: '/public/'
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
    },

    optimization:{
        splitChunks: {
            name: 'commons',
            minSize: 1,
            chunks: 'initial'
        }
    }
};

if (nodeEnv !== 'development') {

    const plugin = new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
            compress:{
                drop_console: false,
                drop_debugger: true,
            }
        }
    });

    if (module.exports.optimization) {
        module.exports.optimization.minimizer = [plugin];
    } else {
        module.exports.optimization = {
            minimizer:[
                plugin
            ]
        };
    }
}