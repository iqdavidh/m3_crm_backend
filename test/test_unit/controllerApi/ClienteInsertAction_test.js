'use strict';

const assert = require('assert');
const httpMocks = require('node-mocks-http');
const ClienteInsertAction = require("../../../src/controllerApi/ClienteInsertAction");
const DataTest = require("../DataTest");

describe('ClienteInsertAction ok', function () {

  this.timeout(5000);

  it("GET / obtener la lista", async function () {

    const request = httpMocks.createRequest({
      method: 'POST'
    });

    request.idUsuario = DataTest.id_usuario;
    request.params.idCliente = DataTest.id_cliente;
    request.body = {
      origen: "hombrex-x",
      nombre:"xx",
      apaterno:"",
      tel: 'consumidor'
    };

    const respuestaHTTP = httpMocks.createResponse();

    await ClienteInsertAction(request, respuestaHTTP);

    assert(respuestaHTTP._isJSON() === true, "No es json");

    const respuesta = respuestaHTTP._getJSONData();

    assert(respuesta.success === true, "Se esperaba respuesta success");
    assert(respuesta.msg === "", "El menssaje no es el correcto");
    assert(200 === respuestaHTTP.statusCode, "El estatus no es 200");

    assert(typeof respuesta.data.id_cliente ==="string", "Falta el campo id_cliente");


  });

});
