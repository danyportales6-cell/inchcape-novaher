import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <h1 className="text-xl font-bold tracking-wide">Respeto</h1>

      {/* Links */}
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition ${
              isActive
                ? "text-cyan-400 border-b-2 border-cyan-400"
                : "hover:text-cyan-300"
            }`
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to="/acciones"
          className={({ isActive }) =>
            `transition ${
              isActive
                ? "text-cyan-400 border-b-2 border-cyan-400"
                : "hover:text-cyan-300"
            }`
          }
        >
          Acciones
        </NavLink>

        <NavLink
          to="/reportar"
          className={({ isActive }) =>
            `transition ${
              isActive
                ? "text-cyan-400 border-b-2 border-cyan-400"
                : "hover:text-cyan-300"
            }`
          }
        >
          Reportar
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
