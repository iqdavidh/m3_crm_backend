'use strict';

const assert = require('assert');
const AutService = require("../../../../src/service/aut/AutService");

describe('AutService', function () {

  it('getDataFromUserPass OK', async function () {

    const dataAutenticacion = await AutService.getDataFromUserPass('admin', 'pass');

    assert(dataAutenticacion.success === true, "No se resolvio la autenticacion");
    assert(dataAutenticacion.data.public, "No hay data public");
    assert(dataAutenticacion.data.internal, "No hay data internal");


    assert(JSON.stringify(dataAutenticacion.data.public) !== JSON.stringify(dataAutenticacion.data.internal), "data public e internal son iguales");
    assert(dataAutenticacion.data.public.user, "No hay user");
    assert(dataAutenticacion.data.public.profile, "No hay profile");
  });


  it('getDataFromUserPass Error - Datos Incorrectos', async function () {

    const dataAutenticacion = await AutService.getDataFromUserPass('un usuario que no existe', 'o password incorrecto');

    assert(dataAutenticacion.success === false, "se esperaba false");
    assert(dataAutenticacion.data === null, "data deberia ser null");
    assert(dataAutenticacion.msg !== '', "el mensaje no deberia ser vacio");

  });


});
