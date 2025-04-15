const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Importação das rotas
const authRoutes = require('./routes/auth');
const usuariosRoutes = require('./routes/usuarios');
const relatoriosRoutes = require('./routes/relatorios');

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/relatorios', relatoriosRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
