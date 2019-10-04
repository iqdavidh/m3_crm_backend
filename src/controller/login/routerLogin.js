const express = require('express');
const routerLogin = express.Router();
const LoginEmailPassAction = require("./LoginEmailPassAction");
const RegistrarseAction = require("./RegistrarseAction");

routerLogin.post('/login', LoginEmailPassAction);
routerLogin.post('/registrarse', RegistrarseAction);

module.exports = routerLogin;
