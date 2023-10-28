const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  // publicPath: '/mkWalk',
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/wk': {
        // 백앤드 주소 작성
        target: 'http://localhost:18080',
        // target: 'http://192.168.11.159:18080',
        // target: 'http://192.168.35.242:18080',
        // target: 'http://192.168.0.138:18080',
        target: 'http://172.30.1.2:18080',

        changeOrigin: true,
        secure: false,
        // wk로 시작하는 거에 대해서 wk지우고
        pathRewrite: { '^/wk': '/wk' },
        logLevel: 'debug',
      },
    },
  },
});
