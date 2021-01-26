var BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    //向下面数组内加入使用了ECMAScript语法的npm依赖
    //因为默认babel不会转译node_modules文件夹下的文件，只有显式的写出需要转译的依赖，他们才会被转译，从而才能在ie下正常运行
    transpileDependencies: [],
    devServer: {
        open: true,
        port: 7003,
        proxy: {
            '/dev': {
                target: 'http://localhost:16008',
                changeOrigin: true,
                pathRewrite: {
                    '^/dev': ''
                }
            }
        }
    },
    // 在生产模式下禁用source map
    // https://stackoverflow.com/questions/51482940/how-can-i-disable-source-maps-in-production-for-a-vue-js-app
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            // https://stackoverflow.com/a/50260397
            // generate a bundle stats file on build, and use `npm run bundle-report` command to view the report
            new BundleAnalyzerPlugin({
                analyzerMode: 'disabled',
                generateStatsFile: process.env.VUE_APP_ENV === 'production',
                statsFilename: '../bundle-stats.json',
                statsOptions: { source: false }
            })
        ]
    }
}