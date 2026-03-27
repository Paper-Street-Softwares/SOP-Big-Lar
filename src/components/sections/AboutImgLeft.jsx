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
          Big Lar imóveis, foi criada para atender clientes que desejam comprar
          e vender com segurança, tendo um acompanhamento desde a compra ou
          venda até o registro do imóvel. Empresa criada por Carlos Barbosa, com
          experiência de mais de 40 anos no mercado de serviços.
          <br />
          <br />
          Essa experiência permitiu agregar conhecimento em operações voltadas
          para os mais diversos segmentos que compõem esse mercado.
          <br />
          <br />
          Aliada a toda essa expertise, estamos sempre ligados em inovações e
          nas novidades do mercado, tudo para você ter sossego e segurança,
          garantindo ao seu imóvel a atenção e o toque de sofisticação que ele
          merece.
          <br />
          <br />
          Nossa empresa tem como padrão um atendimento personalizado, contamos
          com consultores especialistas aptos a orientar seus clientes de forma
          a garantir o melhor negócio com segurança, sigilo e transparência.
          <br />
          <br />
          Nossa estratégia de comunicação foca o mercado de alto padrão, sem
          deixar de lado àqueles que desejam comprar imóveis, seja para morar ou
          investir <br />
          <br />
          Conte conosco para realizar bons negócios e conquistar os seus sonhos!
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
