import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import AccordionExpandDefault from "../interactives/AcordionTwo";
import whatsappNumber from "../../abstractions/whats";

const whatsappContactLink = `https://wa.me/` + `${whatsappNumber}`;

export default function Faq() {
  return (
    <SectionArea id="faq" className="bg-quinary">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Perguntas Frequentes"
        sectionHeaderSubtitle="Confira as perguntas abaixo para esclarecer suas dúvidas. Estamos aqui para ajudar!"
      />

      <SectionWrapper className="flex justify-center">
        <MotionDivDownToUp className="w-full flex justify-center">
          <div className="w-[90%] tablet1:w-[80%] desktop1:w-[80%] max-w-[860px] mb-[26px] tablet1:mb-[40px] desktop1:mb-[80px]">
            <AccordionExpandDefault />
          </div>
        </MotionDivDownToUp>
        <MotionDivDownToUp>
          <Paragraphs className="text-center">
            Para demais dúvidas,{" "}
            <a
              href={whatsappContactLink}
              target="_blank"
              className="transition text-tertiary hover:underline"
            >
              {" "}
              fale comigo clicando aqui
            </a>
          </Paragraphs>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
