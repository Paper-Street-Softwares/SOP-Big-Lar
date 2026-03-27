import FeatureImgOnBgCard from "../cards/FeatureImgOnBgCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgCasas from "../../assets/imgs/features/features1.webp";
import imgAps from "../../assets/imgs/features/features2.webp";
import imgTerrenos from "../../assets/imgs/features/features3.webp";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Card } from "primereact/card";

export default function Featuresv1() {
  const [visibleVenda, setVisibleVenda] = useState(false);
  const [visibleCredito, setVisibleCredito] = useState(false);

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

        <div className="card flex flex-col tablet2:flex-row gap-10 mt-10 ">
          <Card
            title="VENDA"
            subTitle="Nada de dor de cabeça na hora de vender um imóvel: aqui oferecemos agilidade, segurança e tranquilidade para todas as negociações. Com experiência acumulada no mercado de imóveis residenciais e olhar inovador, trabalhamos com um formato de venda de imóveis prontos que une tecnologia e personalização."
            style={{ width: "100%", maxWidth: "600px" }}
            className="rounded-2xl font-secondFont shadow-2"
            footer={
              <Button
                label="Saiba mais"
                icon="pi pi-plus"
                onClick={() => setVisibleVenda(true)}
                className="w-fit p-button-outlined hover:scale-95 duration-300 transition-all cursor-pointer"
              />
            }
          ></Card>

          {/* --- CARD 2: CRÉDITO IMOBILIÁRIO --- */}
          <Card
            title="CRÉDITO IMOBILIÁRIO"
            subTitle={
              <>
                Estamos ao seu lado nesta grande conquista! <br />A compra de um
                imóvel representa a realização de um grande sonho e participar
                nesse momento de vida é sempre um privilégio para nós.
              </>
            }
            style={{
              width: "100%",
              maxWidth: "600px",
              display: "flex", // 1. Transforma o card em flex
              flexDirection: "column", // 2. Alinha os itens verticalmente
            }}
            // A classe 'flex-1' no body do card faz ele empurrar o footer para o fim
            className="rounded-2xl font-secondFont shadow-2 h-full"
            footer={
              <Button
                label="Saiba mais"
                icon="pi pi-plus"
                onClick={() => setVisibleCredito(true)}
                className="w-fit p-button-outlined hover:scale-95 duration-300 transition-all cursor-pointer"
              />
            }
          ></Card>

          {/* --- MODAL VENDA --- */}
          <Dialog
            header="VENDA"
            visible={visibleVenda}
            style={{ width: "90vw", maxWidth: "600px" }}
            onHide={() => setVisibleVenda(false)}
            headerClassName="pb-2"
            modal
            draggable={false}
          >
            <div className="py-2">
              Oferecemos:
              <br />
              <p className="mb-4 font-medium">
                Visitas acompanhadas por corretores especializados na
                região;{" "}
              </p>
              <ul className="list-none p-0 m-0">
                <li className="flex align-items-start mb-2">
                  <i className="pi pi-check text-green-500 mr-2 mt-1"></i>
                  Laudo de avaliação gratuito;
                </li>
                <li className="flex align-items-start mb-2">
                  <i className="pi pi-check text-green-500 mr-2 mt-1"></i>
                  Laudo de vistoria;{" "}
                </li>
                <li className="flex align-items-start mb-2">
                  <i className="pi pi-check text-green-500 mr-2 mt-1"></i>
                  Análise completa de documentação para modalidades de venda;
                </li>
                <li className="flex align-items-start mb-2">
                  <i className="pi pi-check text-green-500 mr-2 mt-1"></i>
                  Fotos profissionais, vídeos e tour virtual;{" "}
                </li>
                <li className="flex align-items-start mb-2">
                  <i className="pi pi-check text-green-500 mr-2 mt-1"></i>
                  Textos escritos de forma personalizada;
                </li>
                <li className="flex align-items-start mb-2">
                  <i className="pi pi-check text-green-500 mr-2 mt-1"></i>
                  Divulgação nos mais importantes portais do mercado e mídias
                  sociais;
                </li>
                <li className="flex align-items-start mb-2">
                  <i className="pi pi-check text-green-500 mr-2 mt-1"></i>
                  Filmagem com Drone e divulgação nas Redes Sociais;
                </li>
              </ul>
            </div>
          </Dialog>

          {/* --- MODAL CRÉDITO --- */}
          <Dialog
            header="CRÉDITO IMOBILIÁRIO"
            visible={visibleCredito}
            style={{ width: "90vw", maxWidth: "650px" }}
            onHide={() => setVisibleCredito(false)}
            headerClassName="pb-2"
            modal
            draggable={false}
          >
            <div className="py-2 line-height-3">
              Possuímos o financiamento certo para a compra de seu imóvel
              residencial ou comercial. Você pode financiar o valor do seu
              imóvel em até 35 anos. Com a possibilidade de incluir as despesas
              com a compra do imóvel em seu financiamento com utilização do
              FGTS.
              <br />
              <br />
              Trabalhamos também com o REFIN – empréstimo com imóvel em
              garantia. Também conhecido como refinanciamento imobiliário ou
              alienação fiduciária, esse é um tipo de crédito em que você
              utiliza seu imóvel como garantia de pagamento, dando acesso aos
              menores juros do mercado.
              <br />
              <br />
              Nessa modalidade de empréstimo, você consegue transformar até 60%
              do valor do seu imóvel em crédito para tirar seus planos do papel,
              abrir seu negócio e quitar suas dívidas.
              <br />
              <br />
              São aceitos como garantia: casas, apartamentos, imóveis comerciais
              e terrenos.
            </div>
          </Dialog>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
