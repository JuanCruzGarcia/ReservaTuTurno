export const turnosService = {
    getAvailableTurnos: async () => {
      // Simula datos de turnos disponibles
      return [
        { hora: '09:00', disponibilidad: 4 },
        { hora: '10:00', disponibilidad: 2 },
        { hora: '11:00', disponibilidad: 0 },
      ];
    },
  
    getReservedTurnos: async () => {
      // Simula datos de turnos reservados
      return [
        { id: 1, hora: '09:00', nombreUsuario: 'Juan Pérez' },
        { id: 2, hora: '10:00', nombreUsuario: 'María García' },
      ];
    },
  
    cancelTurno: async (id) => {
      // Simula la cancelación de un turno
      console.log(`Turno con id ${id} cancelado`);
      return true;
    },
  };
  