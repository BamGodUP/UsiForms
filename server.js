// server.js - API Node.js para salvar relatórios no Access
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ADODB = require('node-adodb');

// Caminho completo para o banco Access
const DATABASE_PATH = '"C:\UsiForms\bdUsiForms\RelatorioTurno.accdb"';
const connection = ADODB.open(`Provider=Microsoft.ACE.OLEDB.12.0;Data Source=${DATABASE_PATH};Persist Security Info=False;`);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/relatorios', async (req, res) => {
  try {
    const dados = req.body;
    const comandos = dados.map((ocorrencia) => {
      return `
        INSERT INTO Relatorios (
          Turno, LetraEquipe, HoraInicio, HoraFim, CodParada, Local, Ocorrencia,
          MedidaTomada, CausaImediata, PerdaQualidade, PerdaProducao, ReducaoVelocidade,
          AtendidoPor, DataRegistro, Autor
        ) VALUES (
          '${dados.turno}', '${dados.letra}', '${ocorrencia.horaInicio}', '${ocorrencia.horaFim}',
          '${ocorrencia.codParada}', '${ocorrencia.local}', '${ocorrencia.ocorrencia}',
          '${ocorrencia.medida}', '${ocorrencia.causa}', ${ocorrencia.qualidade ? 1 : 0},
          ${ocorrencia.producao ? 1 : 0}, ${ocorrencia.velocidade ? 1 : 0},
          '${ocorrencia.atendidoPor}', NOW(), '${dados.autor}'
        );
      `;
    });

    for (const cmd of comandos) {
      await connection.execute(cmd);
    }

    res.status(200).json({ success: true, message: 'Relatórios inseridos com sucesso!' });
  } catch (error) {
    console.error('Erro ao inserir no Access:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
