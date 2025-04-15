const odbc = require('odbc');
const path = require('path');

// Caminho para o banco de dados Access
const dbPath = path.join(__dirname, '..', 'bdUsiForms', 'RelatorioTurno.accdb');
const connectionString = `Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=${dbPath};`;

// GET /api/relatorios
const listarRelatorios = async (req, res) => {
  try {
    const connection = await odbc.connect(connectionString);
    const result = await connection.query('SELECT * FROM RelatoriosTurno');
    await connection.close();
    res.json(result);
  } catch (err) {
    console.error('Erro ao buscar relatórios:', err);
    res.status(500).json({ error: 'Erro ao buscar relatórios' });
  }
};

module.exports = {
  listarRelatorios
};
