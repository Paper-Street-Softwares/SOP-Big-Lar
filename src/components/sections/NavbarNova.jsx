import { useState, useEffect, useRef } from "react";
import Navbar from "../sectionElements/Navbar";
import Logo from "../../assets/importAssets/logo.webp";
import ListGroup from "../sectionElements/ListGroup";
import Sidebar from "../sectionElements/Sidebar";
import { Link as ScrollLink } from "react-scroll";
import HeadlessDemo from "../sectionElements/Sidebar2";
import { px } from "framer-motion";
import ButtonWithIconNavbar from "../interactives/ButtonWithIconNavbar";
import whatsappNumber from "../../abstractions/whats";

function NavbarNovaTemplate({
  colorMode,
  backgrondMode,
  backgrondModeActive,
  textOpacity,
  hoverLinks,
  colorMenu,
  bgOpacitySidebar,
  borderButtons,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //   const labels = content.texts.navbar.menuItems;
  //   const ids = content.texts.navbar.menuId;

  switch (colorMode) {
    case "light":
      backgrondMode = "bg-white";
      textOpacity = "text-corTitulosPreto";
      hoverLinks = " bg-gradient-to-r from-primaryDark to-primaryDark ";
      colorMenu = "text-primaryDark";
      bgOpacitySidebar = "bg-white/70";
      backgrondModeActive = "bg-transparent";

      break;
    case "dark":
      backgrondMode = "bg-black";
      textOpacity = "text-corOutrosTextosBranca";
      hoverLinks = " bg-gradient-to-r from-primaryLight to-primaryLight ";
      colorMenu = "text-primaryLight";
      bgOpacitySidebar = "bg-black/70";
      backgrondModeActive = "bg-transparent";

      break;
    case "defaultDark":
      backgrondMode = "bg-primaryDark";
      textOpacity = "text-corTitulosBranca";
      hoverLinks = " bg-gradient-to-r from-white to-white ";
      colorMenu = "text-white";
      bgOpacitySidebar = "bg-white/70";
      backgrondModeActive = "bg-primaryDark";
      backgrondModeActive = "bg-transparent";
      break;

    case "defaultLight":
      backgrondMode = "bg-white";
      textOpacity = "text-corTitulosPreto";
      hoverLinks = " bg-gradient-to-r from-primaryDark to-primaryDark ";
      colorMenu = "text-primaryDark";
      bgOpacitySidebar = "bg-white/70";
      backgrondModeActive = "bg-transparent";
  }

  const whatsappContactLink = `https://wa.me/` + `${whatsappNumber}`;

  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleWhatsAppClick = (e) => {
    e.preventDefault(); // Evita redirecionamento imediato
    setIsRedirecting(true); // Estado de carregamento, se necessário

    setTimeout(() => {
      window.location.href = whatsappContactLink; // Redireciona para o link diretamente
      setIsRedirecting(false);
    }, 1000); // Atraso de 1 segundo
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled
          ? `${backgrondMode} backdrop-blur-md py-1 shadow-sm border-shadowHero/10 h-auto`
          : `${backgrondModeActive} border-border/40 py-0 phone2:h-auto`
      }`}
    >
      <div className="container flex items-center m-auto max-w-[1215px] h-full w-[90%] justify-between py-2">
        <div
          className={`flex flex-col z-20 relative ${
            isScrolled
              ? "w-[30%] h-[20px] phone2:w-[30%] phone2:h-[30px] tablet1:h-[50px] tablet1:w-[20%] desktop1:w-[10%] desktop1:h-[50px] desktop2:w-[13%] transition-all duration-700"
              : "w-[50%] h-[40px] phone2:py-3 phone2:w-[60%] phone2:h-[80px] tablet1:h-[80px] tablet1:w-[30%] desktop1:w-[20%] desktop1:h-[110px] desktop2:w-[15%] transition-all duration-700"
          }`}
        >
          <a
            className="cursor-pointer w-fit h-[80px] tablet1:h-[120px] desktop1:h-[110px] flex items-center justify-start overflow-hidden "
            href="/"
            onClick={() => window.location.reload()}
            aria-label="recarregar página"
          >
            <img
              src={Logo}
              alt="Logo"
              className="desktop1:hidden w-auto max-h-full object-contain flex"
              width={217}
              height={109}
              fetchPriority="high"
            />
            <img
              src={Logo}
              alt="Logo"
              className="hidden desktop1:block h-full w-auto object-contain"
              width={300}
              height={150}
              fetchPriority="high"
            />
          </a>
          <div className="flex items-center justify-between gap-[16px]">
            <div className="hidden tablet1:flex desktop1:hidden">
              <a href={whatsappContactLink} onClick={handleWhatsAppClick}>
                <ButtonWithIconNavbar
                  label={isRedirecting ? "Redirecionando..." : "Contato"}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-whatsapp"
                      viewBox="0 0 18 18"
                    >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                  }
                />
              </a>
            </div>
            <div className="flex items-center desktop1:hidden">
              <HeadlessDemo />
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        {/* <div className="hidden desktop1:flex items-center gap-8 text-sm font-secondFont font-medium">
          {labels.map((item, index) => {
            const id = ids[index];

            return (
              <ul>
                {" "}
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-label={`Link para ${item}`}
                    title={item}
                    data-track={id}
                    className={`cursor-pointer ${hoverLinks} bg-[length:0%_2px] bg-no-repeat bg-left-bottom pb-1 transition-[background-size] duration-300 hover:bg-[length:100%_2px] ${textOpacity} font-secondFont`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(id);
                      if (el) {
                        const yOffset = -70;
                        const y =
                          el.getBoundingClientRect().top +
                          window.scrollY +
                          yOffset;

                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
                  >
                    {item}
                  </a>
                </li>
              </ul>
            );
          })}
          <ButtonWithIconNavbar
            label={isRedirecting ? "Redirecionando..." : "Contato"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 18 18"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            }
          />
        </div> */}

        <div className=" lg:hidden ">
          <Sidebar colorMode={colorMode} />
        </div>
      </div>
    </nav>
  );
}

export default NavbarNovaTemplate;
