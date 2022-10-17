const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8001',
        changeOrigin: true,
        // 拼接一个路径
        pathRewrite: {
          '/api': '/api'
        }
      }
    }
  }
})
