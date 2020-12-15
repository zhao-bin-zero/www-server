const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

const CompressionPlugin = require('compression-webpack-plugin');
const WebpackBar = require('webpackbar');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'); // 提取css，提取多个来源时，需要实例化多个，并用extract方法

// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)

// const cssExtracter = new ExtractTextWebpackPlugin({
//     filename: '[name][id]-css.[hash:7].css', // 直接导入的css文件，提取时添加-css标识
//     allChunks: true, // 从所有的chunk中提取，当有CommonsChunkPlugin时，必须为true
// });

// const scssExtracter = new ExtractTextWebpackPlugin({
//     filename: '[name][id]-scss.[hash:7].css', // 直接导入的sass文件，提取时添加-sass标识
//     allChunks: true, // 从所有的chunk中提取，当有CommonsChunkPlugin时，必须为true
// });
const isProd = process.env.NODE_ENV === 'production';

const plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'process.env.VUE_ENV': '"client"',
    }),

    // extract vendor chunks for better caching
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: function (module) {
    //     // a module is extracted into the vendor chunk if...
    //     return (
    //       // it's inside node_modules
    //       /node_modules/.test(module.context) &&
    //       // and not a CSS file (due to extract-text-webpack-plugin limitation)
    //       !/\.css$/.test(module.request)
    //     )
    //   }
    // }),
    // extract webpack runtime & manifest to avoid vendor chunk hash changing
    // on every build.
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest'
    // }),
    new VueSSRClientPlugin(),
    // new MiniCssExtractPlugin({
    //     filename: 'style.css',
    // }),

    // cssExtracter,
    // scssExtracter,
    // 压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
    // new OptimizeCssAssetsPlugin({
    //   assetNameRegExp: /\.css$/g,
    //   cssProcessor: require('cssnano'),
    //   canPrint: true
    // }),
];

if (isProd) {
    plugins.push(
        // 开启 gzip 压缩 https://github.com/woai3c/node-blog/blob/master/doc/optimize.md
        new CompressionPlugin(),
        // 该插件会根据模块的相对路径生成一个四位数的hash作为模块id, 用于生产环境。
        new webpack.HashedModuleIdsPlugin(),
        new WebpackBar(),
    );
}

// const cssHandle = [{ loader: 'css-loader', options: { sourceMap: true } }, { loader: 'postcss-loader', options: { sourceMap: true } }];

const config = {
    mode: 'development',
    entry: {
        app: './src/entry-client.js',
    },
    resolve: {},
    // optimization: {
    //     runtimeChunk: {
    //         name: 'manifest',
    //     },
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 name: 'chunk-vendors',
    //                 test: /[\\/]node_modules[\\/]/,
    //                 priority: -10,
    //                 chunks: 'initial',
    //             },
    //             common: {
    //                 name: 'chunk-common',
    //                 minChunks: 2,
    //                 priority: -20,
    //                 chunks: 'initial',
    //                 reuseExistingChunk: true,
    //             },
    //         },
    //     },
    // },
    module: {
        rules: [
            // {
            //     test: /\.scss$/,
            //     use: ['vue-style-loader', 'css-loader', 'sass-loader'],
            // },
            // {
            //     test: /\.css$/,
            //     use: ['vue-style-loader', 'css-loader'],
            // },
            // {
            //     test: /\.scss$/,
            //     use: scssExtracter.extract({
            //         fallback: 'style-loader',
            //         use: [...cssHandle, { loader: 'sass-loader', options: { sourceMap: true } }],
            //     }),
                // use: [
                //     {
                //         loader: MiniCssExtractPlugin.loader,
                //         options: {
                //             // 解决 export 'default' (imported as 'mod') was not found
                //             // 启用 CommonJS 语法
                //             esModule: false,
                //         },
                //     },
                //     ...cssHandle,
                //     { loader: 'sass-loader', options: { sourceMap: true } },
                // ],
            // },
                // use: [
                //     {
                //         loader: MiniCssExtractPlugin.loader,
                //         options: {
                //             // 解决 export 'default' (imported as 'mod') was not found
                //             // 启用 CommonJS 语法
                //             esModule: false,
                //         },
                //     },
                //     'css-loader',
                // ],
            // },
        ],
    },
    plugins,
};

if (isProd) {
    // 压缩 css
    // config.optimization.minimizer = [new CssMinimizerPlugin()];
}

module.exports = merge(base, config);
