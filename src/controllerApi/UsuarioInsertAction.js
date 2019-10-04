const bcrypt = require('bcryptjs');
const BuilderJsonResponse = require("../lib/BuilderJsonResponse");
const DbCrm = require("../model/DbCrm");
const LibValidacion = require("../lib/LibValidacion");


let listaCamposPermitirUpdate = [
  'nombre', 'nick', 'email', 'is_admin', 'is_activo'
];


const UsuarioInsertAction = async (req, res) => {


  let dataRaw = req.body;
  let dataClean = LibValidacion.getDataClean(dataRaw, listaCamposPermitirUpdate);


  dataClean.password = bcrypt.hashSync(dataRaw.password, 1);


  await DbCrm.ModelUsuario
      .create(dataClean)
      .then(u => {

        let idUsuarioNew = u._id.toString();

        const data = {
          id_usuario: idUsuarioNew
        };

        BuilderJsonResponse.Success(res, data);

      })
      .catch(error => {

        BuilderJsonResponse.Error(res, error);
      });


};

module.exports = UsuarioInsertAction;
