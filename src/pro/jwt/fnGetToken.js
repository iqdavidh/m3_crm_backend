const jsonwebtoken = require("jsonwebtoken");
const ServerConfig = require("../../ServerConfig");
const fnGetToken = async (dataToken) => {

  const promise = new Promise(function (resolve, reject) {

    jsonwebtoken.sign(
        {data: dataToken},
        ServerConfig.jwtSecret,
        {expiresIn: '8h'}, (err, token) => {

          if (err) {
            reject(err);
          } else {
            resolve(token);
          }

        })
    ;

  });

  promise
      .then(token => {
        return token;
      })
  ;
  return promise;
};


module.exports = fnGetToken;
