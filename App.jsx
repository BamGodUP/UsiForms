// App.jsx - Estrutura principal da aplicação
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NewRelatorio from "./pages/NewRelatorio";
import HistoricoPage from "./pages/HistoricoPage";
import PerfilPage from "./pages/PerfilPage";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    if (username && password) {
      setUser({ nome: username, role: username === 'supervisor' ? 'supervisor' : 'operario' });
    }
  };

  const handleLogout = () => setUser(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        {user && (
          <>
            <Route path="/home" element={<HomePage user={user} onLogout={handleLogout} />} />
            <Route path="/novo-relatorio" element={<NewRelatorio user={user} />} />
            <Route path="/historico" element={<HistoricoPage user={user} />} />
            <Route path="/perfil" element={<PerfilPage user={user} />} />
          </>
        )}
        {!user && <Route path="*" element={<Navigate to="/" />} />}
      </Routes>
    </Router>
  );
}

export default App;