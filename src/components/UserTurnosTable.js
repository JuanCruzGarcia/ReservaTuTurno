import React, { useState } from 'react';

const padelCanchas = [
  { id: 1, nombre: 'Cancha 1', tipo: 'Blindex y sintético | Con iluminación | Techada' },
  { id: 2, nombre: 'Cancha 2', tipo: 'Blindex y sintético | Con iluminación | Techada' },
  { id: 3, nombre: 'Cancha 3', tipo: 'Blindex y sintético | Con iluminación | Techada' },
  // Agrega las canchas que necesites
];

const horas = ['08:00', '09:30', '11:00', '12:30', '14:00', '15:30', '17:30', '19:00', '20:30'];

const UserTurnosTable = () => {
  const [reservas, setReservas] = useState([
    { canchaId: 1, hora: '09:30' },
    { canchaId: 2, hora: '11:00' },
    { canchaId: 3, hora: '17:30' },
    // Aquí defines qué turnos están reservados
  ]);

  const [turnoSeleccionado, setTurnoSeleccionado] = useState(null);

  // Función para determinar si un turno está reservado
  const esTurnoReservado = (canchaId, hora) => {
    return reservas.some((reserva) => reserva.canchaId === canchaId && reserva.hora === hora);
  };

  // Función para manejar la selección de un turno
  const manejarSeleccionTurno = (canchaId, hora) => {
    if (!esTurnoReservado(canchaId, hora)) {
      setTurnoSeleccionado({ canchaId, hora });
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Elige tu turno</h2>
      <div className="mt-4 p-4 bg-gray border-t-4 border-green-500 rounded shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2">Cancha</th>
                {horas.map((hora) => (
                  <th key={hora} className="px-4 py-2">{hora}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {padelCanchas.map((cancha) => (
                <tr key={cancha.id}>
                  <td className="px-4 py-2 border border-gray-100">
                    <div>
                      <strong>{cancha.nombre}</strong>
                      <br />
                      <span className="text-sm text-gray-500">{cancha.tipo}</span>
                    </div>
                  </td>
                  {horas.map((hora) => {
                    const reservado = esTurnoReservado(cancha.id, hora);
                    const seleccionado = turnoSeleccionado && turnoSeleccionado.canchaId === cancha.id && turnoSeleccionado.hora === hora;
                    
                    return (
                      <td 
                        style={{maxWidth: '20px'}}
                        key={hora}
                        className={`px-4 py-2 border border-gray-100 text-center cursor-pointer
                          ${reservado ? 'bg-gray-400 text-white' : seleccionado ? 'bg-green-400 text-white' : 'bg-white hover:bg-green-100'}
                        `}
                        onClick={() => manejarSeleccionTurno(cancha.id, hora)}
                      >
                        {reservado ? 'Reservado' : seleccionado ? 'Seleccionado' : ''}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Detalle del turno seleccionado */}
      {turnoSeleccionado && (
        <div className="mt-4 p-4 bg-green-100 border-t-4 border-green-500 rounded shadow-md">
          <h3 className="text-lg font-semibold mb-2">Turno Seleccionado:</h3>
          <p><strong>Cancha:</strong> {padelCanchas.find(c => c.id === turnoSeleccionado.canchaId).nombre}</p>
          <p><strong>Hora:</strong> {turnoSeleccionado.hora}</p>
          <button
            className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            onClick={() => alert(`Turno reservado para la cancha ${padelCanchas.find(c => c.id === turnoSeleccionado.canchaId).nombre} a las ${turnoSeleccionado.hora}`)}
          >
            Confirmar Turno
          </button>
        </div>
      )}
    </div>
  );
};

export default UserTurnosTable;
