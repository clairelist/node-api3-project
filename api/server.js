const express = require('express');
const server = express();
// const cors = require('cors');
// const hubsRouter = require('patth');

//server.use(cors());
server.use(express.json());
// global middlewares and the user's router need to be connected here
//server.use('/api/hubs', hubsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use('*', (req, res) => {
  // catch all 404 errors middleware
  res.status(404).json({ message: `${req.method} ${req.baseUrl} not found!` });
});

//specified error message not caught by above OR any other catcher !
server.use((err, req, res, next) => { // eslint-disable-line
  console.log('disaster!')
  res.status(err.status || 500).json({
    message: `The Horror: ${err.message}`,
  });
});

module.exports = server;
