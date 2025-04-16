const odbc = require('odbc');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'bdUsiForms', 'RelatorioTurno.accdb');
const connectionString = `Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=${dbPath};`;

async function buscarUsuarioPorCredenciais(login, senha) {
  const connection = await odbc.connect(connectionString);
  // Pesquisar sobre ...
  const result = await connection.query(
    'SELECT * FROM Usuarios WHERE Login = ? AND Senha = ?',
    [login, senha]
  );
  await connection.close();
  return result;
}

module.exports = {
  buscarUsuarioPorCredenciais
};
