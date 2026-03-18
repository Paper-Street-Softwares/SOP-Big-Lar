import FeatureImgOnBgCard from "../cards/FeatureImgOnBgCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgCasas from "../../assets/imgs/features/featuresCasas.png";
import imgAps from "../../assets/imgs/features/featuresApartamentos.png";
import imgTerrenos from "../../assets/imgs/features/featuresTerrenos.png";
import imgPontos from "../../assets/imgs/features/featuresPontosComerciais.png";

export default function Featuresv1() {
  return (
    <SectionArea id="service" className="bg-quinary desktop1:pb-[0px]">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Trabalhamos com todos os tipos de imóveis"
        sectionHeaderSubtitle="Temos diversas opções imobiliárias que se encaixam perfeitamente no seu futuro"
      />
      <SectionWrapper>
        <div
          className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px]"
          
        >
          <FeatureImgOnBgCard
            bgImg={imgCasas}
            title="Casas"
            description="Descubra a casa dos seus sonhos!"
          />
          <FeatureImgOnBgCard
            bgImg={imgAps}
            title="Apartamentos"
            description="Praticidade em nossos apartamentos sofisticados."
          />
          <FeatureImgOnBgCard
            bgImg={imgTerrenos}
            title="Terrenos"
            description="Construa a realidade que você deseja em nossos terrenos bem localizados."
          />
          <FeatureImgOnBgCard
            bgImg={imgPontos}
            title="Pontos Comerciais"
            description="Posicione seu negócio para o sucesso!"
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
