const LibTexto = {

  Ucfirst: (string) => {
    string = string.toString().toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  numeroTo2Char: (numero) => {
    /*Convertir un numero a un texto de 2 characteres,utilizado para campos fecha*/
    return  (numero < 10 ? '0' : '') + numero.toString();
  },
  getCodeFecha:()=>{
    let fecha = new Date();
    let codeFecha = fecha.getFullYear().toString();
    let m = fecha.getMonth() + 1;
    codeFecha += (m < 10 ? "0" : "") + m.toString();
    m = fecha.getDate();
    codeFecha += (m < 10 ? "0" : "") + m.toString();
    m = fecha.getHours();
    codeFecha += " " + (m < 10 ? "0" : "") + m.toString();
    m = fecha.getMinutes();
    codeFecha += ":" + (m < 10 ? "0" : "") + m.toString();
    return codeFecha;
  }


};

module.exports = LibTexto;
