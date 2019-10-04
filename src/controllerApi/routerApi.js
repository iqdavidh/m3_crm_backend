const autMiddle = require("../middle/autMiddle");

const express = require('express');
const routerApi = express.Router();
const ApiRootAction = require("./ApiRootAction");
const ClienteIndexAction = require("./ClienteIndexAction");


routerApi.use(autMiddle);

routerApi.get('/', ApiRootAction);
routerApi.get('/cliente_index/:pagina', ClienteIndexAction);


module.exports = routerApi;
