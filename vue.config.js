const { defineConfig } = require("@vue/cli-service");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true, // 自动打开
    host: "localhost", // 默认打开时的ip
    proxy: {
      "/api": {
        target: "http://1.116.64.64:5004/api2",
        changeOrigin: true, //允许跨越
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
});
