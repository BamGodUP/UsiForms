const { buscarRelatorios } = require('../repositories/relatoriosRepository');

async function listarRelatorios() {
  return await buscarRelatorios();
}

module.exports = { listarRelatorios };
