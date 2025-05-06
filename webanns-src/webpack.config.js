// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: "production",
  devtool: false,
  entry: {
    webanns_core: "./src/webanns_core.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
      assetModuleFilename: '[name][ext]',
    library: {
      name: "GWRAG",
      type: "umd",
      umdNamedDefine: true,
    },
  },
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 8005,
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
    historyApiFallback: {
      rewrites: [{ from: /./, to: "/eval.html" }],
    },
    watchFiles: {
      paths: ["src/**/*"],
      options: {
        ignored: /node_modules/,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
  optimization: {
    minimize: false,
  },
  performance: {
    hints: false,
  },
};

module.exports = config;
