const odbc = require('odbc');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'bdUsiForms', 'RelatorioTurno.accdb');
const connectionString = `Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=${dbPath};`;

async function buscarRelatorios() {
  const connection = await odbc.connect(connectionString);
  const result = await connection.query('SELECT * FROM RelatoriosTurno');
  await connection.close();
  return result;
}

module.exports = { buscarRelatorios };
