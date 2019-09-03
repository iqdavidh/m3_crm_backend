const BuilderJsonResponse = require("../lib/BuilderJsonResponse");

const ErrorAction = function (err, req, res, next) {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  if (!res.headersSent) {
    BuilderJsonResponse.Error(res, err);
  }
};

module.exports = ErrorAction;
