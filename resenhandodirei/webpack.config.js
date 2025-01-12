const path = require('path');

module.exports = {
  entry: './App.tsx',  // Seu arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  // O nome do arquivo de saída
  },
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png)$/,  // Regex para imagens JPG, JPEG, PNG
        type: 'asset/resource',  // Usando 'asset/resource' em vez de 'file-loader'
        generator: {
          filename: 'images/[name][hash][ext]',  // Pasta de saída e nome do arquivo
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],  // Extensões para resolução
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8081,  // Porta para o servidor de desenvolvimento
  },
};
