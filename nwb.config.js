let webpack = {};

// -- webpack all config ---------------------------------------------------- //
webpack = {
  html: {
    template: "docs/index.html"
  }
};

// -- webpack production config --------------------------------------------- //
if (process.env.NODE_ENV === "production") {
  webpack = Object.assign({}, webpack, {
    rules: {
      graphics: false,
      jpeg: false,
      svg: false
    },
    extra: {
      module: {
        rules: [
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            loaders: ["url-loader"]
          }
        ]
      }
    }
  });
}

module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: false
  },
  webpack
};
