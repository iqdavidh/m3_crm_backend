'use strict';
require('dotenv').config();


const ServerConfig = {
  tipoServer: process.env.NODE_ENV ,
  mongo: {
    urlServer: process.env.MONGO_URL_ROOT_CX,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
  },
  back: {
    port: process.env.BACK_PORT,
    url: process.env.URL_BACK
  },
  jwtSecret:process.env.JWT_SECRET
};


module.exports = ServerConfig;
