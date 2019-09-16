const BuilderJsonResponse = require("../lib/BuilderJsonResponse");
const AutService = require("../service/aut/AutService");

const EncodeObject = require("../pro/jwt/EncodeObject");

const LoginConEmailPassAction = async (req, res, next) => {

  let dataRaw = req.body;

  let resultadoAutenticacion = await AutService.getDataFromUserPass(dataRaw.user, dataRaw.password);


  if (resultadoAutenticacion.success === false) {
    return BuilderJsonResponse.Error(res, resultadoAutenticacion.msg, 403);
  }

  const dataAutenticacion = resultadoAutenticacion.data;


  try {
    const token =  EncodeObject(dataAutenticacion.internal);
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

