const DecodeToken=require('../pro/jwt/DecodeToken');

const BuilderJsonResponse = require("../lib/BuilderJsonResponse");

const autMiddle = (req, res, next) => {

  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

  if (!token) {
    return BuilderJsonResponse.Error(res,"Acceso no autorizado, se requiere ingresar al sistema en login", 401)
  }


  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }


  try {

    /*Datos del token  _id, nombre,  roles* */
    req.usuario = DecodeToken(token);
    next();

  } catch (e) {

    return BuilderJsonResponse.Error(res,"Token inválido, se requiere ingresar al sistema nuevamente", 401)

  }


};

module.exports = autMiddle;
