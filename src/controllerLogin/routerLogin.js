const express = require('express');
const routerLogin = express.Router();

const LoginConEmailPassAction= require("./LoginConEmailPassAction");


routerLogin.post('/login', LoginConEmailPassAction);


module.exports = routerLogin;
