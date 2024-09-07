import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import ClientView from './pages/ClientView';
import AdminView from './pages/AdminView.js';
import ClubesView from './pages/ClubesView.js';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/admin"
          element={<AdminView />}
          /*element={user?.role === 'admin' ? <AdminView /> : <Navigate to="/login" />}*/
        />
        <Route path="/client" element={<ClubesView />} /*element={user?.role === 'client' ? <ClientView /> : <Navigate to="/login" />}*//>
        <Route path="/client/club/:clubId" element={<ClientView />} /*element={user?.role === 'client' ? <ClientView /> : <Navigate to="/login" />}*//>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
