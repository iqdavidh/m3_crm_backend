const LibTexto = {

  Ucfirst: (string) => {
    string = string.toString().toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  numeroTo2Char: (numero) => {
    /*Convertir un numero a un texto de 2 characteres,utilizado para campos fecha*/
    return  (numero < 10 ? '0' : '') + numero.toString();
  }

};

module.exports = LibTexto;
