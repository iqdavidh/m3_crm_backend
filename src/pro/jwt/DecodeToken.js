const jsonwebtoken = require("jsonwebtoken");
const ServerConfig = require("../../ServerConfig");


const DecodeToken =  (token) => {

  return jsonwebtoken.verify(token,  ServerConfig.jwtSecret);
};


module.exports = DecodeToken;
