const express = require('express');
const routerLogin = express.Router();
const actionApiLog = require("./ApiLoginEmailPass");

routerLogin.post('/login', actionApiLog);

module.exports = routerLogin;
