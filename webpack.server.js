const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server/index.js",
  target: "node",
  externals: [nodeExternals()],

  output: {
    path: path.resolve("server-build"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css|\.scss$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
