const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const odbc = require('odbc');

const SECRET = process.env.JWT_SECRET || 'seu_segredo_seguro'; // Para produção, use variável de ambiente

router.post('/login', async (req, res) => {
  const { login, senha } = req.body;

  if (!login || !senha) {
    return res.status(400).json({ error: 'Login e senha são obrigatórios.' });
  }

  try {
    const connection = await odbc.connect(
      'Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=C:\\UsiForms\\bdUsiForms\\RelatorioTurno.accdb;'
    );

    const result = await connection.query(
      `SELECT * FROM Usuarios WHERE Login = ? AND Senha = ?`,
      [login, senha]
    );

    await connection.close();

    if (result.length === 0) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const usuario = result[0];

    const token = jwt.sign(
      {
        id: usuario.ID,
        nome: usuario.Nome,
        funcao: usuario.Funcao
      },
      SECRET,
      { expiresIn: '8h' }
    );

    res.json({
      message: 'Login bem-sucedido',
      token,
      usuario: {
        id: usuario.ID,
        nome: usuario.Nome,
        funcao: usuario.Funcao
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno ao autenticar' });
  }
});

module.exports = router;
