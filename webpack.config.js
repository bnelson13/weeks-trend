const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/client/views/art.html',
            filename: './art.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/client/views/articles.html',
            filename: './articles.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/client/views/books.html',
            filename: './books.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/client/views/classes.html',
            filename: './classes.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/client/views/contact-us.html',
            filename: './contact-us.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/client/views/funny.html',
            filename: './funny.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/client/views/gadgets.html',
            filename: './gadgets.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/client/views/lists.html',
            filename: './lists.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/client/views/movies.html',
            filename: './movies.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/client/views/pictures.html',
            filename: './pictures.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/client/views/podcasts.html',
            filename: './podcasts.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/client/views/recipes.html',
            filename: './recipes.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/client/views/songs.html',
            filename: './songs.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/client/views/trivia.html',
            filename: './trivia.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/client/views/tweets.html',
            filename: './tweets.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/client/views/websites.html',
            filename: './websites.html',
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}