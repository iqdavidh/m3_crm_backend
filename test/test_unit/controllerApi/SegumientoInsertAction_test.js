'use strict';

const assert = require('assert');
const httpMocks = require('node-mocks-http');
const SeguimientoInsertAction = require("../../../src/controllerApi/SeguimientoInsertAction");
const DataTest = require("../DataTest");

describe('SeguimientoInsertAction ok', function () {

  this.timeout(5000);

  it("GET / obtener la lista", async function () {

    const request = httpMocks.createRequest({
      method: 'POST'
    });

    request.idUsuario = DataTest.id_usuario;
    request.usuario={
      nick:'dave'
    };

    request.body = {
      id_tipo: 1,
      tipo: 'presencial',
      subtipo: 'Visita a Dom/Oficinas - Sin éxito',
      contactado: false,
      comentario: 'random comentario ',
      id_cliente: DataTest.id_cliente
    };

    const respuestaHTTP = httpMocks.createResponse();

    await SeguimientoInsertAction(request, respuestaHTTP);

    assert(respuestaHTTP._isJSON() === true, "No es json");

    const respuesta = respuestaHTTP._getJSONData();

    assert(respuesta.success === true, "Se esperaba respuesta success");
    assert(respuesta.msg === "", "El menssaje no es el correcto");
    assert(200 === respuestaHTTP.statusCode, "El estatus no es 200");

    assert(typeof respuesta.data.id ==="string", "Falta el campo id");


  });

});
