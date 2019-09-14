const mongoose = require("mongoose");
const ServerConfig = require("../ServerConfig");


let url = ServerConfig.mongo.urlServer;

let opcionesMongoose = {
  useNewUrlParser: true
};

if (ServerConfig.tipoServer!=='development') {
  const user = encodeURIComponent(ServerConfig.mongo.user);
  const password = encodeURIComponent(ServerConfig.mongo.pass);
  url = `mongodb://${user}:${password}@localhost:27017`;
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


module.exports = {
  cx,
  ModelUsuario: ModelUsuario
};
