const jsonwebtoken = require("jsonwebtoken");
const ServerConfig = require("../../ServerConfig");


const DecodeToken = (token) => {

  const data = jsonwebtoken.verify(token, ServerConfig.jwtSecret);

  return data.data
};


module.exports = DecodeToken;
