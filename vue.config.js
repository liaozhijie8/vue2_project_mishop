const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_PROXYURL,
        changeOrigin: true
        // 拼接一个路径
        // pathRewrite: {
        //   '/api': '/api'
        // }
      }
    }
  }
})
