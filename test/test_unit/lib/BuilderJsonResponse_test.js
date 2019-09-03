'use strict';

/**
 * Created by David on 18/07/2019.
 */
const assert = require('assert');

const BuilderJsonResponse = require("../../../src/lib/BuilderJsonResponse");
const LibUnitTest = require("../LibUnitTest");



const res=LibUnitTest.res;



function assert_comparar(calculo, resultadoCorrecto) {
  let textoCalculo = JSON.stringify(calculo);
  let textoResultadoCorrecto = JSON.stringify(resultadoCorrecto);
  assert(textoCalculo === textoResultadoCorrecto, "No coincide json");
}


describe('BuilderJsonResponse_test', function () {

  it('Success - ok', function () {

    res.reset();

    BuilderJsonResponse.Success(res, {v1: 1});

    assert(200 === res.getStatus(), "El status es incorrecto");

    let dataEsperado = {
      success: true,
      msg: "",
      data: {v1: 1}
    };

    assert_comparar(res.getJson(), dataEsperado);


  });


  it('Error - ok', function () {

    res.reset();

    BuilderJsonResponse.Error(res, "un texto x");

    assert(500 === res.getStatus(), "El status es incorrecto");

    let dataEsperado = {
      success: false,
      msg: "un texto x"
    };

    assert_comparar(res.getJson(), dataEsperado);


  });


});
