const DbCrm = require("../src/model/DbCrm");


let id_usuario = "5d7cdb295fc1dbb06c0e5494";
// DbCrm.ModelCliente
//     .find({id_usuario}).limit(50).skip(0)
//     .then(lista => {
//       console.log(lista);
//     });
//

// const promTotal = DbCrm.ModelCliente.countDocuments({id_usuario});

DbCrm.ModelCliente.countDocuments({id_usuario}).then( num=>{
  console.log(num);
});
