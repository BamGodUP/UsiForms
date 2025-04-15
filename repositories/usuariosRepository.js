const odbc = require('odbc');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'bdUsiForms', 'RelatorioTurno.accdb');
const connectionString = `Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=${dbPath};`;

const listarUsuarios = async () => {
  const connection = await odbc.connect(connectionString);
  const result = await connection.query('SELECT * FROM Usuarios');
  await connection.close();
  return result;
};

const inserirUsuario = async (nome, login, senha, funcao) => {
  const connection = await odbc.connect(connectionString);
  const query = `INSERT INTO Usuarios (Nome, Login, Senha, Funcao) VALUES (?, ?, ?, ?)`;
  await connection.query(query, [nome, login, senha, funcao]);
  await connection.close();
};

module.exports = {
  listarUsuarios,
  inserirUsuario
};
