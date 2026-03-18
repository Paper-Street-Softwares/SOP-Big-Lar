import Faq from "../../components/sections/Faq";
import Footer from "../../components/sections/Footer";
import Numbers from "../../components/sections/Numbers";
import TrustedBy from "../../components/sections/TrustedBy";
import Featuresv1 from "../../components/sections/Featuresv1";
import Featuresv2 from "../../components/sections/Featuresv2";
import HeroSection from "../../components/sections/HeroSection";
import AboutImgLeft from "../../components/sections/AboutImgLeft";
import AboutImgRight from "../../components/sections/AboutImgRight";
import NavbarSection from "../../components/sections/NavbarSection";
import ContactBarSection from "../../components/sections/ContactBarSection";
import FloatingWhatsappButton from "../../components/interactives/FloatingWhatsappButton";
import BackToTopButton from "../../components/interactives/BackToTopButton";

export default function IndexRita() {
  return (
    <div>
      <ContactBarSection />
      <NavbarSection />
      <HeroSection />
      <Featuresv1 />
      <Featuresv2 />
      <AboutImgLeft />
      <AboutImgRight />
      <Numbers />
      <TrustedBy />
      <Faq />
      <Footer />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
