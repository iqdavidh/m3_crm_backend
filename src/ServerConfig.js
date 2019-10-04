'use strict';



const ServerConfig = {
  tipoServer: "development" ,
  mongo: {
    urlServer: "mongodb://localhost:27017",
    user: "davidh",
    pass: "lalocal",
  },
  back: {
    port:3000,
    url: "http://localhost:3000"
  },
  jwtSecret:"unsaltsegurode16characters"
};


module.exports = ServerConfig;
