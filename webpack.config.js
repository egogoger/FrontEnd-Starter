const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            Components: path.resolve(__dirname, 'src/components/'),
            Pages: path.resolve(__dirname, 'src/pages/'),
            Models: path.resolve(__dirname, 'src/models/'),
            Actions: path.resolve(__dirname, 'src/store/actions/'),
            Reducers: path.resolve(__dirname, 'src/store/reducers/'),
            Constants$: path.resolve(__dirname, 'src/utils/constants.ts'),
            Interfaces$: path.resolve(__dirname, 'src/utils/interfaces.ts')
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ],
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    'ts-loader',
                    'eslint-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};
