const BuilderJsonResponse = require("../lib/BuilderJsonResponse");
const DbCrm = require("../model/DbCrm");


/* Buscar todos los clientes del usuario*/
const ClienteAllDataAction = async (req, res) => {

  const idUsuario = req.idUsuario;
  const idCliente = req.params.idCliente;

  const promCliente = DbCrm.ModelCliente.findById(idCliente);
  const promListaGestion = DbCrm.ModelGestion
      .find({id_cliente: idCliente})
      .exec()
  ;

  await Promise.all([promCliente, promListaGestion])
      .then((values) => {

        const cliente = values[0];
        const listaSeguimiento = values[1];

        let data = cliente.toJSON();

        data.id_cliente=cliente._id.toString();
        data.gestion={
          listaSeguimiento,
          listaTarea:[],
          listaMsg:[]
        };

        BuilderJsonResponse.Success(res, data);

      })
      .catch(error => {

        BuilderJsonResponse.Error(res, error);
      });


};

module.exports = ClienteAllDataAction;
