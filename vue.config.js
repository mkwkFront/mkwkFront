const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  publicPath: '/mkWalk',
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/wk': {
        // 백앤드 주소 작성
        target: 'http://192.168.0.129:18080',
        changeOrigin: true,
        secure: false,
        // wk로 시작하는 거에 대해서 wk지우고 
        pathRewrite: { '^/wk': '/wk' },
        logLevel: 'debug',
      },
    },
  },
});
