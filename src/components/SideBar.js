import React, { useState } from 'react';
import { FaHome, FaCalendarAlt, FaUsers, FaBars, FaTimes } from 'react-icons/fa'; // Importar íconos de react-icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar el toggle

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Cambia el estado para abrir/cerrar la sidebar
  };

  return (
    <div className="flex">
      {/* Botón para mostrar/ocultar sidebar en móviles */}
      <div className="md:hidden">
        <button onClick={toggleSidebar} className="p-4">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed md:relative z-10 bg-gray-800 text-white h-screen w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <h2 className="text-2xl font-semibold text-center py-6">Admin Panel</h2>

        <ul className="space-y-6">
          <li className="px-4">
            <a href="/admin/home" className="flex items-center space-x-4 hover:bg-gray-700 px-4 py-2 rounded-md">
              <FaHome size={20} />
              <span>Inicio</span>
            </a>
          </li>
          <li className="px-4">
            <a href="/admin/turnos" className="flex items-center space-x-4 hover:bg-gray-700 px-4 py-2 rounded-md">
              <FaCalendarAlt size={20} />
              <span>Turnos</span>
            </a>
          </li>
          <li className="px-4">
            <a href="/admin/usuarios" className="flex items-center space-x-4 hover:bg-gray-700 px-4 py-2 rounded-md">
              <FaUsers size={20} />
              <span>Usuarios</span>
            </a>
          </li>
          {/* Agregar más opciones según sea necesario */}
        </ul>
      </div>

      {/* Contenido principal, ocupa el espacio restante */}
    </div>
  );
};

export default Sidebar;
