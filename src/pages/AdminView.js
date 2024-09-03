import React from 'react';
import AdminTurnos from '../components/AdminTurnos';
import Sidebar from '../components/SideBar';

const AdminView = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Gestión de Turnos</h1>
        <AdminTurnos />
        {/* Aquí el administrador puede gestionar los turnos */}
      </div>
    </div>
  );
};

export default AdminView;
