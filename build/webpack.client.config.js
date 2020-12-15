const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'); // 提取css，提取多个来源时，需要实例化多个，并用extract方法
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // 用于压缩js文件

// const CompressionPlugin = require('compression-webpack-plugin');
// const WebpackBar = require('webpackbar');

const isProd = process.env.NODE_ENV === 'production';

const plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'process.env.VUE_ENV': '"client"',
    }),
    new VueSSRClientPlugin(),
];


const cssExtracter = new ExtractTextWebpackPlugin({
  filename: '[name]-css.[hash:7].css', // 直接导入的css文件，提取时添加-css标识
  allChunks: true, // 从所有的chunk中提取，当有CommonsChunkPlugin时，必须为true
});

const scssExtracter = new ExtractTextWebpackPlugin({
  filename: '[name]-scss.[hash:7].css', // 直接导入的sass文件，提取时添加-sass标识
  allChunks: true, // 从所有的chunk中提取，当有CommonsChunkPlugin时，必须为true
});
if (isProd) {
    plugins.push(
        cssExtracter,
        scssExtracter,
        // 确保添加了此插件！

        // 压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            canPrint: true,
        }),

        new UglifyJSPlugin({
            // 压缩JS
            sourceMap: true,
            parallel: true, // 使用多进程并行运行和文件缓存来提高构建速度
            uglifyOptions: {
                compress: {
                    warnings: false, // 在删除不可用代码或未使用的声明等时显示警告
                },
            },
        })
        //         // 开启 gzip 压缩 https://github.com/woai3c/node-blog/blob/master/doc/optimize.md
        //         new CompressionPlugin(),
        //         // 该插件会根据模块的相对路径生成一个四位数的hash作为模块id, 用于生产环境。
        //         new webpack.HashedModuleIdsPlugin(),
        //         new WebpackBar(),
    );
}

const config = {
    mode: 'development',
    entry: {
        app: './src/entry-client.js',
    },
    resolve: {},
    optimization: {
        runtimeChunk: {
            name: 'manifest',
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'chunk-vendors',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'initial',
                },
                common: {
                    name: 'chunk-common',
                    minChunks: 2,
                    priority: -20,
                    chunks: 'initial',
                    reuseExistingChunk: true,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: isProd
                    ? cssExtracter.extract({
                          use: 'css-loader',
                          fallback: 'vue-style-loader',
                      })
                    : ['vue-style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: isProd
                    ? scssExtracter.extract({
                          use: ['css-loader', 'sass-loader'],
                          fallback: 'vue-style-loader',
                      })
                    : ['vue-style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins,
};

module.exports = merge(base, config);
