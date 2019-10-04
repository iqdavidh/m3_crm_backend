const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const ModelCliente = new Schema({
  nombre: {type: String, require: true},
  apaterno: {type: String, require: true},
  amaterno: {type: String},
  tel: {type: String, trim: true},
  origen: {type: String, trim: true},
  email1: {type: String, trim: true},
  id_usuario: {type: String},
  indicadores: {funelIndex: {type: Number, min: 1, max: 4}}
});

module.exports = mongoose.model('clientes', ModelCliente);
