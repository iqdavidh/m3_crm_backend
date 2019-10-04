'use strict';

const assert = require('assert');
const httpMocks = require('node-mocks-http');
const ClienteIndexAction = require("../../../src/controllerApi/ClienteIndexAction");
const DataTest = require("../DataTest");

describe('ClienteIndex ok', function () {

  this.timeout(5000);

  it("GET / obtener la lista", async function () {

    const request = httpMocks.createRequest({
      method: 'GET'
    });

    request.idUsuario=DataTest.id_usuario;
    request.pagina=1;

    const response = httpMocks.createResponse();

    await ClienteIndexAction(request, response);

    assert(response._isJSON() === true, "No es json");

    const respuesta = response._getJSONData();

    assert( respuesta.success === true, "Se esperaba respuesta success");
    assert( respuesta.msg === "", "El menssaje no es el correcto");
    assert(200 === response.statusCode, "El estatus no es 200");

    assert(respuesta.data.total>0, "Falta el total");
    assert(respuesta.data.numTotalPaginas>0, "Falta el numTotalPaginas");
    assert(respuesta.data.clientes.length, "Falta el clientes");



  });

});
