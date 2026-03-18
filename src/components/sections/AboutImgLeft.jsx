import React, { useState } from "react";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgAboutPerson from "../../assets/imgs/about/aboutRita.png";
import ButtonWithIcon from "../interactives/ButtonWithIcon";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import AboutFading from "../sectionElements/AboutFading";

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
        setModalTitle("Sobre mim");
        setModalContent(
          <p>
            Olá, sou Rita de Cassia Sobreira de Almeida. <br></br>
            Por questões profissionais decidi adquirir o nome, Rita Almeida,
            para melhor comunicação nas redes sociais. <br /> <br />
            Tenho formação acadêmica em administração de empresas há 30 anos, e
            formação técnica corretora de imóveis há 10.
            <br />
            <br></br>Ser corretora de imóveis foi uma indicação de pessoas
            próximas a mim, incentivaram pela minha personalidade comunicativa e
            performance de conhecimento. <br />
            <br />
            Sou católica e acredito que Deus tem um caminho para todos!
            <br />
            <br />
            Cada dia traz um novo desafio e a oportunidade de ajudar alguém a
            encontrar o local ideal para chamar de lar. Continuo empregando as
            habilidades de administração no meu dia a dia, gerenciando não
            apenas propriedades, mas também sonhos e expectativas.
          </p>
        );
        setVisible(true);
        setButtonLabel("Leia mais"); // Retorna o label ao estado original
      }, 1000); // Aguarda 1 segundo
    } else {
      // Se a tela for maior, abre o modal diretamente sem mudar o label
      setModalTitle("Sobre mim");
      setModalContent(
        <p>
          Olá, sou Rita de Cassia Sobreira de Almeida. <br></br>
          Por questões profissionais decidi adquirir o nome, Rita Almeida, para
          melhor comunicação nas redes sociais. <br /> <br />
          Tenho formação acadêmica em administração de empresas há 30 anos, e
          formação técnica corretora de imóveis há 10.
          <br />
          <br></br>Ser corretora de imóveis foi uma indicação de pessoas
          próximas a mim, incentivaram pela minha personalidade comunicativa e
          performance de conhecimento. <br />
          <br />
          Sou católica e acredito que Deus tem um caminho para todos!
          <br />
          <br />
          Cada dia traz um novo desafio e a oportunidade de ajudar alguém a
          encontrar o local ideal para chamar de lar. Continuo empregando as
          habilidades de administração no meu dia a dia, gerenciando não apenas
          propriedades, mas também sonhos e expectativas.
        </p>
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
          <MotionDivDownToUp>
            <SectionTitles className="mb-[18px] desktop1:mb-[26px]">
              Sobre mim 👋
            </SectionTitles>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <AboutFading />
          </MotionDivDownToUp>
          <MotionDivDownToUp className="mt-[40px]">
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
        className=" font-secondFont"
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
