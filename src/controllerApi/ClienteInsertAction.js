const BuilderJsonResponse = require("../lib/BuilderJsonResponse");
const DbCrm = require("../model/DbCrm");
const LibValidacion = require("../lib/LibValidacion");

const itemsXPage = 50;

let listaCamposPermitirUpdate = [
  'nombre', 'apaterno', 'amaterno', 'tel',
  'origen', 'email1', 'sexo'
];


/* Buscar todos los clientes del usuario*/
const ClienteInsertAction = async (req, res) => {

  const idUsuario = req.idUsuario;

  let dataRaw = req.body;
  let dataClean = LibValidacion.getDataClean(dataRaw, listaCamposPermitirUpdate);

  //por default entran con funel index de 1
  dataClean.indicadores = {funelIndex: 1};
  dataClean.id_usuario = idUsuario;


  await DbCrm.ModelCliente
      .create(dataClean)
      .then((item) => {

        const data = {id_cliente:item._id};

        BuilderJsonResponse.Success(res, data);

      }).catch(error => {

        BuilderJsonResponse.Error(res, error);
      });

};

module.exports = ClienteInsertAction;
