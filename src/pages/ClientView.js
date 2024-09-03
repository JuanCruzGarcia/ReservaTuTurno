import React from 'react';
import UserTurnosTable from '../components/UserTurnosTable';

const ClientView = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Selecciona tu Turno</h1>
      <UserTurnosTable  />
      {/* Aquí se puede agregar la opción de pago con Mercado Pago */}
    </div>
  );
};

export default ClientView;
