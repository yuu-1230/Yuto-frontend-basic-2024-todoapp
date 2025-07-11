const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.jsx",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "docs"), // ← docsに出力
      publicPath: isProduction ? "/Yuto-frontend-basic-2024-todoapp/" : "/", // ← 環境に応じて変更
      clean: true, // 毎回クリア
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"], // ←修正：react preset名
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.svg$/,
          use: ["url-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html", // ← srcでなくpublic
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, "public"),
      port: 8080,
      open: true,
    },
    target: ["web", "es5"],
  };
};
