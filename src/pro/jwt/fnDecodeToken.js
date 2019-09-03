const jsonwebtoken = require("jsonwebtoken");
const ServerConfig = require("../../ServerConfig");


const fnDecodeToken = async (token) => {


  const promise = new Promise(function (resolve, reject) {

    jsonwebtoken.verify(token, ServerConfig.jwtSecret, function (err, decoded) {

      if (err) {
        reject(err);
      } else {
        resolve(decoded.data);
      }

    });


  });


  promise
      .then(token => {
        return token;
      })
  ;
  return promise;
};


module.exports = fnDecodeToken;
