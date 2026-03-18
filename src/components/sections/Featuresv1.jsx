import FeatureImgOnBgCard from "../cards/FeatureImgOnBgCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgCasas from "../../assets/imgs/features/features1.webp";
import imgAps from "../../assets/imgs/features/features2.webp";
import imgTerrenos from "../../assets/imgs/features/features3.webp";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";

export default function Featuresv1() {
  return (
    <SectionArea id="service" className="bg-quinary">
      <SectionHeaderNovo
        miniTitle="SERVIÇOS"
        title="Soluções completas em imóveis"
        subtitle="Ajudamos você a comprar ou vender com segurança e tranquilidade."
      />
      <SectionWrapper>
        <div className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px]">
          <FeatureImgOnBgCard
            bgImg={imgCasas}
            title="Compra de Imóveis"
            description="Encontre o imóvel ideal com segurança e apoio total."
          />
          <FeatureImgOnBgCard
            bgImg={imgAps}
            title="Venda de Imóveis"
            description="Venda seu imóvel mais rápido e pelo melhor valor."
          />
          <FeatureImgOnBgCard
            bgImg={imgTerrenos}
            title="Compra e Venda de Lotes"
            description="Oportunidades de lotes para investir ou construir e encontre compradores interessados"
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
