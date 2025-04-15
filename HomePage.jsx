// ./pages/HomePage.jsx
import { Link } from "react-router-dom";

export default function HomePage({ user, onLogout }) {
  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-4">
        <div className="text-2xl font-bold">LOGO</div>
        <div>
          <span className="mr-4">Olá, {user.nome}</span>
          <button onClick={onLogout} className="text-red-500">Sair</button>
        </div>
      </header>
      <div className="flex gap-4 mb-6">
        <Link to="/novo-relatorio" className="bg-green-500 text-white px-4 py-2 rounded">Novo Relatório</Link>
        <Link to="/historico" className="bg-blue-500 text-white px-4 py-2 rounded">Histórico</Link>
        <Link to="/perfil" className="bg-gray-500 text-white px-4 py-2 rounded">Perfil</Link>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Relatórios do turno anterior</h2>
        <div className="bg-white shadow p-4 rounded">Exemplo de relatório anterior...</div>
        <div className="bg-white shadow p-4 rounded">Outro relatório da linha...</div>
      </div>
    </div>
  );
}
