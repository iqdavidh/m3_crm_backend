const mongoose = require("mongoose");
const bcrypt =require('bcryptjs');


const SALT_I = 3;

const Schema = mongoose.Schema;


const UsuarioSchema = new Schema({
  nombre: {type: String, require: true},
  nick: {type: String, require: true},
  email: {type: String, require: true, trim: true, unique: 1},
  password: {type: String, require: true, minlength: 6},
  is_admin: {type: Boolean, required: true},
  fum: {type: Date},
  intentosLogin: {type: Number},
  fuLogintry: {type: Date}
});



UsuarioSchema.methods.validarPasswordRaw = function (passwordRaw) {
  let isValid= bcrypt.compareSync(passwordRaw, this.password);

  return isValid;
};


UsuarioSchema.methods.getDataApi = function () {

  return {
    secret:{
      _id: this._id,
      nick:this.nick,
      nombre:this.nombre,
      is_admin: this.is_admin
    },
    public:{
      nombre:this.nombre,
      nick:this.nick,
      email:this.email,
      is_admin: this.is_admin
    }

  };
};


module.exports = mongoose.model('usuarios', UsuarioSchema);
