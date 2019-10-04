const autMiddle = require("../middle/autMiddle");

const express = require('express');
const routerApi = express.Router();
const ApiRootAction = require("./ApiRootAction");
const ClienteIndexAction = require("./ClienteIndexAction");
const ClienteAllDataAction = require("./ClienteAllDataAction");
const ClienteUpdateAction = require("./ClienteUpdateAction");


routerApi.use(autMiddle);

routerApi.get('/', ApiRootAction);
routerApi.get('/cliente_index/:pagina', ClienteIndexAction);
routerApi.post('/cliente_update/:idCliente', ClienteUpdateAction);
routerApi.get('/cliente/:idCliente', ClienteAllDataAction);


module.exports = routerApi;
