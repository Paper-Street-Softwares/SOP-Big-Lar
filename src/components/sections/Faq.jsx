import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import AccordionExpandDefault from "../interactives/AcordionTwo";
import whatsappNumber from "../../abstractions/whats";
import SectionHeaderNovo from "../../components/sectionElements/SectionHeaderNovo";

const whatsappContactLink = `https://wa.me/` + `${whatsappNumber}`;

export default function Faq() {
  return (
    <SectionArea id="faq" className="bg-quinary">
      <SectionHeaderNovo
        miniTitle="TIRE SUAS DÚVIDAS"
        title="Perguntas Frequentes"
        subtitle="Confira as perguntas abaixo para esclarecer suas dúvidas. "
      />

      <SectionWrapper className="flex justify-center">
        <MotionDivDownToUp className="w-full flex justify-center">
          <div className="w-[90%] tablet1:w-[80%] desktop1:w-[80%] max-w-[860px] mb-[26px] tablet1:mb-[40px] ">
            <AccordionExpandDefault />
          </div>
        </MotionDivDownToUp>
        <MotionDivDownToUp>
          <Paragraphs className="text-center">
            <a
              href={whatsappContactLink}
              target="_blank"
              className="transition text-secondary hover:underline"
            >
              Clique aqui caso tenha mais dúvidas
            </a>
          </Paragraphs>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
