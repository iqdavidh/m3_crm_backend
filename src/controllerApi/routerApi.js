const autMiddle = require("../middle/autMiddle");

const express = require('express');
const routerApi = express.Router();
const ApiRootAction = require("./ApiRootAction");

routerApi.use(autMiddle);

routerApi.get('/', ApiRootAction);

module.exports = routerApi;
