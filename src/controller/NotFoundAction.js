const BuilderJsonResponse = require("../lib/BuilderJsonResponse");

const NotFoundAction = function (req, res, next) {
  BuilderJsonResponse.Error(res, 'not found', 404)
};

module.exports = NotFoundAction;
