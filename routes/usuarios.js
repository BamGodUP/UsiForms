const express = require('express');
const router = express.Router();
const { getUsuarios, createUsuario } = require('../controllers/usuariosController');
const { autenticar, permitirSomente } = require('../middlewares/authMiddleware');

router.get('/', autenticar, getUsuarios);

router.post('/', autenticar, permitirSomente('Administrador', 'Supervisor'), createUsuario);

module.exports = router;
