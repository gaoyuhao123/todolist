const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {

    entry: './src/main.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    //打包规则
    module: {
        rules: [{
            test: /\.vue$/,   //正则表达式,匹配以vue结尾的文件
            loader: 'vue-loader'  //以vue结尾的文件使用vue-loader
        }, {
            test: /\.(jpg|jpeg|png|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                // limit: 8192
            },
        }, {
            test: /\.(css)$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']//从右到左执行,cssloader将css文件打包，styleloader将样式挂载到主页面中
        },
        //{
        //     //从这一段上面是默认的！不用改！下面是没有的需要你手动添加，相当于是编译识别sass! 
        //     test: /\.scss$/,
        //     use: [
        //         'vue-style-loader',
        //         'css-loader',
        //         'sass-loader'
        //     ]
        // }, 
        {
            test: /\.styl(us)?$/,
            use: [
                'style-loader',
                'css-loader',
                'stylus-loader'
            ]
        }]
    },
    plugins: [
        new VueLoaderPlugin(),//为什么有的插件要const还要new:自执行插件
        new HtmlWebpackPlugin({
            title: 'VueComponent',
            filename: 'index.html',
            template: './index.html'
        }),
        new CleanWebpackPlugin()

    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': path.resolve(__dirname, '../src'),
            'styles': path.resolve(__dirname, '../src/assets/styles'),//用~引入，~styles/。。。
            'images': path.resolve(__dirname, '../src/assets/images')
        }
    }
}