import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgAboutPhone from "../../assets/imgs/about/phoneMockup.png";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import ButtonWithIcon from "../interactives/ButtonWithIcon";
import ButtonWithIconLight from "../interactives/ButtonWithIconLight";

export default function AboutImgRight() {
  return (
    <SectionArea className="bg-quinary">
      <SectionWrapper className="flex flex-col-reverse desktop1:flex-row gap-[40px] desktop1:gap-0 desktop1:justify-evenly">
        <div className="desktop1:w-[450px] desktop2:w-[570px]">
          <MotionDivDownToUp>
            <SectionTitles className="mb-[18px] desktop1:mb-[26px]">
              Me siga nas redes sociais
            </SectionTitles>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <Paragraphs className="mb-[36px] phone3:mb-[60px] desktop1:mb-[92px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </Paragraphs>
          </MotionDivDownToUp>
          <div className=" flex flex-col gap-[16px] w-[100%] tablet1:w-[60%] desktop1:w-[80%] desktop2:w-[60%]">
            <ButtonWithIconLight
              label="Me siga no instagram"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              }
            />
            <ButtonWithIconLight
              label="Me siga no Twitter"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              }
            />
            <ButtonWithIconLight
              label="Me siga no Facebook"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              }
            />
          </div>
        </div>

        <img
          src={imgAboutPhone}
          alt="Foto de celular"
          className="w-[100%] desktop1:w-[415px] desktop2:w-[300px]"
        />
      </SectionWrapper>
    </SectionArea>
  );
}
