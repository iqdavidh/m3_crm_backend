'use strict';
const assert = require('assert');
const httpMocks = require("node-mocks-http");
const LoginConEmailPassAction = require("../../../src/controllerLogin/LoginConEmailPassAction");
const LibTest = require("../../test_api/LibTest");

describe('LoginConEmailPassAction', function () {

  it('POST - OK', async function () {

    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/no importa',
      body: {
        user: "admin",
        password: "pass"
      }
    });

    const response = httpMocks.createResponse();

    await LoginConEmailPassAction(request, response);

    assert(response._isJSON() === true, "No es json");

    const data = response._getJSONData();

    assert(data.success === true, "Se esperaba respuesta success");

    assert(data.data.token !== undefined && data.data.token !== "", "El token no esta");
    assert(data.data.data !== undefined && typeof data.data.data === "object", "Respuesta no es objeto");

    const payload = data.data.data;
    let isValidPayload = LibTest.ValidarTieneProp(payload, ['user', 'profile']);
    assert(isValidPayload === true, isValidPayload);

    assert(200 === response.statusCode, "El estatus no es 200");


  });

  it('POST - Error Pass incorrecto', async function () {

    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/no importa',
      body: {
        user: "no existe el usuario perop el pass es correcto",
        password: "pass"
      }
    });

    const response = httpMocks.createResponse();

    await LoginConEmailPassAction(request, response);

    assert(response._isJSON() === true, "No es json");

    const data = response._getJSONData();

    assert(data.success === false, "Se esperaba respuesta false");

    assert(data.data === undefined , "El token no deberia esta");

    assert(403 === response.statusCode, "El estatus no es 200");


  });


  it('POST - Error User incorrecto', async function () {

    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/no importa',
      body: {
        user: "admin",
        password: "pass incorrecto pero user correcto"
      }
    });

    const response = httpMocks.createResponse();

    await LoginConEmailPassAction(request, response);

    assert(response._isJSON() === true, "No es json");

    const data = response._getJSONData();

    assert(data.success === false, "Se esperaba respuesta false");

    assert(data.data === undefined , "El token no deberia esta");

    assert(403 === response.statusCode, "El estatus no es 200");


  });

});
