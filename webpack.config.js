const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 웹팩은 ./src/index로부터 파일들을 가져올 것이다.
  entry: "./src/index",
  // rmflrh /dist에 bundle.js로 결과물을 내보낼것이다.
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  // resolve의 확장 기능은 .ts와 .tsx 를 바벨이 컴파일하기 위해 찾는 것을 도와줄것이다.
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // 우리는 JSX와 tsx 파일들을 로드 하기 위해 babel-loader 사용한다.
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // 우리의 css 파일들을 번들링 해서 하나의 파일로 만든 뒤 문서의 style 태그의 넣어주기 위해 style-loader를 사용한다.
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
