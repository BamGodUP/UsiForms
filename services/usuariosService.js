const usuariosRepository = require('../repositories/usuariosRepository');

const buscarUsuarios = async () => {
  return await usuariosRepository.listarUsuarios();
};

const criarUsuario = async (dados) => {
  const { nome, login, senha, funcao } = dados;

  if (!nome || !login || !senha || !funcao) {
    throw new Error('Campos obrigatórios faltando');
  }

  await usuariosRepository.inserirUsuario(nome, login, senha, funcao);
};

module.exports = {
  buscarUsuarios,
  criarUsuario
};
