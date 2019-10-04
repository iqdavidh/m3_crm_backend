'use strict';

const assert = require('assert');
const httpMocks = require('node-mocks-http');
const UsuarioUpdateAction = require("../../../src/controllerApi/UsuarioUpdateAction");
const DataTest = require("../DataTest");

describe('UsuarioUpdateAction ok', function () {

  this.timeout(5000);

  it("POST / obtener la lista", async function () {

    const request = httpMocks.createRequest({
      method: 'POST'
    });

    request.params.idUsuario = DataTest.id_usuario;
    request.idUsuario = DataTest.id_usuario; //<-- el usaurio de la session

    request.body = {
      nombre: "david.huerta",
      nick: 'dhs'
    };

    const response = httpMocks.createResponse();

    await UsuarioUpdateAction(request, response);

    assert(response._isJSON() === true, "No es json");

    const respuesta = response._getJSONData();

    assert(respuesta.success === true, "Se esperaba respuesta success");
    assert(respuesta.msg === "", "El menssaje no es el correcto");
    assert(200 === response.statusCode, "El estatus no es 200");




  });

});
