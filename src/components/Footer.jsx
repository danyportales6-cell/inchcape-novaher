import { Instagram, Linkedin } from "lucide-react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        <div className="flex flex-col items-start gap-4 ">
          <img src={logo} alt="Logo" className="w-60" />
          <p className="text-sm mt-3 text-gray-400">
            Impulsamos una cultura donde el respeto no es opcional, es la base
            de todo.
          </p>
          <div className="flex gap-5 text-xl items-center text-center">
            <a
              href="https://www.instagram.com/viveinchcape/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition "
            >
              <Instagram size={24} />
            </a>

            <a
              href="https://www.linkedin.com/company/inchcape/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Navegación</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-cyan-400">
                Inicio
              </a>
            </li>
            <li>
              <a
                href="https://www.inchcape.com/es-co/nuestra-empresa/en-una-mirada"
                className="hover:text-cyan-400"
              >
                Inchcape en una mirada
              </a>
            </li>
            <li>
              <a href="/acciones" className="hover:text-cyan-400">
                Entendiendo el problema
              </a>
            </li>
            <li>
              <a href="/reportar" className="hover:text-cyan-400">
                Atención de casos
              </a>
            </li>
            <li>
              <a
                href="https://www.inchcape.com/es-co/sostenibilidad"
                className="hover:text-cyan-400"
              >
                Sostenibilidad
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Ubicación</h3>

          <p className="text-sm mb-4">
            Avenida El Polo 1117, Surco.
            <br />
            Lima, Perú.
          </p>

          <a
            href="https://www.google.com/maps?q=Avenida+El+Polo+1117+Surco+Lima+Peru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline text-sm"
          >
            Ver en mapa →
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 items-center text-sm">
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://www.inchcape.com/es-co/site-services/cookie-policy"
              className="hover:text-cyan-400"
            >
              Cookies
            </a>
            <a
              href="https://www.inchcape.com/es-co/site-services/politica-de-privacidad"
              className="hover:text-cyan-400"
            >
              Politica de Privacidad
            </a>
            <a
              href="https://www.inchcape.com/es-co/site-services/politica-de-privacidad"
              className="hover:text-cyan-400"
            >
              Informacion Legal
            </a>
            <a href="https://www.inchcape.com/es-co/site-services/accesibilidad">
              Accesibilidad
            </a>
          </div>

          <p className="text-gray-500 text-center">
            © 2026 Respeto en la industria. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
