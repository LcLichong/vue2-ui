const path = require('path')
const vantTheme = path.resolve(__dirname, "src/styles/theme.less")

module.exports = {
    productionSourceMap: process.env.NODE_ENV !== 'production',
    devServer: {
        open: true,
        // host: 'localhost',
        port: '3000',
        hotOnly: true
    },
    publicPath: './',
    css: {
        loaderOptions: {
            less: {
                // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
                lessOptions: {
                    modifyVars: {
                        // 或者可以通过 less 文件覆盖
                        hack: `true; @import "${vantTheme}";`,
                    }
                }
            }
        }
    },
    chainWebpack: config => {
        config.plugin('html').tap(options => {
            options[0].title = 'vue2-ui'
            return options
        })
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production'
            config["performance"] = { //打包文件大小配置
                "maxEntrypointSize": 10000000,
                "maxAssetSize": 30000000
            }
        }
    }
}