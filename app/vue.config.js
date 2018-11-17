module.exports = {
  baseUrl: "/",
  outputDir: "dist",
  lintOnSave: true,
  devServer: {
    port: 8080,
    proxy: {
      "/weatherAPI/*": {
        target: "https://api.seniverse.com",
        changeOrigin: true,
        pathRewrite: {
          "/weatherAPI/": "/"
        }
      },
      "/BingAPI/*": {
        target: "https://cn.bing.com",
        changeOrigin: true,
        pathRewrite: {
          "/BingAPI/": "/"
        }
      },
      "/cityAPI/*": {
        target: "https://pv.sohu.com",
        changeOrigin: true,
        pathRewrite: {
          "/cityAPI/": "/"
        }
      }
    }
  }
};
