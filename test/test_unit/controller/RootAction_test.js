'use strict';

const assert = require('assert');
const httpMocks = require('node-mocks-http');
const RootAction = require("../../../src/controller/RootAction");

describe('RootAction', function () {

  it("GET / - Respuesta mensaje I'am backend", function () {

    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/'
    });

    const response = httpMocks.createResponse();

    RootAction(request, response);

    assert(response._isJSON() === true, "No es json");

    const data = response._getJSONData();

    assert( data.success === true, "Se esperaba respuesta success");
    assert( data.msg === "I'm backend", "El menssaje no es el correcto");
    assert(200 === response.statusCode, "El estatus no es 200")


  });

});
