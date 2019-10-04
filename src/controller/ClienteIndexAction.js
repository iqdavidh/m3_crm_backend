const BuilderJsonResponse = require("../lib/BuilderJsonResponse");
const DbCrm = require("../model/DbCrm");

const itemsXPage = 50;


/* Buscar todos los clientes del usuario*/
const ClienteIndexAction = async  (req, res) =>{

  const id_usuario = req.idUsuario;
  const pagina = req.pagina;


  let dataResult = {
    id_usuario: id_usuario
  };

  DbCrm.ModelCliente.countDocuments({id_usuario})
      .then(numTotal => {

        dataResult.total = numTotal;
        dataResult.numTotalPaginas = Math.ceil(numTotal / itemsXPage);

        return DbCrm.ModelCliente
            .find({id_usuario})
            .limit(itemsXPage)
            .skip(itemsXPage * (pagina - 1));
      })
      .then(lista => {

        dataResult.clientes = lista;

        BuilderJsonResponse.Success(res, dataResult);
      });


};

module.exports = ClienteIndexAction;
