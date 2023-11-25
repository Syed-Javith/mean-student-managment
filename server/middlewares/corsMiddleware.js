const cors = require('cors');

const corsOptions = {
  allowedHeaders : [ 'Content-type' , 'Authorization' ],
  origin: ['http://localhost:4200'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
