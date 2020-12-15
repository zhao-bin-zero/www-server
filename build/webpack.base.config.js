const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'); // 提取css，提取多个来源时，需要实例化多个，并用extract方法
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // 用于压缩js文件

const isProd = process.env.NODE_ENV === 'production';
function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

const cssExtracter = new ExtractTextWebpackPlugin({
    filename: '[name]-css.[hash:7].css', // 直接导入的css文件，提取时添加-css标识
    allChunks: true, // 从所有的chunk中提取，当有CommonsChunkPlugin时，必须为true
});

const scssExtracter = new ExtractTextWebpackPlugin({
    filename: '[name]-scss.[hash:7].css', // 直接导入的sass文件，提取时添加-sass标识
    allChunks: true, // 从所有的chunk中提取，当有CommonsChunkPlugin时，必须为true
});

module.exports = {
    context: path.resolve(__dirname, '../'),
    devtool: isProd ? 'source-map' : '#cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].[chunkhash].js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.css', '.scss'],
        alias: {
            public: resolve('public'),
            '@': resolve('src'),
            '@node_modules': resolve('node_modules'),
            '@bootstrap-vue': resolve('node_modules/bootstrap-vue/esm'),
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false,
                    },
                    extractCSS: isProd,
                },
            },
            {
                test: /\.(woff|woff2?|eot|ttf|otf)(\?.*)?$/,
                // 导入字体文件，并最打包到output.path+ options.name对应的路径中
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'fonts/[name].[hash:7].[ext]',
                    fallback: 'file-loader',
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]',
                },
            },
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
    plugins: isProd
        ? [
              new VueLoaderPlugin(),
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
              }),
          ]
        : [new VueLoaderPlugin()],
};
