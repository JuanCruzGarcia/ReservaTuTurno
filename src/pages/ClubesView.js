import React from 'react';
import { useNavigate } from 'react-router-dom';
import fondoPadel from '../assets/images/PadelFondo.jpg';

const clubes = [
  { id: 1, nombre: 'Las avenidas', direccion: 'Diagonal Garibaldi 4970, Mar del Plata', precio: 18000, tipo: 'Pádel', imagen: fondoPadel, },
  { id: 2, nombre: 'Club Sur Pádel', direccion: 'Alvarado 2052', precio: 24000, tipo: 'Pádel', imagen: fondoPadel },
  { id: 3, nombre: 'Club Oeste', direccion: 'Dorrego 1832', precio: 22000, tipo: 'Pádel', imagen: fondoPadel, horario: '19:00' },
  // Agrega más clubes si lo necesitas
];

const ClubesView = () => {
    const navigate = useNavigate();
  
    // Función para manejar la selección del club
    const seleccionarClub = (clubId) => {
      navigate(`/client/club/${clubId}`); // Redirige al usuario a la vista de turnos de ese club
    };
  
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">Clubes Disponibles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubes.map((club) => (
            <div
              key={club.id}
              className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              onClick={() => seleccionarClub(club.id)}
            >
              {/* Imagen */}
              <div className="relative">
                <img
                  src={club.imagen}
                  alt={`Imagen de ${club.nombre}`}
                  className="w-full h-40 object-cover"
                />
                {/* Precio en la parte inferior */}
                <div className="absolute bottom-2 right-4 bg-black bg-opacity-50 rounded-full px-4 py-2 text-white font-semibold shadow-lg">
                  Desde ${club.precio}
                </div>
              </div>
  
              {/* Contenido */}
              <div className="p-4">
                {/* Tipo y Horario */}
                  <div className="flex justify-between items-center mt-2">
                  <div className="text-sm text-gray-500 flex items-center">
                    <span role="img" aria-label="paddle">🎾</span> {club.tipo}
                  </div>
                </div>
                {/* Título */}
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-bold text-gray-800">{club.nombre}</h2>
                  <div className="text-green-500 flex items-center">
                  </div>
                </div>
                
                {/* Dirección */}
                <p className="text-sm text-gray-600 mt-1">{club.direccion}</p>
                <div className="flex justify-end items-center mt-3">
                    <div className="text-sm bg-gray-200 bg-opacity-40 px-3 py-1 rounded-full">{club.horario}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ClubesView;