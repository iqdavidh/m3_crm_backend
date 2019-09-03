'use strict';

const assert = require('assert');
const httpMocks = require('node-mocks-http');
const ErrorAction = require("../../../src/controller/ErrorAction");

describe('ErrorAction', function () {

  it("GET Error", function () {

    const request = httpMocks.createRequest({
      method: 'GET',
      url: 'unit_test_url_con_error'
    });

    const response = httpMocks.createResponse();

    const msgErrorEnviado = "Probando console msg error";
    ErrorAction(msgErrorEnviado, request, response);

    assert(response._isJSON() === true, "No es json");

    const data = response._getJSONData();

    assert(data.success === false, "Se esperaba respuesta success false");
    assert(data.msg === msgErrorEnviado, "El mensaje no es el correcto");
    assert(500 === response.statusCode, "El estatus no es 500");



  });

});
