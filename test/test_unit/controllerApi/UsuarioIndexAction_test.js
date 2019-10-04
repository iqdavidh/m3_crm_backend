'use strict';

const assert = require('assert');
const httpMocks = require('node-mocks-http');
const UsuarioIndexAction = require("../../../src/controllerApi/UsuarioIndexAction");
const DataTest = require("../DataTest");

describe('ClienteIndex ok', function () {

  this.timeout(5000);

  it("GET / obtener la lista", async function () {

    const request = httpMocks.createRequest({
      method: 'GET'
    });

    request.usuario={
      is_admin:true
    };


    const response = httpMocks.createResponse();

    await UsuarioIndexAction(request, response);

    assert(response._isJSON() === true, "No es json");

    const respuesta = response._getJSONData();

    assert( respuesta.success === true, "Se esperaba respuesta success");
    assert( respuesta.msg === "", "El menssaje no es el correcto");
    assert(200 === response.statusCode, "El estatus no es 200");

    assert(respuesta.data.lista.length>0, "Falta el total");

  });

});
