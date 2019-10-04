'use strict';

const assert = require('assert');
const httpMocks = require('node-mocks-http');
const UsuarioInsertAction = require("../../../src/controllerApi/UsuarioInsertAction");
const DataTest = require("../DataTest");

describe('UsuarioInsertAction ok', function () {

  this.timeout(5000);

  it("POST / obtener la lista", async function () {

    const request = httpMocks.createRequest({
      method: 'POST'
    });

    request.params.idUsuarioActualizado = DataTest.id_usuario;

    request.idUsuario = DataTest.id_usuario; //<-- el usaurio de la session
    request.usuario={
      is_admin:true
    };

    request.body = {
      nombre: "bart",
      nick: 'bs',
      email:'m'+ Math.ceil( Math.random()*1000) + "@crm.productividadti.com.mx",
      password:"laotra",
      is_admin:true,
      is_activo:true
    };

    const response = httpMocks.createResponse();

    await UsuarioInsertAction(request, response);

    assert(response._isJSON() === true, "No es json");

    const respuesta = response._getJSONData();

    assert(respuesta.success === true, "Se esperaba respuesta success");
    assert(respuesta.msg === "", "El menssaje no es el correcto");
    assert(200 === response.statusCode, "El estatus no es 200");




  });

});
