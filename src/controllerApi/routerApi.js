const express = require('express');
const routerApi = express.Router();
const ApiRootAction = require("./ApiRootAction");

routerApi.get('/', ApiRootAction);

module.exports = routerApi;
