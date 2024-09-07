import React, { useState } from 'react';
import Modal from 'react-modal';

const padelCanchas = [
  { id: 1, nombre: 'Cancha 1', tipo: 'Blindex y sintético | Con iluminación | Techada' },
  { id: 2, nombre: 'Cancha 2', tipo: 'Blindex y sintético | Con iluminación | Techada' },
  { id: 3, nombre: 'Cancha 3', tipo: 'Blindex y sintético | Con iluminación | Techada' },
];

const horas = ['08:00', '09:30', '11:00', '12:30', '14:00', '15:30', '17:30', '19:00', '20:30'];

const UserTurnosTable = ({ clubId }) => {
  const [reservas, setReservas] = useState([
    { canchaId: 1, hora: '09:30', clubId: 1 },
    { canchaId: 1, hora: '14:00', clubId: 1 },
    { canchaId: 2, hora: '11:00', clubId: 2 },
    { canchaId: 1, hora: '14:00', clubId: 2 },
    { canchaId: 3, hora: '17:30', clubId: 3 },
  ]);

  const [turnoSeleccionado, setTurnoSeleccionado] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const esTurnoReservado = (canchaId, hora) => {
    return reservas.some((reserva) => reserva.canchaId === canchaId && reserva.hora === hora && reserva.clubId === parseInt(clubId));
  };

  const manejarSeleccionTurno = (canchaId, hora) => {
    if (!esTurnoReservado(canchaId, hora)) {
      setTurnoSeleccionado({ canchaId, hora });
    }
  };

  const handleConfirmarTurno = () => {
    setIsModalOpen(true);  // Abre el modal
  };

  const handlePagoEnCancha = () => {
    // Marcar turno como reservado y cerrar modal
    setReservas((prevReservas) => [...prevReservas, { canchaId: turnoSeleccionado.canchaId, hora: turnoSeleccionado.hora, clubId: parseInt(clubId) }]);
    setIsModalOpen(false);
    setTurnoSeleccionado(null);  // Cierra la pestaña al limpiar el turno seleccionado
    alert('Turno reservado con éxito. Paga en la cancha.');
  };
  const handlePagoVirtual = () => {
    // Aquí rediriges a la plataforma de pago (ejemplo con alert por ahora)
    alert(`Redirigiendo a la billetera virtual para la cancha ${padelCanchas.find(c => c.id === turnoSeleccionado.canchaId).nombre} a las ${turnoSeleccionado.hora}`);
    setIsModalOpen(false);
    setTurnoSeleccionado(null);  // Cierra la pestaña al limpiar el turno seleccionado
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
                        style={{ width: '6rem' }}
                        key={hora}
                        className={`py-2 border border-gray-100 text-center cursor-pointer
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
      
      {turnoSeleccionado && (
        <div className="mt-4 p-4 bg-green-100 border-t-4 border-green-500 rounded shadow-md">
          <h3 className="text-lg font-semibold mb-2">Turno Seleccionado:</h3>
          <p><strong>Cancha:</strong> {padelCanchas.find(c => c.id === turnoSeleccionado.canchaId).nombre}</p>
          <p><strong>Hora:</strong> {turnoSeleccionado.hora}</p>
          <button
            className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            onClick={handleConfirmarTurno}
          >
            Confirmar Turno
          </button>
        </div>
      )}

      {/* Modal para opciones de pago */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Opciones de Pago"
        ariaHideApp={false}
        className="bg-white p-6 max-w-md mx-auto rounded shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Selecciona el método de pago</h2>
        <button
          className="w-full mb-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handlePagoVirtual}
        >
          Mercado Pago
        </button>
        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          onClick={handlePagoEnCancha}
        >
          Pagar en Cancha
        </button>
      </Modal>
    </div>
  );
};

export default UserTurnosTable;
