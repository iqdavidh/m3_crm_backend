const autMiddle = require("../middle/autMiddle");

const express = require('express');
const routerApi = express.Router();
const ApiRootAction = require("./ApiRootAction");
const ClienteIndexAction = require("./ClienteIndexAction");
const ClienteAllDataAction = require("./ClienteAllDataAction");
const ClienteUpdateAction = require("./ClienteUpdateAction");
const ClienteInsertAction = require("./ClienteInsertAction");
const SeguimientoInsertAction = require("./SeguimientoInsertAction");


routerApi.use(autMiddle);

routerApi.get('/', ApiRootAction);
routerApi.get('/cliente_index/:pagina', ClienteIndexAction);
routerApi.post('/cliente_update/:idCliente', ClienteUpdateAction);
routerApi.post('/cliente_insert', ClienteInsertAction);
routerApi.get('/cliente/:idCliente', ClienteAllDataAction);
routerApi.post('/seguimiento_insert', SeguimientoInsertAction);


module.exports = routerApi;
