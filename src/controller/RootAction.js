const BuilderJsonResponse = require("../lib/BuilderJsonResponse");

const RootAction = function (req, res) {
  BuilderJsonResponse.Success(res,{}, "I'm backend");
};

module.exports = RootAction;
