const DbCrm = require("../../src/model/DbCrm");

const email = 'david@productividadti.com.mx';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}


const TipoSeguimiento = [
  {id: 1, tipo: 'remoto', subtipo: 'Llamada Sin Contacto', contactado: false},
  {id: 2, tipo: 'remoto', subtipo: 'Llamada Contactada', contactado: true},
  {id: 3, tipo: 'remoto', subtipo: 'El cliente llamó', contactado: true},
  {id: 4, tipo: 'remoto', subtipo: 'Correo Enviado', contactado: false},
  {id: 5, tipo: 'remoto', subtipo: 'Correo Rebotado', contactado: false},

  {
    id: 8,
    tipo: 'presencial',
    subtipo: 'Visita a Dom/Oficinas - Sin éxito',
    contactado: false
  },
  {
    id: 9,
    tipo: 'presencial',
    subtipo: 'Visita a Dom/Oficinas Contado Realizado',
    contactado: true
  },
  {
    id: 10,
    tipo: 'presencial',
    subtipo: 'El cliente asistió a la empresa',
    contactado: true
  },

  {id: 11, tipo: 'remoto', subtipo: 'Otro', contactado: false},
  {id: 12, tipo: 'presencial', subtipo: 'Otro', contactado: true}
];

const listaCom = [
  'Proin ut ligula euismod, tempor purus ac, lacinia magna. Nunc consectetur lectus nec augue condimentum fringilla. Cras ac magna facilisis, cursus orci a, egestas felis. Quisque convallis velit quis enim sollicitudin lacinia. Suspendisse potenti. Donec interdum ligula vitae dui bibendum, sed feugiat elit iaculis. Cras porttitor blandit eleifend.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisl arcu, condimentum nec hendrerit vitae, efficitur vitae enim. Proin volutpat diam eget libero pulvinar viverra. Vivamus arcu odio, euismod ut consectetur sed, interdum non quam. Nunc ac sapien tincidunt, auctor dolor vel, sollicitudin augue. Mauris non libero eget odio maximus blandit ut a massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque at ante vehicula, ornare libero feugiat, consequat turpis. Sed vitae enim ac lectus mattis dapibus. Quisque vulputate laoreet fermentum. Curabitur magna felis, commodo et nisi vitae, varius ornare tortor.',
  'Curabitur sed orci non mauris maximus molestie ut id elit. Vestibulum feugiat vulputate ipsum, nec placerat ipsum. Proin eu nulla in massa pharetra pharetra. Mauris non lectus ipsum. Curabitur vehicula, enim imperdiet molestie imperdiet, metus metus commodo felis, non dignissim leo neque non ante. Phasellus consectetur bibendum neque ac blandit. Donec mauris metus, iaculis vitae fermentum eget, congue et nisl. Donec semper ac erat id cursus. Ut laoreet, nunc in auctor viverra, metus leo sagittis orci, sit amet interdum libero sapien imperdiet tortor.',
  'Etiam sit amet ipsum non nibh consectetur egestas. Praesent faucibus lorem nulla, ut bibendum risus iaculis lacinia. In varius dui et gravida tincidunt.',
  'Etiam euismod at lectus at laoreet. Nulla eget lobortis neque. Cras in mi sit amet turpis dapibus imperdiet. Praesent semper felis a augue hendrerit tempus. Nunc at semper eros. Nullam posuere non libero nec blandit. Donec sit amet tincidunt tortor.',
  'Suspendisse mattis ipsum quis ipsum venenatis suscipit. Praesent eu dolor ut justo dictum gravida. Vivamus ac pellentesque libero.',
  'Nullam nisl sem, malesuada sed viverra vel, bibendum sed metus. Curabitur eu eros non lacus laoreet iaculis et in lorem. Phasellus vestibulum feugiat tincidunt.',
  'Nullam tincidunt, elit sed semper ullamcorper, velit leo pharetra lacus, nec vulputate mauris odio quis massa. Aenean eget luctus velit, in iaculis lectus.',
  'Suspendisse volutpat tempor tortor, et consectetur risus volutpat in. Aenean elementum sodales magna, nec sodales nibh. Etiam sodales, purus id tincidunt ornare, est augue consequat tellus, id eleifend tellus purus sit amet justo.',
  'Donec maximus, est ac fringilla porta, nisl quam suscipit urna, sed porttitor lacus ante a eros. Pellentesque cursus quis felis et gravida. Ut gravida bibendum ultricies. Integer ut ligula eget enim rutrum mollis id eget mi. Nam at lacus placerat sapien facilisis ultrices. Aliquam vel augue massa. In hac habitasse platea dictumst. Suspendisse sed dui tincidunt, mollis augue vitae, tincidunt justo. Phasellus in cursus nulla.',
  'Mauris dapibus vulputate velit, eget accumsan ipsum. Morbi porttitor aliquam erat, eget dignissim lectus finibus ut. Pellentesque eu sapien pulvinar, tempor est ut, pharetra dui.',
  'Vestibulum egestas neque sed ipsum elementum, a dapibus magna venenatis. Nullam id ligula et ipsum dictum molestie ut in quam. Morbi varius dui id dui cursus, lobortis tempor velit porttitor. Aliquam dolor magna, consectetur pulvinar nisl quis, bibendum varius est. Phasellus tempor mauris sed lectus tristique, vel rutrum velit aliquet. Proin justo elit, viverra nec leo at, interdum pellentesque nunc. Donec rhoncus, magna vel placerat aliquam, urna ipsum vestibulum quam, in vehicula neque metus at leo. Nulla facilisi. Aliquam iaculis augue vel eros ultricies, nec maximus sem pretium. Aliquam erat volutpat.',
  'Cras tempor feugiat rhoncus. Etiam pretium metus porta ante porttitor porta eu eu dolor. Proin semper efficitur dui ut scelerisque. Morbi mi arcu, egestas sed posuere id, suscipit eget felis. Donec ligula magna, feugiat in molestie quis, varius at ipsum.',
  'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi vehicula bibendum justo sed rutrum. Suspendisse sed laoreet metus, id rhoncus orci.',
  'Proin ut ligula euismod, tempor purus ac, lacinia magna. Nunc consectetur lectus nec augue condimentum fringilla. Cras ac magna facilisis, cursus orci a, egestas felis. Quisque convallis velit quis enim sollicitudin lacinia. Suspendisse potenti. Donec interdum ligula vitae dui bibendum, sed feugiat elit iaculis. Cras porttitor blandit eleifend.'
];
let fecha = new Date();
let maxIndexCom = listaCom.length;
let maxTipoSeg = TipoSeguimiento.length;

let idUsuario = "5d97ff8b66d6af1750e4e08d";


DbCrm.ModelCliente.find({})
    .then(lista => {

      lista.forEach(c => {

        let idCliente = c._id.toString();

        console.log(`idCliente ${idCliente} ------------`);


        let numGestion = getRandomInt(5);
        numGestion = numGestion > 2 ? numGestion : 0;


        for (let i = 0; i < numGestion; i++) {

          let indexTipoSeg = getRandomInt(maxTipoSeg) - 1;
          let indexCom = getRandomInt(maxIndexCom) - 1;

          let dataInsert = {
            fecha: fecha,
            tipo: TipoSeguimiento[indexTipoSeg].subtipo,
            id_usuario: idUsuario,
            id_cliente: idCliente,
            usuario: "davidh",
            comentario: listaCom[indexCom]
          };

          return DbCrm.ModelGestion.create(dataInsert);
        }

      });

    })
;
