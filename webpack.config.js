const autoPrefixer = require('autoprefixer');

module.exports = {
    // mode: 'production',
    entry: {
        index: ['./site/css/style.scss', './site/js/index.js'],
        admin: ['./site/admin/css/admin.scss', './site/admin/js/index.js']
    },
    output: {
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                        },
                    },
                    {loader: 'extract-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoPrefixer()]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: ['./node_modules'],
                            }
                        },
                    }
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env'],
                },
            }
        ],
    },
};