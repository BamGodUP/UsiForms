const odbc = require('odbc');

async function connectToAccess() {
  const connectionString = 'Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=C:\\UsiForms\\bdUsiForms\\RelatorioTurno.accdb;';

  try {
    const connection = await odbc.connect(connectionString);
    console.log("✅ Conectado com sucesso ao banco de dados Access!");

    const result = await connection.query('SELECT * FROM Usuarios');
    console.log(result);

    await connection.close();
  } catch (err) {
    console.error("❌ Erro ao conectar ao Access:", err);
  }
}

connectToAccess();
