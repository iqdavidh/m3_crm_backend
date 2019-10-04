'use strict';

const assert = require('assert');
const httpMocks = require('node-mocks-http');
const registrarseAction = require('./../../../../src/controller/login/RegistrarseAction');


/*
Las ruteas de api requieren el JWT
* */
describe('RegistrarseAction', async function () {

  this.timeout(5000);

  it("POST / - OK", async function () {


    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/registrarse'
    });

    request.body = {
      nombre: "bart",
      nick: 'bs',
      email:'tu_'+ Math.ceil( Math.random()*1000) + "@crm.productividadti.com.mx",
      password:"laotra"
    };


    const response = httpMocks.createResponse();

    await registrarseAction(request, response);

    assert(response._isJSON() === true, "No es json");

    const data = response._getJSONData();

    assert(data.success === true, "Se esperaba respuesta success");
    assert(data.msg === "");
    assert(200 === response.statusCode, "El estatus no es 200");

    assert(typeof data.data.token === "string" || data.data.token.length>0, "No hay token");
    assert(typeof data.data.public === "object" || data.data.public.nombre.length>0, "No hay token");

  });

});
