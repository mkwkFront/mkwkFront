module.exports = {
  outputDir: "../src/main/resources/static", 
  devServer: {
      port: 8080,
      proxy: {
          '/api': {
              target: 'http://localhost:8090',
              changeOrigin: true
          }
      }
  },
    chainWebpack: config => {  
    const svgRule = config.module.rule("svg");    
    svgRule.uses.clear();    
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");  
  }  
};
