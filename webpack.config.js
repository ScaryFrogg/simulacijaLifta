const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "src/simulacijaLifta.js"),
  output: {
    filename: "simulacija_lifta.js",
    path: path.resolve(__dirname, "build"),
    library: "LS",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  mode: "development"
}