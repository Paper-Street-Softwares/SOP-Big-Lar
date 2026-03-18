import { Link } from "react-scroll";
import { PropTypes } from "prop-types";

export default function Sidebar({ showSidebar }) {
  return (
    <div
      className={`sidebar transition-transform transform ${
        showSidebar ? "animate-slide-down" : "animate-slide-up"
      }`}
    >
      <div className="mx-auto w-[88%] max-w-[1110px] tablet2:hidden">
        <div className="flex h-auto px-12 py-6 bg-white font-mainFont">
          <div className="overflow-y-auto">
            <ul className="text-black phone2:text-paragraph5 phone3:text-title1 tablet1:text-title2">
              <Link
                to="home"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <li className="mb-2">
                  <span className="hover:text-primary">Início</span>
                </li>
              </Link>
              <Link
                to="about"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-320}
              >
                <li className="mb-2">
                  <span className="hover:text-primary">Sobre Nós</span>
                </li>
              </Link>
              <Link
                to="products"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-320}
              >
                <li className="mb-2">
                  <span className="hover:text-primary">
                    Produtos e Acessórios
                  </span>
                </li>
              </Link>
              <Link
                to="courses"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-340}
              >
                <li className="mb-2">
                  <span className="hover:text-primary">Cursos e Palestras</span>
                </li>
              </Link>
              <Link
                to="faq"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-340}
              >
                <li className="mb-2">
                  <span className="hover:text-primary">
                    Perguntas Frequentes
                  </span>
                </li>
              </Link>
              <Link
                to="contact"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-450}
              >
                <li className="mb-2">
                  <span className="hover:text-primary">Contato</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  showSidebar: PropTypes.bool.isRequired,
};
