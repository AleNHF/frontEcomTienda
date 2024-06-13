module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://18.218.15.90:8080", // URL HTTP de tu backend
        changeOrigin: true,
        pathRewrite: { "^/": "" },
        secure: false,
      },
    },
  },
};
