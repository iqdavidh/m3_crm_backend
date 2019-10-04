const BuilderJsonResponse = require("../lib/BuilderJsonResponse");
const DbCrm = require("../model/DbCrm");
const LibValidacion = require("../lib/LibValidacion");

const itemsXPage = 50;

let listaCamposPermitidos = [
  'id_tipo', 'tipo', 'subtipo', 'contactado',
  'comentario', "id_cliente"
];


/* Buscar todos los clientes del usuario*/
const SeguimientoInsertAction = async (req, res) => {

  const idUsuario = req.idUsuario;

  let dataRaw = req.body;
  let dataClean = LibValidacion.getDataClean(dataRaw, listaCamposPermitidos);

  //por default entran con funel index de 1
  dataClean.usuario = req.usuario.nick;
  dataClean.id_usuario = idUsuario;
  dataClean.fecha = new Date();

  await DbCrm.ModelGestion
      .create(dataClean)
      .then((item) => {

        const data = {
          id: item._id,
          fecha: dataClean.fecha
        };


        BuilderJsonResponse.Success(res, data);

      }).catch(error => {

        BuilderJsonResponse.Error(res, error);
      });

};

module.exports = SeguimientoInsertAction;
