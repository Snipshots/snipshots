const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    bundle: path.resolve(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[file].js', // the brackets allow it to be named anything, points to entry.bundle
    clean: true, // only compile bundle.js once
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html', //creates mirror files, this one is 1 line
      template: 'src/template.html',
    }),
  ],
  devServer: {
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    proxy: {
      "/": {
        target: "http://localhost:8080", // your back-end server address
        secure: false, // for self-signed certificates, you may need to set this to false
        changeOrigin: true, // necessary for the correct routing of requests
      },
  },
  
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // // Creates `style` nodes from JS strings
          'style-loader',
          // // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        //allows images to be loaded
        test: /\.(png|svg|jpg|jpeg|gif)/,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
    ],
  },
};
