'use strict';



const ServerConfig = {
  tipoServer: "atlas" ,
  mongo: {
    urlServer: "cursomu-g9wsf.mongodb.net/crm",
    user: "iron",
    pass: "d4v1dhu3rt4",
    url:'mongodb+srv://iron:d4v1dhu3rt4@cursomu-g9wsf.mongodb.net/crm?retryWrites=true&w=majority'
  },
  back: {
    port:3004,
    url: "http://54.201.211.232:3004"
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
