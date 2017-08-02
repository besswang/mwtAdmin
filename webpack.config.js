const path = require('path');
const webpack = require('webpack');

// 浏览器兼容
const autoprefixer = require('autoprefixer');

// 通过CSS模块，所有的类名，动画名默认都只作用于当前模块,在react中使用，这里暂时不用。
// const values = require('postcss-modules-values');

// 希望每次打包后index.html中的路径也会自动加上hash值，解决方法如下
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 引入css 单独打包插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 设置生成css 的路径和文件名，会自动将对应entry入口js文件中引入的CSS抽出成单独的文件
// const packCSS = new ExtractTextPlugin('assets/css/[name].[hash:5].css');
const packCSS = new ExtractTextPlugin('css/[name].css');

//打包第三方
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build'),
};
const glob = require('glob');
module.exports = {
    // devServer: {
    //     host: process.env.HOST, // Defaults to `localhost`
    //     port: 8080, // Defaults to 8080
    //     overlay: {
    //         errors: true,
    //         warnings: true,
    //     },
    // },
    // devtool: 'eval-source-map',
    //生产环境建议用detool:false;
    devtool: false,
    entry: {
        app:PATHS.app,
        vendor:['jquery']
        // "jquery":[__dirname+'plugins/jquery/jquery.min.js']
        // "bootcss":path( __dirname + "/src/plugins/bootstrap-3.3.7/dist/css/bootstrap.css"),
    },
    output: {
        path:PATHS.build,
        // filename:"assets/js/[name].[chunkHash:5].js",
        filename:"js/[name].js",
        // publicPath: "http://localhost:8080/dist/"
    },
    module: {//在配置文件里添加JSON loader
        rules: [
            {
                test: /bootstrap\/js\//,
                loader: 'imports-loader?jQuery=jquery'
            },
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                options: {
                    presets: ["es2015","react"]
                },
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test:/\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use: 'css-loader!postcss-loader'
                }),
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
                //limit参数，代表如果小于大约4k则会自动帮你压缩成base64编码的图片,否则拷贝文件到生产目录
                //name后面是打包后的路径；
                //loader 后面 limit 字段代表图片打包限制，这个限制并不是说超过了就不能打包，而是指当图片大小小于限制时会自动转成 base64 码引用
                //上例中大于8192字节的图片正常打包，小于8192字节的图片以 base64 的方式引用。
            }

        ]
    },
    plugins: [
        //单独打包css;
        packCSS,
        //打包第三方
        new CommonsChunkPlugin({
            names: ['vendor','manifest']//manifest:抽取变动部分，防止第三方控件的多次打包
            // filename:"chunk.js"//忽略则以name为输出文件的名字，否则以此为输出文件名字
        }),
        //复制index并打包到dist下
        new HtmlWebpackPlugin({
            title: '麦旺通后台管理',
            filename: "index.html",//复制后存储路径
            template: "./src/index.html", // 模板路径
            inject: "body",//引入模块的注入位置,取值true/false/body/head,默认是body
            favicon: "",//指定页面的图标
            minify: {
                removeComments:true,    //移除HTML中的注释
                caseSensitive: false,//是否大小写敏感
                collapseBooleanAttributes: true,//是否简写boolean格式的属性如：disabled="disabled" 简写为disabled
                collapseWhitespace: false//是否去除空格,开发环境可以先false，生产环境下改true;
            },
            hash:false,//是否生成hash添加在引入文件地址的末尾，类似于我们常用的时间戳
            cache:true,//是否需要缓存，如果填写true，则文件只有在改变时才会重新生成
            showErrors: true,//是否将错误信息写在页面里，默认true，出现错误信息则会包裹在一个pre标签内添加到页面上
            chunks: "",//引入的模块，这里指定的是entry中设置多个js时，在这里指定引入的js，如果不设置则默认全部引入
            chunksSortMode: "auto",//引入模块的排序方式
            excludeChunks: "",//排除的模块
            xhtml: false//生成的模板文档中标签是否自动关闭，针对xhtml的语法，会要求标签都关闭，默认false
        }),
    ]
}
