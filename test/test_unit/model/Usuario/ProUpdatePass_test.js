'use strict';

/**
 * Created by David on 18/07/2019.
 */

const assert = require('assert');
const DbCrm = require("../../../../src/model/DbCrm");
const ProUpdatePass = require('../../../../src/model/Usuario/ProUpdatePass');

describe('ProUpdatePass', function () {
  it('ok', async function () {

    const filter = {email: 'david@productividadti.com.mx'};

    //reset el password a string vacio
    await DbCrm.ModelUsuario.findOneAndUpdate(filter, {password: ''});

    let u = await DbCrm.ModelUsuario.findOne(filter);

    //actualizar el usuario
    ProUpdatePass(u, 'lalocal');

    let u2 = await DbCrm.ModelUsuario.findOne(filter);
    assert(u2.password !== '', "Deberia ser true - test dummy");




  });
});

