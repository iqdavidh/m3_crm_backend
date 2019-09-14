'use strict';

const DbCrm = require('../../../../src/model/DbCrm');
/**
 * Created by David on 18/07/2019.
 */

const assert = require('assert');
const LibValidacion = require("../../../../src/lib/LibValidacion");


describe('Usuario', function () {

  const filter = {email: 'david@productividadti.com.mx'};


  it('validarPasswordRaw - en caso de ok/error', async function () {

    const u = await DbCrm.ModelUsuario.findOne(filter);

    const isPassValid = u.validarPasswordRaw('lalocal');
    assert(isPassValid, "el password no es valido");


    const isPassErrorValid = u.validarPasswordRaw('un password que no es');
    assert(isPassErrorValid === false, "el password no debe ser valido");


  });




  it('encriptar pass al guardar raw', async function () {

    const u = await DbCrm.ModelUsuario.findOne(filter);
    const d = u.getDataApi();

    assert(typeof d === "object", "dataApi incorrecto");

    const isPropOK = LibValidacion.validarModelHasProp(d, ['secret', 'public']);
    assert(isPropOK, "faltan propiedades en el modelo - " + JSON.stringify(d));


    //validar los datosSecret y publico

    const isDataSecretOK = LibValidacion.validarModelHasProp(d.secret, ['_id', 'roles']);
    assert(isDataSecretOK, "faltan propieades secrert de dataapi - " + JSON.stringify(d.secret));


    const isDataPublicOK = LibValidacion.validarModelHasProp(d.public, ['nombre','email', 'roles']);
    assert(isDataPublicOK, "faltan propieades publico de dataapi - " + JSON.stringify(d.public));


  });

});
