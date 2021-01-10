const { SourceMapDevToolPlugin } = require("webpack");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const config = {
  entry: {
    main: resolve(__dirname, "./src/index.tsx"),
  },
  mode: "development",
  devtool: false,
  devServer: {
    historyApiFallback: true,
    contentBase: resolve(__dirname, "./public"),
    open: true,
    compress: true,
    hot: true,
    port: 1337,
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              limit: 10000,
              mimetype: "application/font-woff",
            },
          },
        ],
      },
    ],
  },
  output: {
    path: resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new SourceMapDevToolPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve(__dirname, "public", "index.html"),
    }),
  ],
};

module.exports = config;
