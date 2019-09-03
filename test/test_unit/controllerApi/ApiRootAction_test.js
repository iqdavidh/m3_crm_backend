'use strict';

const assert = require('assert');
const httpMocks = require('node-mocks-http');
const action = require("../../../src/controllerApi/ApiRootAction");


/*
Las ruteas de api requieren el JWT
* */
describe('ApiRootAction', function () {

  it("GET / - api protected", function () {

    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/api/'
    });

    const response = httpMocks.createResponse();

    action(request, response);

    assert(response._isJSON() === true, "No es json");

    const data = response._getJSONData();

    assert( data.success === true, "Se esperaba respuesta success");
    assert( data.msg === "api - protected");
    assert(200 === response.statusCode, "El estatus no es 200")


  });

});
