const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', 
  entry: {
    main: './api/new_js.js', 
  },
  output: {
    filename: 'public.js', 
    path: path.resolve(__dirname, 'public'), 
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './api/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './api/sendemail.php', to: 'sendemail.php' } 
      ],
    }),
  ],
};
