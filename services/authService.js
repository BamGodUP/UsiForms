const jwt = require('jsonwebtoken');
const { buscarUsuarioPorCredenciais } = require('../repositories/authRepository');

const SECRET = 'seu_segredo_seguro'; // Trocar por variável de ambiente em produção

async function autenticarUsuario(login, senha) {
  const usuarios = await buscarUsuarioPorCredenciais(login, senha);

  if (usuarios.length === 0) {
    return null; // Credenciais inválidas
  }

  const usuario = usuarios[0];

  const token = jwt.sign(
    {
      id: usuario.ID,
      nome: usuario.Nome,
      funcao: usuario.Funcao
    },
    SECRET,
    { expiresIn: '8h' }
  );

  return {
    token,
    usuario: {
      id: usuario.ID,
      nome: usuario.Nome,
      funcao: usuario.Funcao
    }
  };
}

module.exports = {
  autenticarUsuario
};
