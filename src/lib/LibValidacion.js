const LibValidacion = {

  getDataClean: (dataRaw, listaCamposAllow) => {
    let dataClean = {};

    let contadorCampos = 0;

    listaCamposAllow
        .forEach(c => {
          if (dataRaw[c] !== undefined) {
            dataClean[c] = dataRaw[c];
            contadorCampos++;
          }
        })
    ;

    if (contadorCampos === 0) {
      throw new Error("No se encontraron datos requeridos");
    }

    return dataClean;

  },

  getIsNotNullOrEmpty: (valor) => {

    if (typeof valor === "string") {
      return valor.toString().trim() !== "";
    }

    return valor !== null && valor !== undefined;
  }


};

module.exports = LibValidacion;
