const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const GestionSchema = new Schema({
  fecha: {type: Date},
  tipo: {type: String},
  id_usuario: {type: String, require: true},
  id_cliente: {type: String, require: true},
  usuario: {type: String, trim: true},
  comentario: {type: String, trim: true},
},{
  toJSON: {
    transform: function (doc, ret) {
      delete ret._id;
    }
  }
});

module.exports = mongoose.model('gestions', GestionSchema);
