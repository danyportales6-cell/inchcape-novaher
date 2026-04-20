import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `relative block py-2 transition ${
      isActive
        ? "text-cyan-400 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-cyan-400 after:shadow-[0_0_8px_#22d3ee]"
        : "text-gray-400 hover:text-cyan-200"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white px-4 py-3 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-28 h-8 object-contain sm:w-36 sm:h-10"
          />
        </Link>

        {/* Botón móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-white text-2xl"
        >
          ☰
        </button>

        {/* Links desktop */}
        <div className="hidden sm:flex gap-6">
          <NavLink to="/" className={linkStyle}>
            Inicio
          </NavLink>
          <NavLink to="/acciones" className={linkStyle}>
            Informándonos
          </NavLink>
          <NavLink to="/reportar" className={linkStyle}>
            Reportar
          </NavLink>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="flex flex-col mt-4 sm:hidden">
          <NavLink to="/" className={linkStyle} onClick={() => setOpen(false)}>
            Inicio
          </NavLink>
          <NavLink
            to="/acciones"
            className={linkStyle}
            onClick={() => setOpen(false)}
          >
            Acciones
          </NavLink>
          <NavLink
            to="/reportar"
            className={linkStyle}
            onClick={() => setOpen(false)}
          >
            Reportar
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
