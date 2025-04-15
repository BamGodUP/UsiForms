// ./pages/PerfilPage.jsx
export default function PerfilPage({ user }) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Perfil do Usuário</h1>
        <div className="bg-white p-4 shadow rounded">
          <p><strong>Nome:</strong> {user.nome}</p>
          <p><strong>Função:</strong> {user.role}</p>
        </div>
      </div>
    );
  }
  