const { autenticarUsuario } = require('../services/authService');

const login = async (req, res) => {
  const { login, senha } = req.body;

  if (!login || !senha) {
    return res.status(400).json({ error: 'Login e senha são obrigatórios.' });
  }

  try {
    const resultado = await autenticarUsuario(login, senha);

    if (!resultado) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    res.json({
      message: 'Login bem-sucedido',
      token: resultado.token,
      usuario: resultado.usuario
    });

  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ error: 'Erro interno ao autenticar' });
  }
};

module.exports = { login };
