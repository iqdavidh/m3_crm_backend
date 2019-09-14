const bcrypt = require('bcryptjs');
const DbCrm = require("../DbCrm");

const ProUpdatePass = async (usuario, newPassRow) => {

  const hash = bcrypt.hashSync(newPassRow, 2); /*modo desarroollo solo 2 iteracioens salt*/

  const filter={'_id': usuario._id};

  await DbCrm.ModelUsuario.findOneAndUpdate(filter,{$set:{password: hash}});

};

module.exports=ProUpdatePass;
