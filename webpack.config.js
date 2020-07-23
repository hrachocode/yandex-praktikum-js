const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
      entry: { main: './src/pages/index.js' },
      output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js'
      },
      mode: 'development', // Можно в реальных проектах брать из process.env глобальных переменных, для конкретной настройки, https://webpack.js.org/configuration/mode/
      module: {
            rules: [
                  {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: '/node_modules/'
                  },
                  {
                        test: /\.css$/,
                        loader: [
                              MiniCssExtractPlugin.loader,
                              {
                                    loader: 'css-loader',
                                    options: { importLoaders: 1 }
                              },
                              'postcss-loader'
                        ]
                  },
                  {
                        test: /\.(png|svg|jpg|gif|woff2)$/,
                        loader: 'file-loader'
                  },
                  {
                        test: /\.html$/,
                        loader: 'html-loader',
                  },
            ]
      },
      plugins: [
            new HtmlWebpackPlugin({
                  template: 'src/index.html' // путь к файлу index.html
            }),
            new MiniCssExtractPlugin()
      ]
};