// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {CleanWebpackPlugin}= require('clean-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname,'src'),
    mode: 'development',
    entry: './index.ts',
    output: {
        filename: '[name].[fullhash].js',
        path: path.resolve(__dirname, 'dist'),
        clean:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),        new HtmlWebpackPlugin({
            filename: 'blog.html',
            template: 'blog.html'
        }),
        new CleanWebpackPlugin(),
        new ESLintPlugin({fix:true}),
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader:  'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/',
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};