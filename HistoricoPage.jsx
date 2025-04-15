// ./pages/HistoricoPage.jsx
export default function HistoricoPage({ user }) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Histórico de Relatórios</h1>
        <div className="bg-white p-4 shadow rounded">Filtro por data, turno, equipe... (a definir)</div>
        <div className="mt-4 space-y-2">
          <div className="bg-gray-100 p-4 rounded shadow">Relatório A</div>
          <div className="bg-gray-100 p-4 rounded shadow">Relatório B</div>
        </div>
      </div>
    );
  }