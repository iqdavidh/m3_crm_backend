'use strict';

/**
 * Created by David on 18/07/2019.
 */

var assert = require('assert');
const LibTexto = require("../../../src/lib/LibTexto");

describe('LibTexto', function () {

  describe('UcFirst ', function () {

    it('Upper', function () {
      let r = LibTexto.Ucfirst("CASA");
      assert("Casa" === r, "No coincide");
    });

    it('Lower', function () {
      let r = LibTexto.Ucfirst("casa");
      assert("Casa" === r, "No coincide");
    });

    it('Mixto', function () {
      let r = LibTexto.Ucfirst("CaSa");
      assert("Casa" === r, "No coincide");
    });

  });

  /*
  Convertir
  * */
  describe('numeroTo2Char ', function () {

    it('Menor a 10 regresa el numero con un 0 al inicio', function () {
      let r = LibTexto.numeroTo2Char(4);
      assert('04' === r, "no se creo el valor con pad 0");

      r = LibTexto.numeroTo2Char(1);
      assert('01' === r, "no se creo el valor con pad 0");

    });


    it('Mayor a 10 regresa el numero como texto', function () {
      let r = LibTexto.numeroTo2Char(10);
      assert('10' === r, "no se creo el valor con pad 0");

      r = LibTexto.numeroTo2Char(30);
      assert('30' === r, "no se creo el valor con pad 0");

    });


  });
});
