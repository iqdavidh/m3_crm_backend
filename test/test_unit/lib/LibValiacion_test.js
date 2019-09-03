'use strict';

/**
 * Created by David on 18/07/2019.
 */

var assert = require('assert');
const LibValidacion = require("../../../src/lib/LibValidacion");

function assert_comparar(calculo, resultadoCorrecto) {
  let textoCalculo = JSON.stringify(calculo);
  let textoResultadoCorrecto = JSON.stringify(resultadoCorrecto);
  assert(textoCalculo === textoResultadoCorrecto, "No coincide json");
}


describe('getDataClean', function () {

  it('estan todos los requridos', function () {

    let listaCamposAllow = ['c1', 'c2', 'c3'];
    let dataRaw = {c1: 1, c2: "2", c3: 0};

    let dataClean = LibValidacion.getDataClean(dataRaw, listaCamposAllow);
    let respuestaEsperada = {c1: 1, c2: "2", c3: 0};


    assert_comparar(dataClean, respuestaEsperada);

  });

  it('estan todos los requridos, sobran campos en raw', function () {

    let listaCamposAllow = ['c1', 'c2', 'c3'];
    let dataRaw = {c1: 1, c2: "2", c3: 0, k: 3434, otroCampo: null};

    let dataClean = LibValidacion.getDataClean(dataRaw, listaCamposAllow);
    let respuestaEsperada = {c1: 1, c2: "2", c3: 0};


    assert_comparar(dataClean, respuestaEsperada);

  });



  it('faltan  requridos - hay exception, no hay campos requeridos', function () {

    let listaCamposAllow = ['c1', 'c2', 'c3'];
    let dataRaw = { k: 3434, otroCampo: null};

    try{
      let dataClean = LibValidacion.getDataClean(dataRaw, listaCamposAllow);
      assert(false,"Se esperaba una excepcion al pasar un objeto raw sin ningun campo requerido");
    }catch (e) {
      assert( e.message==="No se encontraron datos requeridos","La respuesta del error no es la esperada - " + e);
    }

  });

});
