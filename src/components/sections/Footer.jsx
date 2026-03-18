import { Link } from "react-scroll";
import { Phone, Mail } from "lucide-react";
import whatsappNumber from "../../abstractions/whats";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Logo from "../../assets/importAssets/Logo.png";

const whatsappContactLink = `https://wa.me/` + `${whatsappNumber}`;

function Footer() {
  return (
    <footer className="bg-secondary full gap-y-[42px] text-white font-secondFont text-left text-paragraph4 flex flex-col py-[26px] phone3:py-[48px] justify-between items-center">
      <div className=" w-[90%] max-w-[1215px] flex flex-col gap-y-[42px] desktop1:flex-row desktop1:justify-between">
        <MotionDivDownToUp>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
            <img
              alt="Logo"
              src={Logo}
              className="w-[55px] h-auto my-[30px]"
            ></img>
            <p className="full opacity-70">
              Transformando desejos em endereços.
            </p>
            <div className="flex full gap-x-[8px] items-center opacity-70">
              <Phone
                size={24}
                aria-label="Ícone de Telefone"
                strokeWidth={1}
                className="text-white"
              />
              <a
                href={whatsappContactLink}
                target="_blank"
                className="hover:underline"
              >
                (87) 98812-4109
              </a>
            </div>
            <div className="flex full gap-x-[8px] items-center opacity-70">
              <Mail
                size={24}
                aria-label="Ícone de Carta"
                strokeWidth={1}
                className="text-white"
              />
              <p>contato@ritaimoveispnz.com.br</p>
            </div>
          </div>
        </MotionDivDownToUp>
        <MotionDivDownToUp>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
            <h1 className="font-medium font-mainFont text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
              ATÉ MAIS!
            </h1>
            <div className="flex full gap-x-[8px] items-center opacity-70">
              <p className="text-title4">👋</p>
              <p>Obrigada pela confiança!</p>
            </div>
            <div className="flex full gap-x-[8px] items-center opacity-70">
              <p className="text-title4">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bookmark"
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                </svg>
              </p>
              <p>Salve para visitar mais tarde!</p>
            </div>
          </div>
        </MotionDivDownToUp>
        <MotionDivDownToUp>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
            <h1 className="font-medium font-mainFont text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
              NAVEGAÇÃO
            </h1>
            <div className="flex justify-between full opacity-70">
              <div className="w-[46%] flex flex-col gap-y-[16px] font-semibold ">
                <div className="h-[36px] ">
                  <Link
                    to="home"
                    className="cursor-pointer hover:underline"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    href="#"
                  >
                    Início
                  </Link>
                </div>
                <div className="h-[36px] ">
                  <Link
                    to="service"
                    className="cursor-pointer hover:underline"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-20}
                    href="#"
                  >
                    Serviços
                  </Link>
                </div>
              </div>
              <div className=" w-[46%] flex flex-col gap-y-[16px] font-semibold ">
                <div className="h-[36px] ">
                  <Link
                    to="about"
                    className="cursor-pointer hover:underline"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    href="#"
                  >
                    Sobre Mim
                  </Link>
                </div>
                <div className="h-[36px] ">
                  <Link
                    to="faq"
                    className="cursor-pointer hover:underline"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    href="#"
                  >
                    Perguntas Frequentes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MotionDivDownToUp>
      </div>

      <div className="hidden w-[88%] max-w-[1110px] h-px bg-white"></div>

      <div className="text-center w-[88%] max-w-[1110px] flex flex-col mb-[48px] phone2:mb-[80px] tablet1:mb-0">
        <p className="w-full opacity-70">
          2024 - Rita Almeida Corretora de Imóveis - Todos os direitos
          reservados
        </p>
        <p>
          <a
            className="transition hover:underline opacity-70"
            target="_blank"
            href="https://www.paperstreet.com.br"
          >
            {" "}
            Gostaria de ter um site como este? Clique aqui
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
