const BuilderJsonResponse = require("../lib/BuilderJsonResponse");
const DbCrm = require("../model/DbCrm");
const LibValidacion = require("../lib/LibValidacion");


let listaCamposPermitirUpdate = [
  'nombre', 'nick', 'email', 'is_admin', 'is_activo',
];


const UsuarioUpdateAction = async (req, res) => {

  const idUsuarioSession = req.idUsuario;
  const idUsuarioActualizado = req.params.idUsuario;


  let dataRaw = req.body;
  let dataClean = LibValidacion.getDataClean(dataRaw, listaCamposPermitirUpdate);

  //buscar si es el superusuario
  await DbCrm.ModelUsuario.findOne({email: "david@productividadti.com.mx"},{email:1})
      .then(usuarioWM => {

        if (usuarioWM._id === idUsuarioActualizado && idUsuarioSession !== idUsuarioActualizado) {
          throw new Error("No puedes acutalizar al super usuario");
        }

        return DbCrm.ModelUsuario.findByIdAndUpdate(idUsuarioActualizado,
            {$set: dataClean}, {
              new: false, upsert: false
            });
      })
      .then(item => {

        const data = {
          id_usuario: idUsuarioActualizado
        };

        BuilderJsonResponse.Success(res, data);

      })
      .catch(error => {

        BuilderJsonResponse.Error(res, error);
      });


};

module.exports = UsuarioUpdateAction;
