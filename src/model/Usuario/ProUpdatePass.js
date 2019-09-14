const bcrypt = require('bcryptjs');

const ProUpdatePass = async (usuario, newPassRow) => {

  const hash = bcrypt.hashSync(newPassRow, 2); /*modo desarroollo solo 2 iteracioens salt*/

  const filter={'_id': usuario._id};

  await DbCrm.ModelUsuario.updateOne(filter,{password: hash});

};

module.exports=ProUpdatePass;
