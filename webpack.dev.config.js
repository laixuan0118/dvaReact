
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

console.log('ffffffff')
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    // new WebpackManifestPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html', // 最终创建的文件名
      template: path.resolve('./src/index.html'), // 指定模板路径
      inject: 'body',
    }),
    // new CaseSensitivePathsPlugin(),
  ],
  resolve: {
    extensions: [".jsx", ".js"], //
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, './src'),
          // path.resolve(__dirname, '../../node_modules/@react-spring'),
          // path.resolve(__dirname, '../../node_modules/@floating-ui'),
        ],
        // exclude: /(node_modules)/,

        use: {
          loader: 'babel-loader',
        },
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     root: path.resolve('./'),
        //     cacheDirectory: true,
        //   },
        // },
      },
      {
        test: /\.(css|less)$/,
        use: [
          "style-loader",
          // devMode ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]",
              },
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                // modifyVars: {
                //   'primary-color': 'green',
                //   'menu-item-active-bg': 'green',
                // },
                javascriptEnabled: true,
              },
            },
          },
          //{
          //   loader: "px2rem-loader",
          //   options: {
          //     importLoaders: 1,
          //     remUnit: 37.5,
          //     min: 2,
          //   },
          // },
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       ident: "postcss",
          //       plugins: [
          //         [
          //           "postcss-preset-env",
          //           {
          //             autoprefixer: {
          //               // browsers: [
          //               //   '>1%',
          //               //   'last 4 versions',
          //               //   'Firefox ESR',
          //               //   'not ie < 9',
          //               // ],
          //               flexbox: "no-2009",
          //             },
          //             stage: 3,
          //           },
          //         ],
          //         postcssNormalize(),
          //       ],
          //     },
          //     sourceMap: false,
          //   },
          // },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            // undefined 使用外层的的output.publishPath
            // publicPath: './release/assets/images/',
            // outputPath: 'assets/images/',
            esModule: false,
          },
        }],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    
    ]
  }
};
// module.exports = {};