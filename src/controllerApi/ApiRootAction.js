const BuilderJsonResponse = require("../lib/BuilderJsonResponse");

const ApiRootAction = function (req, res) {
  BuilderJsonResponse.Success(res,{}, "api - protected");
};

module.exports = ApiRootAction;
