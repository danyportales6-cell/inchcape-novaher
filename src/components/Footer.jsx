function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Marca */}
        <div>
          <h2 className="text-white text-xl font-bold mb-2">
            Respeto en la industria
          </h2>
          <p className="text-sm">
            Plataforma para informar, prevenir y reportar casos de acoso y
            discriminación.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-white font-semibold mb-3">Navegación</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-cyan-400 transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="/problema" className="hover:text-cyan-400 transition">
                Entendiendo el problema
              </a>
            </li>
            <li>
              <a href="/atencion" className="hover:text-cyan-400 transition">
                Atención de casos
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contacto</h3>
          <p className="text-sm">recursos.humanos@empresa.com</p>
          <p className="text-sm">+51 999 999 999</p>
          <p className="text-sm mt-2">
            Si no estás seguro de tu caso, contáctanos para orientación.
          </p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} Respeto en la industria. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}

export default Footer;
