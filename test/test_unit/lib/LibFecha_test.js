'use strict';

/**
 * Created by David on 18/07/2019.
 */

var assert = require('assert');
const LibFecha = require("../../../src/lib/LibFecha");


describe('LibFecha', function () {

  describe('getDateFromFechaYMD', function () {

    it('fecha simple', function () {
      const fymd = '2000-01-30';
      const d = LibFecha.getDateFromFechaYMD(fymd);

      assert(2000 === d.getFullYear(), "No coincide year");
      assert(0 === d.getMonth(), "No coincide mes");
      assert(30 === d.getDate(), "No coincide fecha");
    });

  });


  describe('getDateFromFechaDMY', function () {

    it('fecha simple', function () {
      const fdmy = '30/01/2000';
      const d = LibFecha.getDateFromFechaDMY(fdmy);

      assert(2000 === d.getFullYear(), "No coincide year");
      assert(0 === d.getMonth(), "No coincide mes");
      assert(30 === d.getDate(), "No coincide fecha");
    });

  });


  describe('getFYMDFromDate', function () {

    it('fecha simple', function () {

      const d = new Date(2000, 0, 30);
      const fymd = LibFecha.getFYMDFromDate(d);

      assert('2000-01-30' === fymd, "No coincide");
    });

  });

  describe('getDMYFromDate', function () {

    it('fecha simple', function () {

      const d = new Date(2000, 0, 30);
      const fdmy = LibFecha.getDMYFromDate(d);

      assert('30/01/2000' === fdmy, "No coincide");
    });

  });

  describe('getFAbbDFromDate', function () {

    it('fecha simple', function () {

      const d = new Date(2019, 7, 12);
      const fabb = LibFecha.getFAbbDFromDate(d);

      assert('Lu 12 Ago 2019' === fabb, "No coincide - " + fabb);
    });

  });

  describe('getDMYFromYMD', function () {

        it('fecha simple', function () {

          const fymd = '2011-05-30';
          const fdmy = LibFecha.getDMYFromYMD(fymd);

          assert('30/05/2011' === fdmy, "No coincide - " + fdmy);
        });
      }
  );


  describe('getYMDFromDMY', function () {

    it('fecha simple', function () {

      const fdmy = '30/05/2011';
      const fymd = LibFecha.getYMDFromDMY(fdmy);

      assert('2011-05-30' === fymd, "No coincide - " + fdmy);
    });

  });

});
