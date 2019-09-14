const mongoose = require("mongoose");
const bcrypt =require('bcryptjs');


const SALT_I = 3;

const Schema = mongoose.Schema;


const UsuarioSchema = new Schema({
  email: {type: String, require: true, trim: true, unique: 1},
  nombre: {type: String, require: true},
  password: {type: String, require: true, minlength: 6},
  roles: {type: Array, required: true},
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
      roles: this.roles
    },
    public:{
      email:this.email,
      roles: this.roles
    }

  };
};


module.exports = mongoose.model('usuarios', UsuarioSchema);