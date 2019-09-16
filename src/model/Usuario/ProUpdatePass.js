const bcrypt = require('bcryptjs');
const DbCrm = require("../DbCrm");

const ProUpdatePass = async (usuario, newPassRow) => {

  const hash = bcrypt.hashSync(newPassRow, 1); /*modo desarroollo solo 2 iteracioens salt*/

  const filter={'_id': usuario._id.toString()};

  let respuesta= await DbCrm.ModelUsuario.findOneAndUpdate(filter,{password: hash});

  return;

};

module.exports=ProUpdatePass;
