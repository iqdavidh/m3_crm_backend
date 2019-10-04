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
      nombre:this.nombre,
      roles: this.roles
    },
    public:{
      nombre:this.nombre,
      email:this.email,
      roles: this.roles
    }

  };
};


module.exports = mongoose.model('usuarios', UsuarioSchema);
