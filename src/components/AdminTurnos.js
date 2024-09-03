import React, { useState } from 'react';

const padelCanchas = [
  { id: 1, nombre: 'Cancha 1', tipo: 'Blindex y sintético | Con iluminación | Techada' },
  { id: 2, nombre: 'Cancha 2', tipo: 'Blindex y sintético | Con iluminación | Techada' },
  { id: 3, nombre: 'Cancha 3', tipo: 'Blindex y sintético | Con iluminación | Techada' },
];

const horas = ['08:00', '09:30', '11:00', '12:30', '14:00', '15:30', '17:30', '19:00', '20:30'];

const turnosSimulados = [
  { id: 1, canchaId: 1, hora: '09:30', nombreUsuario: 'Juan Pérez', pago: true },
  { id: 2, canchaId: 2, hora: '11:00', nombreUsuario: 'María Gómez', pago: false },
  { id: 3, canchaId: 3, hora: '17:30', nombreUsuario: 'Pedro Ruiz', pago: true },
];

const AdminTurnos = () => {
  const [turnos, setTurnos] = useState(turnosSimulados);
  const [nuevoTurno, setNuevoTurno] = useState(null); // Almacenar turno seleccionado
  const [nombreUsuario, setNombreUsuario] = useState(''); // Nombre del usuario para el nuevo turno

  const esTurnoReservado = (canchaId, hora) => {
    return turnos.some((turno) => turno.canchaId === canchaId && turno.hora === hora);
  };

  const handleAgregarTurno = (canchaId, hora) => {
    if (!esTurnoReservado(canchaId, hora)) {
      setNuevoTurno({ canchaId, hora });
      setNombreUsuario(''); // Limpiar el nombre del usuario si ya estaba lleno
    }
  };

  const confirmarAgregarTurno = () => {
    if (nombreUsuario && nuevoTurno) {
      const nuevoId = turnos.length + 1; // Generar un nuevo ID
      const turnoAgregado = {
        id: nuevoId,
        canchaId: nuevoTurno.canchaId,
        hora: nuevoTurno.hora,
        nombreUsuario,
        pago: false, // No pagado por defecto
      };
      setTurnos([...turnos, turnoAgregado]); // Agregar el turno a la lista
      setNuevoTurno(null); // Limpiar la selección
      setNombreUsuario(''); // Limpiar el nombre del usuario
    }
  };

  const handleCancel = (id) => {
    setTurnos(turnos.filter(t => t.id !== id)); // Eliminar el turno cancelado
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Turnos Reservados</h2>
      <div className="mt-4 p-3 bg-gray border-t-4 border-green-500 rounded shadow-md">
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
                  const turnoReservado = turnos.find(
                    (turno) => turno.canchaId === cancha.id && turno.hora === hora
                  );
                  const esSeleccionado = nuevoTurno && nuevoTurno.canchaId === cancha.id && nuevoTurno.hora === hora;
                  
                  return (
                    <td
                      style={{maxWidth: '30px'}}
                      key={hora}
                      className={`px-4 py-4 border border-gray-100 text-center cursor-pointer
                        ${turnoReservado ? 'bg-gray-300' : esSeleccionado ? 'bg-green-300' : 'bg-white hover:bg-green-100'}
                      `}
                      onClick={() => handleAgregarTurno(cancha.id, hora)}
                    >
                      {turnoReservado ? (
                        <div>
                          <span className="font-semibold">{turnoReservado.nombreUsuario}</span>
                          <br />
                          <span className="text-sm">{turnoReservado.pago ? 'Pagado' : 'A pagar en cancha'}</span>
                          <br />
                          <button
                            className="mt-1 bg-red-500 text-white px-2 rounded"
                            onClick={(e) => {
                              e.stopPropagation(); // Evitar que se seleccione el turno al hacer clic en cancelar
                              handleCancel(turnoReservado.id);
                            }}
                          >
                            Cancelar
                          </button>
                        </div>
                      ) : (
                        esSeleccionado ? 'Reservar' : ''
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>

      {/* Mostrar el formulario solo si se selecciona un turno */}
      {nuevoTurno && (
        <div className="mt-4 p-4 bg-green-100 border-t-4 border-green-500 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Agregar Turno Manualmente</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del usuario</label>
            <input
              type="text"
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded w-full"
            />
          </div>
          <button
            onClick={confirmarAgregarTurno}
            className="bg-green-500 text-white py-2 px-4 rounded"
            disabled={!nombreUsuario}
          >
            Confirmar Turno
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminTurnos;
