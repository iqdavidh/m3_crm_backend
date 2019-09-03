'use strict';

/**
 * Created by David on 18/07/2019.
 */

const assert = require('assert');

const fnGetToken = require("../../../../src/pro/jwt/fnGetToken");
const fnDecodeToken = require("../../../../src/pro/jwt/fnDecodeToken");


const dataEsperado = {v: 1};

describe('fnGetToken / DecodeToken', function () {

  it('obtener token', async function () {

    const token = await fnGetToken(dataEsperado);
    assert(token !== "", "el token no es el esperado");


    const dataRecibido = await  fnDecodeToken(token);

    assert( JSON.stringify(dataRecibido) === JSON.stringify(dataEsperado),"Los datos recibidos no son correctos");


  });
});



