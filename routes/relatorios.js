const express = require('express');
const router = express.Router();

const { listarRelatorios } = require('../controllers/relatoriosController');
const { autenticar } = require('../middlewares/authMiddleware');

// Rota protegida para listar relatórios
router.get('/', autenticar, listarRelatorios);

module.exports = router;
