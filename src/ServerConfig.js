'use strict';



const ServerConfig = {
  tipoServer: "aws" ,
  mongo: {
    urlServer: "mongodb://localhost:27017",
    user: "iron",
    pass: "iron",
  },
  back: {
    port:3004,
    url: "http://52.37.165.46:3004"
  },
  jwtSecret:"unsaltsegurode16characters"
};


//
// const ServerConfig = {
//   tipoServer: "development" ,
//   mongo: {
//     urlServer: "mongodb://localhost:27017",
//     user: "davidh",
//     pass: "lalocal",
//   },
//   back: {
//     port:3004,
//     url: "http://localhost:3004"
//   },
//   jwtSecret:"unsaltsegurode16characters"
// };


module.exports = ServerConfig;
