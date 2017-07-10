var appSrc = './src'; // app source location
var webpack = require("webpack");
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.dev');
var compiler = webpack(config);
var port = 3000;

// config server
var server = new WebpackDevServer(compiler, {
  hot: true,
  contentBase: appSrc
});

// start server
server.listen(port, function(err){
  if (err) {
    return console.log(err)
  }
  console.log('Listening at http://localhost:' + port);
});