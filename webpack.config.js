/* eslint-disable no-unused-vars */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    // entry point of our app
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  mode: 'production',
  devServer: {
    // host: 'localhost',
    // port: 8080,
    // match the output path
    // publicPath: path.resolve(__dirname, '/'),
    publicPath: '/',
    // enable HMR on the devServer
    hot: true,
    // match the output 'publicPath'
    // publicPath: '/dist',
    // fallback to root for other urls
    historyApiFallback: true,

    inline: true,

    headers: { 'Access-Control-Allow-Origin': '*' },
    /**
     * proxy is required in order to make api calls to
     * express server while using hot-reload webpack server
     * routes api fetch requests from localhost:8080/api/* (webpack dev server)
     * to localhost:3000/api/* (where our Express server is running)
     */
    proxy: {
      '/api': 'http://localhost:3000',
      // '/api/**': {
      //   target: 'http://localhost:3000/',
      //   // pathRewrite: { '^/api': '' },
      // secure: false,
      // changeOrigin: true,
    },
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin({
      // Options...
    }),
  ],
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
};

// //htmlWebPackPlugin creates index.html file
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');

// module.exports = {
//   mode: 'development',
//   devtool: 'eval-source-map',
//   entry: ['./src/index.js'],
//   output: {
//     filename: 'bundle.js',
//     publicPath: '/',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   //   stats: {
//   //     children: true,
//   //   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//     }),
//   ],
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
//   module: {
//     rules: [
//       {
//         test: /.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//           },
//         },
//       },
//       {
//         // test: /.(css|scss)$/,
//         test: /\.s[ac]ss$/i,
//         exclude: /node_modules/,
//         //order of loaders matter
//         use: ['style-loader', 'css-loader', 'sass-loader'],
//       },
//     ],
//   },
//   devServer: {
//     host: 'localhost',
//     port: 8080,
//     contentBase: path.join(__dirname, 'dist'),
//     hot: true,
//     publicPath: './dist',
//     historyApiFallback: true,

//     inline: true,

//     headers: { 'Access-Control-Allow-Origin': '*' },
//     proxy: {
//       '/api/**': {
//         target: 'http://localhost:3000',
//         secure: false,
//       },
//     },
//   },
// };
