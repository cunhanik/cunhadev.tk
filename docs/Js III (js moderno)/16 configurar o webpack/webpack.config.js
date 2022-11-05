const path = require("path");

module.exports = {
  entry: {
    date: "./src/index.js",
    hello: "./src/helloWorld.js",
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name]bundle.min.js",
  },
};
