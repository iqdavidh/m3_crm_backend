'use strict';

/**
 * Created by David on 18/07/2019.
 */

const assert = require('assert');

const EncodeObject = require("../../../../src/pro/jwt/EncodeObject");
const DecodeToken = require("../../../../src/pro/jwt/DecodeToken");


const dataEsperado = {v: 1};

describe('fnGetToken / DecodeToken', function () {

  it('encode/decode un objeto', async function () {

    const token =  EncodeObject(dataEsperado);

    assert(token !== "", "el token no es el esperado");

    const dataRecibido =  DecodeToken(token);

    assert(JSON.stringify(dataRecibido) === JSON.stringify(dataEsperado), "Los datos recibidos no son correctos");


  });

  it('decode un token con error',  function () {

    try {

      const dataRecibido =  DecodeToken("token erroneo  o expirado");

    } catch (e) {
      assert(true, "Esperabamos exception al decode el token");
    }


  });

});



