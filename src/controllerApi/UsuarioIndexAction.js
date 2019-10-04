const BuilderJsonResponse = require("../lib/BuilderJsonResponse");
const DbCrm = require("../model/DbCrm");

const itemsXPage = 50;


/* Buscar todos los clientes del usuario*/
const UsuarioIndexAction = async (req, res) => {


  if (!req.usuario.is_admin) {
    BuilderJsonResponse.Error(res, "Se requiere ser adminsitrador");
    return
  }

  const promLista = DbCrm.ModelUsuario
      .find(
          {},
          {nombre: 1, nick: 1, email: 1, is_admin: 1,is_activo:1})
      .exec()
  ;

  await Promise.all([promLista])
      .then((values) => {

        const lista = values[0];


        //esto es porque en el fornt esta como id_cliente
        let usuarios = lista.map(item => {
          let m = item.toJSON();
          m.id = item._id.toString();
          return m;
        });



        let data = {
          lista: usuarios
        };

        BuilderJsonResponse.Success(res, data);

      })
      .catch(error => {

        BuilderJsonResponse.Error(res, error);
      });


};

module.exports = UsuarioIndexAction;
