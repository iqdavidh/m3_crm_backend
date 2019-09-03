const BuilderJsonResponse = require("../lib/BuilderJsonResponse");
const ServerConfig = require("../ServerConfig");
const AutService = require("../service/aut/AutService");

const fnGetToken = require("../pro/jwt/fnGetToken");

const LoginConEmailPassAction = async (req, res, next) => {

  let dataRaw = req.body;

  let resultadoAutenticacion = await AutService.getDataFromUserPass(dataRaw.user, dataRaw.password);


  if (resultadoAutenticacion.success === false) {
    return BuilderJsonResponse.Error(res, resultadoAutenticacion.msg, 403);
  }

  const dataAutenticacion = resultadoAutenticacion.data;


  try {
    const token = await fnGetToken(dataAutenticacion.internal);
    const dataRespuesta = {
      data: dataAutenticacion.public,
      token: token
    };

    BuilderJsonResponse.Success(res, dataRespuesta);

  } catch (e) {
    BuilderJsonResponse.Error(e);
  }


};


module.exports = LoginConEmailPassAction;

