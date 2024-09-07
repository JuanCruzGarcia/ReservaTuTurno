import React from 'react';
import { useParams } from 'react-router-dom';
import UserTurnosTable from '../components/UserTurnosTable';

const ClientView = () => {
  const { clubId } = useParams();  // Obtener el ID del club seleccionado

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Selecciona tu Turno en el Club {clubId}</h1>
      <UserTurnosTable clubId={clubId} />
    </div>
  );
};

export default ClientView;
