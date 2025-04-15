const usuariosService = require('../services/usuariosService');

const getUsuarios = async (req, res) => {
  try {
    const usuarios = await usuariosService.buscarUsuarios();
    res.json(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

const createUsuario = async (req, res) => {
  try {
    await usuariosService.criarUsuario(req.body);
    res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Erro ao criar usuário' });
  }
};

module.exports = { getUsuarios, createUsuario };
