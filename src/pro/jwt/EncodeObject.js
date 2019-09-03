const jsonwebtoken = require("jsonwebtoken");
const ServerConfig = require("../../ServerConfig");



const EncodeObject = (dataToken) => {


  return jsonwebtoken.sign(
      {data: dataToken},
      ServerConfig.jwtSecret,
      {expiresIn: '8h'})
      ;

};

module.exports = EncodeObject;
