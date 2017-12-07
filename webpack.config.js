module.exports = {
  entry: './src/index.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  
  module: {
    loaders: [{       
      exclude: /node_modules/, 
      loader: "babel-loader"         
    }]
  }
  
};
