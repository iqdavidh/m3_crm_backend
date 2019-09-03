'use strict';

const assert = require('assert');
const httpMocks = require('node-mocks-http');
const NotFoundAction = require("../../../src/controller/NotFoundAction");

describe('NotFoundAction', function () {

  it("GET / - Respuesta not fund", function () {

    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/'
    });

    const response = httpMocks.createResponse();

    NotFoundAction(request, response);

    const data = response._getJSONData();

    assert( data.success === false, "Se esperaba respuesta success");
    assert( data.msg === "not found", "El menssaje no es el correcto");
    assert(404 === response.statusCode, "El estatus no es 404");
  });

});
