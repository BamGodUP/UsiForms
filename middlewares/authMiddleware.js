const jwt = require('jsonwebtoken');

require('dotenv').config(); 
const SECRET = process.env.SECRET;


const autenticar = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido ou expirado' });
  }
};

const permitirSomente = (...funcoesPermitidas) => {
  return (req, res, next) => {
    if (!funcoesPermitidas.includes(req.user?.funcao)) {
      return res.status(403).json({ error: 'Acesso negado. Permissão insuficiente.' });
    }
    next();
  };
};

function verificarPermissao(perfisPermitidos) {
    return (req, res, next) => {
      const funcao = req.headers['x-funcao']; // Exemplo: 'ss', 'Supervisor', 'Operario'
  
      if (!funcao || !perfisPermitidos.includes(funcao)) {
        return res.status(403).json({ error: 'Acesso negado. Permissão insuficiente.' });
      }
  
      next();
    };
  }

module.exports = { autenticar, permitirSomente, verificarPermissao };
