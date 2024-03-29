const BuilderJsonResponse = require("../../lib/BuilderJsonResponse");
const DbCrm = require("../../model/DbCrm");
const EncodeObject = require('../../../src/pro/jwt/EncodeObject');
const LibValidacion = require("../../lib/LibValidacion");

const LoginEmailPassAction = async (req, res) => {



  const email = req.body.email || null;
  const password = req.body.password || null;


  if(! LibValidacion.getIsNotNullOrEmpty(email) || ! LibValidacion.getIsNotNullOrEmpty(password) ){
    BuilderJsonResponse.Error(res, 'Datos incorrectos',401);
    return;
  }

  const usuario = await DbCrm.ModelUsuario.findOne({email});

  if (!usuario) {
    BuilderJsonResponse.Error(res, 'Usuario no encontrado',401);
    return;
  }

  const isPassValid = usuario.validarPasswordRaw(password);

  if (!isPassValid) {
    BuilderJsonResponse.Error(res, 'Datos incorrectos',401);
    return;
  }

  const dataApi = usuario.getDataApi();

  const token = EncodeObject(dataApi.secret);

  const dataRespuesta = {
    token,
    public_data: dataApi.public
  };

  BuilderJsonResponse.Success(res, dataRespuesta);

};

module.exports = LoginEmailPassAction;
