// vue.config.js
// const path = require('path');
let objectProject = {
  index: {
    entry: "src/views/index/main.js", // page 的入口
    template: "public/index.html", // 模板来源
    filename: "index.html", // 在 dist/index.html 的输出
    title: "Index Page", // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    // 在这个页面中包含的块,默认情况下会包含,提取出来的通用 chunk 和 vendor chunk。
    chunks: ["chunk-vendors", "chunk-common", "index"]
  },
  ui: {
    entry: "src/views/ui/main.js",
    template: "public/ui.html",
    filename: "ui.html",
    chunks: ["chunk-vendors", "chunk-common", "ui"]
  },
  page1: {
    entry: "src/pages/page1/main.js",
    template: "public/page1.html",
    filename: "page1.html",
    chunks: ["chunk-vendors", "chunk-common", "page1"]
  },
  page2: {
    entry: "src/pages/page2/main.js",
    template: "public/page2.html",
    filename: "page2.html",
    chunks: ["chunk-vendors", "chunk-common", "page2"]
  }
};
let page = {};
let projectname = process.argv[3]; // 获取执行那个文件
if (process.env.NODE_ENV === "development" || process.env.VUE_APP_ENV === "production") {
  page = objectProject;
} else {
  page[projectname] = objectProject[projectname];
}

const vueConfig = {
  publicPath: "./", // 官方要求在此修改路径，默认是根目录下，可自行配置
  outputDir: process.env.VUE_APP_ENV === "production" ? "dist" : "dist" + projectname, // 标识是打包哪个文件
  pages: page,
  filenameHashing: true,
  productionSourceMap: false, // 生产环境 sourceMap
  devServer: {
    open: true, // 项目构建成功，自动弹出页面
    host: "localhost", // 主机名，也可以127.0.0.0 || 做真机测试时候0.0.0.0
    port: 8088, // 端口号，默认8080
    https: false, //协议
    hotOnly: false // 没啥效果，热模块，webpack已经做好了
  }
};

module.exports = vueConfig;
