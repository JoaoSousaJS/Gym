const express = require('express');

const routes = require('./routes/routes');

const server = express();
server.use(routes);

server.listen(5000, function () {
  console.log('server is running');
});
