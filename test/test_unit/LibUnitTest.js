const LibUnitTest = {
  res: {
    statusValor: 0,
    jsonValor: '',
    status(v) {
      this.statusValor = v;
      return this;
    },
    json(v) {
      this.jsonValor = v
    },
    getJson() {
      return this.jsonValor;
    },
    getStatus() {
      return this.statusValor;
    },
    reset() {
      this.statusValor = null;
      this.jsonValor = null;
    }
  }
};

module.exports = LibUnitTest;
