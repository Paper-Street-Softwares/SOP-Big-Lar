import { useState, useEffect, useRef } from "react";
import Navbar from "../sectionElements/Navbar";
import Logo from "../../assets/importAssets/logo.webp";
import ListGroup from "../sectionElements/ListGroup";
import Sidebar from "../sectionElements/Sidebar";
import HeadlessDemo from "../sectionElements/Sidebar2";
import ButtonWithIconNavbar from "../interactives/ButtonWithIconNavbar";
import whatsappNumber from "../../abstractions/whats";

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

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const textColor = scrolling ? "text-black" : "text-white";
  const bgColor = scrolling ? "bg-black" : "bg-white";

  return (
    <div className="w-full">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolling
            ? "bg-white backdrop-blur-md shadow-sm border-b py-2"
            : "bg-transparent py-3 text-black"
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
              className="w-auto h-full object-contain"
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
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326z" />
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
            <div className="hidden desktop1:flex items-center gap-8 text-sm font-medium">
              {["home", "sobre", "servicos", "contato"].map((id) => (
                <button
                  key={id}
                  onClick={() => handleScrollTo(id)}
                  className="relative group"
                >
                  <span className={`${textColor} transition`}>{id}</span>
                  <span
                    className={`absolute left-0 -bottom-1 w-0 h-[2px] ${bgColor} transition group-hover:w-full`}
                  ></span>
                </button>
              ))}

              <a href={whatsappContactLink} onClick={handleWhatsAppClick}>
                <ButtonWithIconNavbar label="Contato" />
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
