import { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import "primeicons/primeicons.css";

export default function HeadlessDemo() {
  const [visible, setVisible] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState(true); // controla a visibilidade do submenu
  const [reportsSubmenuVisible, setReportsSubmenuVisible] = useState(false);
  const [revenueSubmenuVisible, setRevenueSubmenuVisible] = useState(false);
  const [aplicationSubmenuVisible, setAplicationSubmenuVisible] =
    useState(true);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => {
    // Escurece o fundo do site
    setVisible(!visible);
  };
  const toggleSubmenu = () => {
    setSubmenuVisible((prev) => !prev); // Alterna o estado do submenu
  };
  const toggleReportsSubmenu = () => {
    setReportsSubmenuVisible((prev) => !prev); // Alterna o submenu "Reports"
  };
  const toggleRevenueSubmenu = () => {
    setRevenueSubmenuVisible((prev) => !prev); // Alterna o submenu "Revenue"
  };
  const toggleaplicationSubmenu = () => {
    setAplicationSubmenuVisible((prev) => !prev); // Alterna o submenu "Reports"
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="inset-0 z-10 flex ">
      <div
        className={`${
          visible ? "block" : "hidden"
        } fixed inset-0 bg-black opacity-50 lg:hidden`}
        onClick={toggleSidebar}
      ></div>
      <div className="flex justify-center card ">
        <Button
          className={`p-button-rounded p-button-outlined text-[30px] lg:hidden ${scrolled ? 'text-black' : 'text-white'}`}
          icon="pi pi-bars"
          onClick={() => setVisible(true)}
        />
        <Sidebar
          visible={visible}
          onHide={() => setVisible(false)}
          content={({ closeIconRef, hide }) => (
            <div
              className="relative flex min-h-screen bg-blue-600  lg:hidden surface-ground"
              style={{ width: "280px" }}
            >
              <div
                id="app-sidebar-2"
                className="absolute top-0 left-0 flex-shrink-0 h-screen bg-white select-none surface-section lg:hidden lg:static z-1 border-right-1 surface-border"
                style={{ width: "280px" }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between flex-shrink-0 px-4 pt-3">
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className=" mt-[5px] "
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                      <span className="text-2xl font-semibold text-cyan-500">
                        Your Logo
                      </span>
                    </span>
                    <span>
                      <Button
                        type="button"
                        ref={closeIconRef}
                        onClick={(e) => hide(e)}
                        icon="pi pi-times"
                        rounded
                        outlined
                        className="h-2rem w-2rem pt-[5px]"
                      ></Button>
                    </span>
                  </div>
                  <div className="overflow-y-auto">
                    <ul className="p-3 m-0 list-none">
                      <li>
                        <StyleClass>
                          <div
                            className="flex items-center justify-between p-3 cursor-pointer p-ripple text-600"
                            onClick={toggleSubmenu}
                          >
                            <span className="text-gray-700  font-mainFont">
                              FAVORITES
                            </span>
                            <i className="pi pi-chevron-down"></i>
                            <Ripple />
                          </div>
                        </StyleClass>
                        {submenuVisible && (
                          <ul className="p-0 m-0 overflow-hidden font-medium text-gray-700 list-none font-mainFont">
                            <li>
                              <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                <i className="mr-2 pi pi-home"></i>
                                <span className="">Dashboard</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                <i className="mr-2 pi pi-bookmark"></i>
                                <span className="">Bookmarks</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <StyleClass>
                                <div
                                  className="flex items-center justify-between p-3 cursor-pointer p-ripple text-600"
                                  onClick={toggleReportsSubmenu}
                                >
                                  <span className="">
                                    <i className="pi pi-chart-line mr-[9px] "></i>
                                    Reports
                                  </span>
                                  <i className="pi pi-chevron-down"></i>
                                  <Ripple />
                                </div>
                              </StyleClass>
                              {reportsSubmenuVisible && (
                                <ul className="p-0 m-0 overflow-hidden list-none">
                                  <li>
                                    <StyleClass>
                                      <div
                                        className="p-ripple p-3 ml-[20px] flex items-center justify-between text-600 cursor-pointer"
                                        onClick={toggleRevenueSubmenu}
                                      >
                                        <span className="">
                                          <i className="mr-2 pi pi-chart-line"></i>
                                          Revenue
                                        </span>
                                        <i className="pi pi-chevron-down"></i>
                                        <Ripple />
                                      </div>
                                    </StyleClass>
                                    {revenueSubmenuVisible && (
                                      <ul className="py-0 pl-3 m-0 overflow-y-hidden list-none transition-all duration-500 ease-in-out pr-">
                                        <li>
                                          <a className="p-ripple flex items-center cursor-pointer p-3 pl-[15%] border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="mr-2 pi pi-table"></i>
                                            <span className="">View</span>
                                            <Ripple />
                                          </a>
                                        </li>
                                        <li>
                                          <a className="p-ripple flex items-center cursor-pointer p-3 pl-[15%] border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="mr-2 pi pi-search"></i>
                                            <span className="">Search</span>
                                            <Ripple />
                                          </a>
                                        </li>
                                      </ul>
                                    )}
                                  </li>
                                  <li>
                                    <a className="p-ripple flex items-center cursor-pointer p-3 ml-[20px] border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                      <i className="mr-2 pi pi-chart-line"></i>
                                      <span className="">Expenses</span>
                                      <Ripple />
                                    </a>
                                  </li>
                                </ul>
                              )}
                            </li>
                            <ul className="p-0 m-0 list-none">
                              <li>
                                <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                  <i className="mr-2 pi pi-users"></i>
                                  <span className="">Team</span>
                                  <Ripple />
                                </a>
                              </li>
                              <li>
                                <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                  <i className="mr-2 pi pi-comments"></i>
                                  <span className="">Messages</span>
                                  <span
                                    className="inline-flex items-center justify-center ml-auto bg-blue-500 text-white rounded-[15px]"
                                    style={{
                                      minWidth: "1.5rem",
                                      height: "1.5rem",
                                    }}
                                  >
                                    3
                                  </span>
                                  <Ripple />
                                </a>
                              </li>
                              <li>
                                <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                  <i className="mr-2 pi pi-calendar"></i>
                                  <span className="">Calendar</span>
                                  <Ripple />
                                </a>
                              </li>
                              <li>
                                <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                  <i className="mr-2 pi pi-cog"></i>
                                  <span className="">Settings</span>
                                  <Ripple />
                                </a>
                              </li>
                            </ul>
                          </ul>
                        )}
                      </li>
                    </ul>
                    <ul className="p-3 m-0 list-none">
                      <li>
                        <StyleClass>
                          <div
                            className="flex items-center justify-between p-3 text-gray-700 cursor-pointer p-ripple text-600 font-mainFont"
                            onClick={toggleaplicationSubmenu}
                          >
                            <span className="">APLICATION</span>
                            <i className="pi pi-chevron-down"></i>
                            <Ripple />
                          </div>
                        </StyleClass>
                        {aplicationSubmenuVisible && (
                          <ul className="p-0 m-0 overflow-hidden text-gray-700 list-none font-mainFont">
                            <li>
                              <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                <i className="mr-2 pi pi-folder"></i>
                                <span className="">Projects</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                <i className="mr-2 pi pi-chart-bar"></i>
                                <span className="">Performance</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                <i className="mr-2 pi pi-cog"></i>
                                <span className="">Settings</span>
                                <Ripple />
                              </a>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <hr className="mx-3 mb-3 border-top-1 surface-border" />
                    <a
                      v-ripple
                      className="flex items-center gap-2 p-3 m-3 transition-colors cursor-pointer border-round text-700 hover:surface-100 transition-duration-150 p-ripple"
                    >
                      <Avatar
                        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                        shape="circle"
                      />
                      <span className="font-bold">Paper Street</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        ></Sidebar>
      </div>
         
    </div>
  );
}
