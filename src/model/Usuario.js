const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const EncodeObject = require('./../pro/jwt/EncodeObject');
const DecodeToken = require('./../pro/jwt/DecodeToken');

const SALT_I = 3;

const Schema = mongoose.Schema;


const UsuarioSchema = new Schema({
  id_usuario: {type: String, require: true},
  email: {type: String, require: true, trim: true, unique: 1},
  nombre: {type: String, require: true},
  password: {type: String, require: true, minlength: 6},
  roles: {type: Array, required: true},
  token: {type: String},

});


UsuarioSchema.pre('save', function (next) {
  let user = this;

  if (user.isModified('password')) {

    bcrypt.getSalt(SALT_I, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });

    });
  } else {
    next();
  }

});

UsuarioSchema.methods.validarPasswordRaw = function (passwordRaw) {
  return bcrypt.compareSync(passwordRaw, this.password)
};


UsuarioSchema.methods.getDataApi = function () {
  const user = this;
  return  {
    id_usuario: user.id_usuario,
    roles: user.roles
  };
};



module.exports = mongoose.model('usuarios', UsuarioSchema);
