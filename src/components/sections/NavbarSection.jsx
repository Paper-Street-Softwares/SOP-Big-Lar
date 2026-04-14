import { useState, useEffect, useRef } from "react";
import Navbar from "../sectionElements/Navbar";
import Logo from "../../assets/importAssets/logo.webp";
import ListGroup from "../sectionElements/ListGroup";
import Sidebar from "../sectionElements/Sidebar";
import HeadlessDemo from "../sectionElements/Sidebar2";
import ButtonWithIconNavbar from "../interactives/ButtonWithIconNavbar";
import whatsappNumber from "../../abstractions/whats";
import { Link } from "react-scroll";

export default function NavbarSection() {
  const [scrolling, setScrolling] = useState(false);
  const [showListGroup, setShowListGroup] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSidebarContent, setShowSidebarContent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const sidebarRef = useRef(null);

  const whatsappContactLink = `https://wa.me/${whatsappNumber}`;
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    setIsRedirecting(true);

    setTimeout(() => {
      window.location.href = whatsappContactLink;
      setIsRedirecting(false);
    }, 600);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 20);
    };

    const handleResize = () => {
      setShowListGroup(window.innerWidth >= 768);
    };

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        handleCloseSidebar();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setShowSidebar((prev) => !prev);
    setShowSidebarContent((prev) => !prev);

    setTimeout(() => setIsAnimating(false), 400);
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
    setShowSidebarContent(false);
    setIsAnimating(false);
  };

  const handleSidebarItemClick = () => {
    handleCloseSidebar();
  };

  // const handleScrollTo = (id) => {
  //   const el = document.getElementById(id);

  //   if (el) {
  //     const yOffset = -80;
  //     const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

  //     window.scrollTo({ top: y, behavior: "smooth" });
  //   }
  // };
  const textColor = scrolling ? "text-white" : "text-white";
  const bgColor = scrolling ? "bg-white" : "bg-white";

  return (
    <div className="w-full">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolling
            ? "bg-secondary backdrop-blur-md shadow-sm border-b py-2"
            : " py-4 bg-secondary"
        }`}
      >
        <Navbar>
          {/* LOGO */}
          <a
            className="cursor-pointer flex items-center h-[60px]"
            href="/"
            onClick={() => window.location.reload()}
          >
            <img
              src={Logo}
              alt="Logo"
              className="object-contain w-auto h-full"
            />
          </a>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* botão whatsapp tablet */}
            <div className="hidden tablet1:flex desktop1:hidden">
              <a href={whatsappContactLink} onClick={handleWhatsAppClick}>
                <ButtonWithIconNavbar
                  label={isRedirecting ? "..." : "Contato"}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                  }
                />
              </a>
            </div>

            {/* menu mobile */}
            <div className="flex desktop1:hidden">
              <HeadlessDemo isSolid={scrolling} />
            </div>
          </div>

          {/* MENU DESKTOP */}
          {showListGroup && (
            <div className="items-center hidden gap-8 text-sm font-medium desktop1:flex">
              {[
                { id: "home", label: "Início", offset: -100 },
                { id: "about", label: "Sobre", offset: -80 },
                { id: "service", label: "Serviços", offset: -80 },
                { id: "faq", label: "Perguntas", offset: -80 },
              ].map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={item.offset}
                  className={`cursor-pointer relative group ${textColor}`}
                >
                  <span className="transition opacity-80 group-hover:opacity-100">
                    {item.label}
                  </span>

                  <span
                    className={`absolute left-0 -bottom-1 w-0 h-[2px] ${bgColor} transition-all duration-300 group-hover:w-full`}
                  ></span>
                </Link>
              ))}

              <a href={whatsappContactLink} onClick={handleWhatsAppClick}>
                <ButtonWithIconNavbar
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                  }
                  label="Contato"
                />
              </a>
            </div>
          )}
        </Navbar>

        {/* SIDEBAR */}
        <div
          ref={sidebarRef}
          className={`transition-all duration-300 ${
            showSidebar ? "block" : "hidden"
          }`}
        >
          <Sidebar
            showSidebar={showSidebarContent}
            handleCloseSidebar={handleCloseSidebar}
            handleSidebarItemClick={handleSidebarItemClick}
          />
        </div>
      </div>
    </div>
  );
}
