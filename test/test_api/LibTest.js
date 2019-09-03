'use strict';

/**
 * Created by David on 18/07/2019.
 */

const fs = require("fs");

module.exports = {

  saveResponse(texto, nombreArchivo) {

    fs.writeFile("test/test_api/response/" + nombreArchivo, texto, function (err) {
      if (err) {
        return console.log(err);
      }
    });
  },

  getRandom() {
    const min = 0;
    const max = 1000;
    return Math.floor(Math.random() * (+max - +min)) + +min;
  },

  ValidarTieneProp(objeto, listaCNotNull, listaCPosibleNull = []) {

    let isValid = true;
    let msg='';

    listaCNotNull.forEach(c => {
      if (objeto[c] === undefined || objeto[c] === null) {
        msg += msg === '' ? '' : ', ';
        msg += c;
        isValid = false;
      }
    });


    listaCPosibleNull.forEach(c=>{
      if (objeto[c] === undefined) {
        msg += msg === '' ? '' : ', ';
        msg += c;
        isValid = false;
      }
    });


    if (msg !== '') {
      msg = 'Falta : ' + msg;
    }

    return isValid ? isValid :msg;

  }
};

