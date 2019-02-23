module.exports = {
  baseUrl: "/",
  outputDir: "dist",
  lintOnSave: true,
  devServer: {
    port: 8082,
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
      },
      "/QQMusicAPI/*": {
        target: "https://c.y.qq.com",
        changeOrigin: true,
        pathRewrite: {
          "/QQMusicAPI/": "/"
        }
      },
      "/QQMusicLrc/*": {
        target: "https://api.darlin.me",
        changeOrigin: true,
        pathRewrite: {
          "/QQMusicLrc/": "/"
        }
      }
    }
  }
};
