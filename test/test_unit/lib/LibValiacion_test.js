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


describe('getIsNotNullOrEmpty - happyPath', function(){

  it('true si hay valor string', function(){
    const isValid=LibValidacion.getIsNotNullOrEmpty('x');
    assert(isValid,'deberia ser valido al pasar string')
  });

  it('true si hay valor num', function(){
    const isValid=LibValidacion.getIsNotNullOrEmpty(5);
    assert(isValid,'deberia ser valido al pasar string')
  });

  it('true si hay valor object', function(){
    const isValid=LibValidacion.getIsNotNullOrEmpty({});
    assert(isValid,'deberia ser valido al pasar {}')
  });

  it('true si hay valor object', function(){
    const isValid=LibValidacion.getIsNotNullOrEmpty(()=>{});
    assert(isValid,'deberia ser valido al function')
  });


  it('false - string vacio', function(){
    const isValid=LibValidacion.getIsNotNullOrEmpty('');
    assert(isValid===false,'deberia ser false el string vacio')
  });

  it('false - null', function(){
    const isValid=LibValidacion.getIsNotNullOrEmpty(null);
    assert(isValid===false,'deberia ser false al pasar null')
  });

  it('false - null', function(){
    const isValid=LibValidacion.getIsNotNullOrEmpty(undefined);
    assert(isValid===false,'deberia ser false al pasar undefined')
  });
});


