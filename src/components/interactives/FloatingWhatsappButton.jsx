import Modal from "../util/Modal";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import whatsappWebm from "../../assets/importAssets/whatsappGif.webp";
import whatsappNumber from "../../abstractions/whats";

const whatsappContactLink = `https://wa.me/${whatsappNumber}`;
const FloatingWhatsappButton = ({ buttonType }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      setIsVisible(scrollTop > 100); // O botão aparece após rolar 100px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (buttonType === "form") {
      setOpenModal(!openModal);
    } else {
      window.open(whatsappContactLink, "_blank");
    }
  };

  return (
    <button
      className={`${
        isVisible ? "block animate-fade-in" : "hidden"
      } fixed bottom-2 right-3 p-4  z-20 rounded-full focus:outline-none`}
      onClick={handleClick}
    >
      {openModal ? null : (
        <img
          className="w-16 transition focus:outline-none hover:scale-125"
          src={whatsappWebm}
          alt="Floating Button"
        />
      )}
      {buttonType === "form" && (
        <Modal isOpen={openModal} setCloseModal={setOpenModal} />
      )}
    </button>
  );
};

export default FloatingWhatsappButton;
