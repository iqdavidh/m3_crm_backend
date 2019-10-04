'use strict';

const assert = require('assert');
const httpMocks = require('node-mocks-http');
const ClienteAllDataAction = require("../../../src/controllerApi/ClienteAllDataAction");
const DataTest = require("../DataTest");

describe('ClienteAllDataAction ok', function () {

  this.timeout(5000);

  it("GET / obtener todos los datos del cliente", async function () {

    const request = httpMocks.createRequest({
      method: 'GET'
    });

    request.idUsuario = DataTest.id_usuario;
    request.params.idCliente = DataTest.id_cliente;


    const respuestaHTTP = httpMocks.createResponse();

    await ClienteAllDataAction(request, respuestaHTTP);

    assert(respuestaHTTP._isJSON() === true, "No es json");

    const respuesta = respuestaHTTP._getJSONData();

    assert(respuesta.success === true, "Se esperaba respuesta success");
    assert(respuesta.msg === "", "El mensaje no es el correcto");
    assert(200 === respuestaHTTP.statusCode, "El estatus no es 200");

    let data=respuesta.data;




  });

});
