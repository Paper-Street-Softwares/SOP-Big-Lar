import React, { useState } from "react";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgAboutPerson from "../../assets/imgs/about/about.webp";
import ButtonWithIcon from "../interactives/ButtonWithIcon";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import AboutFading from "../sectionElements/AboutFading";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";

export default function AboutImgLeft() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Leia mais");

  const onClick = () => {
    // Verifica se a largura da tela é menor que 1023px
    if (window.innerWidth < 1023) {
      // Muda o label do botão para "Aguarde..."
      setButtonLabel("Aguarde...");

      // Aguarda 1 segundo antes de abrir o modal
      setTimeout(() => {
        setModalTitle("Sobre a Big Lar");
        setModalContent(<p>A_Definir</p>);
        setVisible(true);
        setButtonLabel("Leia mais"); // Retorna o label ao estado original
      }, 1000); // Aguarda 1 segundo
    } else {
      // Se a tela for maior, abre o modal diretamente sem mudar o label
      setModalTitle("Sobre a Big Lar");
      setModalContent(
        <p>
          A Big Lar Imóveis reúne corretores associados qualificados para
          atender clientes que buscam imóveis e lotes na região de Brasília.
          Nosso foco é conectar pessoas às melhores oportunidades do mercado
          imobiliário.
          <br />
          <br />
          Atuamos com profissionalismo e conhecimento da região, oferecendo
          suporte completo para quem deseja comprar ou vender com segurança e
          tranquilidade.
          <br />
          <br />
          Atendemos principalmente clientes de médio e alto padrão que valorizam
          um atendimento personalizado, discrição nas negociações e imóveis bem
          selecionados.
          <br />
          <br />
          Mais do que intermediar negócios, trabalhamos para garantir uma
          experiência segura, transparente e eficiente em cada etapa da
          negociação.
        </p>,
      );
      setVisible(true);
    }
  };

  return (
    <SectionArea id="about" className="">
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px] desktop1:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="w-[100%] desktop1:w-[415px] desktop2:w-[485px]">
          <img
            src={imgAboutPerson}
            alt="Foto de pessoa"
            className="w-full rounded-2xl"
          />
        </MotionDivDownToUp>

        <div className="desktop1:w-[450px] desktop2:w-[570px]">
          <SectionHeaderNovo
            miniTitle="QUEM É A BIG LAR IMÓVEIS"
            title="Especialistas em bons negócios"
            subtitle="Corretores qualificados para atender clientes exigentes em Brasília."
            className={`desktop1:hidden`}
          />
          <SectionHeaderNovo
            miniTitle="QUEM É A BIG LAR IMÓVEIS"
            title="Especialistas em bons negócios"
            subtitle="Corretores qualificados para atender clientes exigentes em Brasília."
            type="article"
            className={`hidden desktop1:flex flex-col ml-0`}
          />
          <MotionDivDownToUp className={``}>
            <AboutFading />
          </MotionDivDownToUp>
          <MotionDivDownToUp className="mt-[40px] flex justify-center desktop1:justify-start">
            <ButtonWithIcon
              className=""
              label={buttonLabel}
              onClick={onClick}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              }
            />
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
      <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        <p className="m-0 ">{modalContent}</p>
      </Dialog>
    </SectionArea>
  );
}
