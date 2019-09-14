'use strict';

/**
 * Created by David on 18/07/2019.
 */

const assert = require('assert');


describe('ProUpdatePass', function () {
  it('ok- ', async function () {

    const filter = {email: 'david@productividadti.com.mx'};
    const u = await DbCrm.ModelUsuario.findOne(filter);

    assert(true, "Deberia ser true - test dummy");
  });
});

