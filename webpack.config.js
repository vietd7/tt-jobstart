var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'src'),
    images: path.join(__dirname, 'src/assets/'),
    build: path.join(__dirname, 'dist')
};
var baseHref = process.env.WP_BASE_HREF ? process.env.WP_BASE_HREF : '/';

// the path(s) that should be cleaned
let pathsToClean = [
    'build'
]

// the clean options to use
let cleanOptions = {
    verbose: true
}


module.exports = {
    entry: path.join(__dirname, "/src/index.js"),
    module:
    {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        "env",
                        "react",
                        "es2015",
                        "stage-0"
                    ],
                    plugins: [
                        "transform-decorators-legacy",
                        "transform-class-properties",
                        "transform-es2015-classes",
                        "transform-regenerator"
                    ]
                }
            },
            {
                test: /\.css$/,
                include: PATHS.app,
                use: extractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/
                , loader: 'url-loader?limit=100000&name=[name].[ext]'
            },
            {
                test: /\.less$/, loader: 'style-loader!css-loader!less-loader'
            },
            // {
            //     test: /\.scss$/,
            //     include: PATHS.app,
            //     use: extractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            // },

            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            }
           

        ]
    },
    plugins: [

        new CleanWebpackPlugin(pathsToClean, cleanOptions),

        // new extractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            // template: 'src/index.html'
            template: 'public/index.html'
            // baseUrl: baseHref
        }),
        new CopyWebpackPlugin([
            { from: 'public/config', to: 'config' },
            { from: 'public/assets', to: 'assets' }
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/),
        new webpack.DefinePlugin({
            WP_BASE_HREF: JSON.stringify(baseHref),
            "require.specified": "require.resolve"
        })
    ]
};