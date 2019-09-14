'use strict';

const DbCrm = require('../../../src/model/DbCrm');
/**
 * Created by David on 18/07/2019.
 */

const assert = require('assert');
const LibValidacion = require("../../../src/lib/LibValidacion");


describe('DbCrm', function () {

  it('existe', function () {
    assert(typeof DbCrm === "object", "No existe dbcrm");
  });


  it('tiene los modelos', function () {
    const listaModelos = ['cx', 'ModelUsuario'];
    listaModelos.forEach(m => {
      const isValid = LibValidacion.getIsNotNullOrEmpty(DbCrm[m]);
      assert(isValid, `falta la popiedad ${m}`);
    })

  });


});

