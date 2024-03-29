const mongoose = require("mongoose");
const ServerConfig = require("../ServerConfig");


let url = ServerConfig.mongo.urlServer;

let opcionesMongoose = {
  useNewUrlParser: true
};

if (ServerConfig.tipoServer !== 'development') {
  url = ServerConfig.mongo.url;
}

url = url + '/crm';


mongoose.Promise = global.Promise;

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const cx = mongoose.connect(url, opcionesMongoose)
    .then(x => {
      console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
      console.error('Error connecting to mongo', err)
    });


const ModelUsuario = require("./Usuario/ModelUsuario");
const ModelCliente = require("./Cliente/ModelCliente");
const ModelGestion = require("./Gestion/ModelGestion");


module.exports = {
  cx,
  ModelUsuario: ModelUsuario,
  ModelCliente: ModelCliente,
  ModelGestion: ModelGestion
};
