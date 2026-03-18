import { useState } from "react";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import bgImage from "../../assets/imgs/hero/bgHero.webp";
import whatsappNumber from "../../abstractions/whats";
import ButtonWithIcon from "../interactives/ButtonWithIcon";

const whatsappContactLink = `https://wa.me/` + `${whatsappNumber}`;

export default function HeroSection() {
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
    <div className="font-mainFont" id="home">
      <div
        className="w-full bg-center bg-cover"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="flex flex-col items-center bg-black bg-opacity-50">
          <div className="flex h-[120px] phone2:h-[120px] tablet1:h-[145px] desktop3:h-[145px]" />
          <div className="flex flex-col w-[90%] max-w-[1215px] items-start pb-[80px] pt-[50px] desktop1:pb-[100px] desktop1:pt-[80px]">
            <div className="desktop1:w-[700px] flex flex-col text-white">
              <MotionDivLeftToRight>
                <div className="w-auto text-center desktop1:text-left font-secondFont phone1:text-paragraph4">
                  <p className="mb-[24px] bg-black bg-opacity-25 rounded-2xl px-[16px] py-[6px] inline-block">
                    Corretora de imóveis em Petrolina
                  </p>
                </div>
              </MotionDivLeftToRight>
              <MotionDivLeftToRight>
                <div className="font-medium leading-none text-center desktop1:text-left text-title6 phone1:text-[36px] phone2:text-[40px] phone3:text-[44px] tablet1:text-[48px] desktop1:text-[56px]">
                  <h1 className=" mb-[24px]">
                    Transformando desejos em endereços
                  </h1>
                </div>
              </MotionDivLeftToRight>
              <MotionDivLeftToRight>
                <div className="text-center desktop1:text-left phone1:w-full font-secondFont phone1:text-title1">
                  <p className="mb-[48px]">
                    Com paixão e excelência, o lar ideal é nossa especialidade!
                  </p>
                </div>
              </MotionDivLeftToRight>
              <div className="w-full phone2:w-full tablet2:w-auto">
                <MotionDivLeftToRight>
                  <div className="justify-center hidden w-full desktop1:flex desktop1:justify-start">
                    <a href={whatsappContactLink} target="_blank">
                      <ButtonWithIcon
                        label="Consultar Imóveis"
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
                  <div className="flex justify-center w-full desktop1:hidden desktop1:justify-start">
                    <a href={whatsappContactLink} onClick={handleWhatsAppClick}>
                      <ButtonWithIcon
                        label={
                          isRedirecting
                            ? "Redirecionando..."
                            : "Consultar Imóveis"
                        }
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
                </MotionDivLeftToRight>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
