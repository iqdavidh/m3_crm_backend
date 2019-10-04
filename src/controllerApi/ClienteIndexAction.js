const BuilderJsonResponse = require("../lib/BuilderJsonResponse");
const DbCrm = require("../model/DbCrm");

const itemsXPage = 50;


/* Buscar todos los clientes del usuario*/
const ClienteIndexAction = async (req, res) => {

  const id_usuario = req.idUsuario;
  const pagina = req.pagina;


  const promTotal = DbCrm.ModelCliente.countDocuments({id_usuario});
  const promLista = DbCrm.ModelCliente
      .find({id_usuario})
      .limit(itemsXPage)
      .skip(itemsXPage * (pagina - 1))
      .exec()
  ;

  await Promise.all([promTotal, promLista])
      .then((values) => {

        const total = values[0];
        const clientes = values[1];

        const numTotalPaginas = Math.ceil(total / itemsXPage);

        let data = {
          total,
          numTotalPaginas,
          pagina,
          clientes
        };

        BuilderJsonResponse.Success(res, data);

      })
      .catch(error => {

        BuilderJsonResponse.Error(res, error);
      });


};

module.exports = ClienteIndexAction;
