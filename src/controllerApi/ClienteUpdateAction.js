const BuilderJsonResponse = require("../lib/BuilderJsonResponse");
const DbCrm = require("../model/DbCrm");
const LibValidacion = require("../lib/LibValidacion");

const itemsXPage = 50;

let listaCamposPermitirUpdate = [
  'nombre', 'apaterno', 'amaterno', 'tel',
  'origen', 'email1', 'sexo'
];


/* Buscar todos los clientes del usuario*/
const ClienteUpdateAction = async (req, res) => {

  const idUsuario = req.idUsuario;
  const idCliente = req.params.idCliente;

  let dataRaw = req.body;
  let dataClean = LibValidacion.getDataClean(dataRaw, listaCamposPermitirUpdate, false);

  //Hacemos la conversion del los campos tipo obnject

  if (dataRaw["indicadores.funelIndex"]) {
    dataClean.indicadores = {
      funelIndex: dataRaw["indicadores.funelIndex"]
    }
  }

  const promUpdate = DbCrm.ModelCliente.findByIdAndUpdate(idCliente,
      {$set: dataClean}, {
        new: false, upsert: false
      });

  await promUpdate
      .then((item) => {

        const data = {
          id_cliente: idCliente
        };

        BuilderJsonResponse.Success(res, data);

      }).catch(error => {

        BuilderJsonResponse.Error(res, error);
      });

};

module.exports = ClienteUpdateAction;
