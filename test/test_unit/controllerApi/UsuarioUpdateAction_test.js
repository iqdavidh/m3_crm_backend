'use strict';

const assert = require('assert');
const httpMocks = require('node-mocks-http');
const UsuarioUpdateAction = require("../../../src/controllerApi/UsuarioUpdateAction");
const DataTest = require("../DataTest");

describe('UsuarioUpdateAction ok', function () {

  this.timeout(5000);

  it("POST / OK", async function () {

    const request = httpMocks.createRequest({
      method: 'POST'
    });

    request.params.idUsuarioActualizado = DataTest.id_usuario_secundario;
    request.idUsuario = DataTest.id_usuario; //<-- el usaurio de la session

    request.body = {
      nombre: "xxxx",
      nick: 'zzzz'
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
