const bcrypt = require('bcryptjs');
const BuilderJsonResponse = require("../../lib/BuilderJsonResponse");
const DbCrm = require("../../model/DbCrm");
const EncodeObject = require('../../../src/pro/jwt/EncodeObject');
const LibValidacion = require("../../lib/LibValidacion");


let listaCamposPermitidos = [
  'nombre', 'nick', 'email','password'
];


const RegistrarseAction = async (req, res) => {

  let dataRaw = req.body;
  let dataClean = LibValidacion.getDataClean(dataRaw, listaCamposPermitidos);


  if (!LibValidacion.getIsNotNullOrEmpty(dataClean.email)) {
    BuilderJsonResponse.Error(res, 'Datos incorrectos', 401);
    return;
  }

  dataClean.password = bcrypt.hashSync(dataClean.password, 1);
  dataClean.is_admin = false;
  dataClean.is_activo = true;

  await DbCrm.ModelUsuario
      .create(dataClean)
      .then(usuarioNew => {


        const dataApi = usuarioNew.getDataApi();

        const token = EncodeObject(dataApi.secret);


        const dataRespuesta = {
          token,
          public_data: dataApi.public
        };

        BuilderJsonResponse.Success(res, dataRespuesta);

      })
      .catch(error => {

        BuilderJsonResponse.Error(res, error);
      });


};

module.exports = RegistrarseAction;
