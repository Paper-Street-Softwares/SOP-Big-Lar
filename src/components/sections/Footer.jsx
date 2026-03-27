import { Link } from "react-scroll";
import { Phone, Mail, MapPin, Clock, X } from "lucide-react";
import whatsappNumber from "../../abstractions/whats";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Logo from "../../assets/importAssets/logo.webp";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";

const whatsappContactLink = `https://wa.me/` + `${whatsappNumber}`;

function Footer() {
  const [visible, setVisible] = useState(false);

  const openDialog = async () => {
    await import("primereact/resources/themes/lara-light-cyan/theme.css");
    setVisible(true);
  };
  const Year = new Date().getFullYear();
  return (
    <footer className="bg-secondary full gap-y-[42px] text-white font-secondFont text-left text-paragraph4 flex flex-col py-[26px] phone3:py-[48px] justify-between items-center">
      <div className=" w-[90%] max-w-[1215px] flex flex-col gap-y-[42px] desktop1:flex-row desktop1:justify-between">
        <MotionDivDownToUp>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
            <img
              alt="Logo"
              src={Logo}
              className="w-[50%] h-auto my-[30px]"
            ></img>
            {/* <p className="full opacity-70">A_Definir</p> */}
            <div className="flex full gap-x-[8px] items-center opacity-70">
              <Phone
                size={24}
                aria-label="Ícone de Telefone"
                strokeWidth={1}
                className="text-white"
              />
              <a
                href={whatsappContactLink}
                target="_blank"
                className="hover:underline"
              >
                (61) 99228-0995
              </a>
            </div>
            {/* <div className="flex full gap-x-[8px] items-center opacity-70">
              <Mail
                size={24}
                aria-label="Ícone de Carta"
                strokeWidth={1}
                className="text-white"
              />
              <p>A_Definir</p>
            </div> */}
            <div className="flex full gap-x-[8px] items-center opacity-70">
              <Clock
                size={24}
                aria-label="Ícone de Carta"
                strokeWidth={1}
                className="text-white"
              />
              <p>Atendimento online 24h</p>
            </div>
          </div>
        </MotionDivDownToUp>
        <MotionDivDownToUp>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
            <h1 className="font-medium font-mainFont text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
              ATÉ MAIS!
            </h1>
            <div className="flex full gap-x-[8px] items-center opacity-70">
              <p className="text-title4">👋</p>
              <p>Obrigado pela confiança!</p>
            </div>
            <div className="flex full gap-x-[8px] items-center opacity-70">
              <p className="text-title4">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bookmark"
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                </svg>
              </p>
              <p>Salve para visitar mais tarde!</p>
            </div>
          </div>
        </MotionDivDownToUp>
        <MotionDivDownToUp>
          <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
            <h1 className="font-medium font-mainFont text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
              NAVEGAÇÃO
            </h1>
            <div className="flex justify-between full opacity-70">
              <div className="w-[46%] flex flex-col gap-y-[16px] font-semibold ">
                <div className="h-[36px] ">
                  <Link
                    to="home"
                    className="cursor-pointer hover:underline"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    href="#"
                  >
                    Início
                  </Link>
                </div>
                <div className="h-[36px] ">
                  <Link
                    to="service"
                    className="cursor-pointer hover:underline"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-20}
                    href="#"
                  >
                    Serviços
                  </Link>
                </div>
              </div>
              <div className=" w-[46%] flex flex-col gap-y-[16px] font-semibold ">
                <div className="h-[36px] ">
                  <Link
                    to="about"
                    className="cursor-pointer hover:underline"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    href="#"
                  >
                    Sobre Mim
                  </Link>
                </div>
                <div className="h-[36px] ">
                  <Link
                    to="faq"
                    className="cursor-pointer hover:underline"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    href="#"
                  >
                    Perguntas Frequentes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MotionDivDownToUp>
      </div>

      <div className="hidden w-[88%] max-w-[1110px] h-px bg-white"></div>

      <div className="text-center w-[88%] max-w-[1110px] flex flex-col mb-[48px] phone2:mb-[80px] tablet1:mb-0">
        <p className="w-full opacity-70">
          {Year} - Big Lar Imóveis - Todos os direitos reservados
        </p>
        <p className="opacity-70">
          Esse site não faz parte do Google LLC nem do Facebook Inc. e não
          oferecemos nenhum tipo de serviço oficial do governo. -{" "}
        </p>
        <span>
          <button
            onClick={openDialog}
            aria-label="Abre um Modal com os termos da Política de privacidade"
            className="underline cursor-pointer outline-none"
          >
            Políticas de privacidade
          </button>
        </span>
      </div>
      <Dialog
        className="font-secondFont"
        closeIcon={<X size={20} />}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{
          "4000px": "641px",
          "1024px": "641px",
          "641px": "85vw",
        }}
      >
        <div class="phone3:max-w-3xl mx-auto tablet1:px-6 text-gray-900 leading-relaxed font-secondFont">
          <h1 class="text-3xl font-bold mb-6">Política de Privacidade</h1>

          <h2 class="text-xl font-semibold mb-3">Informações Importantes</h2>

          <p class="mb-4">
            Esta Política de Privacidade descreve como coletamos, utilizamos,
            armazenamos e compartilhamos informações pessoais de usuários de
            nossos serviços, em conformidade com a Lei Geral de Proteção de
            Dados (LGPD) - Lei nº 13.709/2018.
          </p>

          <p class="mb-4">
            Nos comprometemos a proteger a privacidade e os dados pessoais de
            todos os usuários, garantindo transparência e segurança em todas as
            etapas de tratamento.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Definições</h2>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>
              <strong>Autoridade Nacional de Proteção de Dados (ANPD):</strong>{" "}
              órgão responsável pela fiscalização e aplicação da LGPD.
            </li>

            <li>
              <strong>Base Legal:</strong> fundamento jurídico que autoriza o
              tratamento de dados pessoais (como consentimento, execução de
              contrato, obrigação legal ou legítimo interesse).
            </li>

            <li>
              <strong>Consentimento:</strong> manifestação livre e informada do
              titular que autoriza o tratamento de seus dados pessoais para uma
              finalidade específica.
            </li>

            <li>
              <strong>Dado Pessoal:</strong> qualquer informação que identifique
              ou possa identificar uma pessoa natural (ex.: nome, CPF, e-mail,
              telefone, IP, localização, etc.).
            </li>

            <li>
              <strong>Dado Pessoal Sensível:</strong> dado que revele origem
              racial, convicção religiosa, opinião política, dado referente à
              saúde, vida sexual, dado genético ou biométrico.
            </li>

            <li>
              <strong>Titular:</strong> pessoa natural a quem se referem os
              dados pessoais tratados.
            </li>

            <li>
              <strong>Tratamento:</strong> qualquer operação realizada com dados
              pessoais, como coleta, armazenamento, uso, compartilhamento ou
              exclusão.
            </li>

            <li>
              <strong>Legítimo Interesse:</strong> quando o tratamento é
              necessário para atender a interesses legítimos do controlador, sem
              ferir direitos e liberdades fundamentais do titular.
            </li>

            <li>
              <strong>Segurança:</strong> medidas técnicas e administrativas
              adotadas para proteger os dados de acessos não autorizados,
              vazamentos ou destruição acidental.
            </li>
          </ul>

          <p class="mb-4">
            <strong>Transparência:</strong> direito do titular de receber
            informações claras e acessíveis sobre o uso de seus dados.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Direitos dos Titulares</h2>

          <p class="mb-3">Os titulares de dados pessoais têm direito a:</p>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>Confirmar se seus dados são tratados;</li>
            <li>
              Acessar, corrigir, atualizar ou solicitar a exclusão de seus
              dados;
            </li>
            <li>Revogar o consentimento a qualquer momento;</li>
            <li>Solicitar portabilidade ou anonimização dos dados;</li>
            <li>Opor-se ao tratamento quando considerar irregular.</li>
          </ul>

          <p class="mb-4">
            As solicitações podem ser feitas por meio dos canais de contato
            disponibilizados pela empresa.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">
            Coleta e Uso de Dados Pessoais
          </h2>

          <p class="mb-3">Podemos coletar dados pessoais por meio de:</p>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>
              Formulários de contato e cadastro (nome, e-mail, telefone,
              endereço, CPF, entre outros);
            </li>
            <li>
              Navegação no site, incluindo endereço IP, localização geográfica,
              tipo de navegador, sistema operacional e tempo de visita;
            </li>
            <li>
              Transações financeiras, quando houver compra de produtos ou
              contratação de serviços;
            </li>
            <li>
              Interações com o suporte ou atendimento, para aprimorar a
              experiência do usuário e a qualidade do serviço.
            </li>
          </ul>

          <p class="mb-3">Esses dados são utilizados para:</p>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>Operar, manter e melhorar nossos serviços;</li>
            <li>Personalizar a experiência do usuário;</li>
            <li>Cumprir obrigações legais e contratuais;</li>
            <li>
              Realizar comunicações e campanhas de marketing, mediante
              consentimento;
            </li>
            <li>
              Garantir segurança, prevenção a fraudes e cumprimento de
              exigências legais.
            </li>
          </ul>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">
            Cookies e Tecnologias de Rastreamento
          </h2>

          <p class="mb-4">
            Nosso site pode utilizar cookies e tecnologias semelhantes para
            melhorar a navegação e compreender como os usuários interagem com o
            conteúdo. O uso de cookies não estritamente necessários dependerá do
            consentimento do usuário, que poderá ser configurado ou revogado a
            qualquer momento em seu navegador.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">
            Compartilhamento e Transferência de Dados
          </h2>

          <p class="mb-3">Podemos compartilhar dados pessoais com:</p>

          <ul class="list-disc ml-6 mb-6 space-y-2">
            <li>
              Parceiros e prestadores de serviço, que auxiliam na operação
              técnica, hospedagem, marketing ou suporte;
            </li>
            <li>Autoridades públicas, quando houver obrigação legal;</li>
            <li>Instituições financeiras, em transações de pagamento.</li>
          </ul>

          <p class="mb-4">
            Em caso de transferência internacional de dados, serão adotadas
            medidas para garantir que o tratamento esteja em conformidade com a
            LGPD e com níveis adequados de proteção.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">
            Armazenamento e Retenção dos Dados
          </h2>

          <p class="mb-4">
            Os dados pessoais são armazenados apenas pelo tempo necessário para
            cumprir as finalidades para as quais foram coletados ou conforme
            exigido por lei. Após o período de retenção, os dados são eliminados
            de forma segura, respeitando normas técnicas e regulatórias.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Segurança da Informação</h2>

          <p class="mb-4">
            Adotamos medidas técnicas, físicas e administrativas adequadas para
            proteger os dados pessoais contra acesso não autorizado, perda,
            alteração, destruição ou divulgação indevida. Embora nenhuma medida
            seja totalmente infalível, buscamos constantemente aprimorar nossas
            práticas de segurança.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Alterações nesta Política</h2>

          <p class="mb-4">
            Esta Política de Privacidade poderá ser atualizada periodicamente,
            conforme alterações legais ou melhorias em nossos processos.
            Recomendamos que o usuário revise este documento regularmente para
            manter-se informado sobre como protegemos suas informações.
          </p>

          <div class="border-t-2 border-black my-8"></div>

          <h2 class="text-xl font-semibold mb-4">Contato</h2>

          <p>
            Em caso de dúvidas, solicitações ou exercício de direitos
            relacionados a dados pessoais, entre em contato pelo canal de
            comunicação indicado no site.
          </p>
        </div>
      </Dialog>
    </footer>
  );
}

export default Footer;
