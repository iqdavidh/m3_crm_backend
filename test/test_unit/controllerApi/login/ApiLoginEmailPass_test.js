'use strict';

const assert = require('assert');
const httpMocks = require('node-mocks-http');
const action = require('./../../../../src/controllerApi/login/ApiLoginEmailPass');


/*
Las ruteas de api requieren el JWT
* */
describe('ApiLoginEmailPass', async function () {

  it("POST / - login con datos correctos", async function () {


    const bodyLogin = {email: 'david@productividadti.com.mx', password: 'lalocal'};

    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/login',
      body: bodyLogin
    });

    const response = httpMocks.createResponse();

    await action(request, response);

    assert(response._isJSON() === true, "No es json");

    const data = response._getJSONData();

    assert(data.success === true, "Se esperaba respuesta success");
    assert(data.msg === "");
    assert(200 === response.statusCode, "El estatus no es 200");

    assert(typeof data.data.token === "string" || data.data.token.length>0, "No hay token");
    assert(typeof data.data.public === "object" || data.data.public.nombre.length>0, "No hay token");

  });


  it("POST / - login password incorrectos", async function () {

    const bodyLogin = {email: 'david@productividadti.com.mx', password: 'password incorrecto'};

    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/login',
      body: bodyLogin
    });

    const response = httpMocks.createResponse();

    await action(request, response);

    assert(response._isJSON() === true, "No es json");

    const data = response._getJSONData();

    assert(data.success === false, "Se esperaba respuesta false");
    assert(data.msg !== "");

  });



  it("POST / - login sin datos", async function () {

    const bodyLogin = {};

    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/loginemailpass',
      body: bodyLogin
    });

    const response = httpMocks.createResponse();

    await action(request, response);

    assert(response._isJSON() === true, "No es json");

    const data = response._getJSONData();

    assert(data.success === false, "Se esperaba respuesta false");
    assert(data.msg !== "");

  });

});
