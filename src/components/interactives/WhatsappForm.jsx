import React, { useState } from "react";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.webp";
import { CiUser, CiPhone, CiMail, CiChat1 } from "react-icons/ci";
import whatsappNumber from "../../abstractions/whats";

const WhatsappForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");

  const capitalizeFirstLetter = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const sendToWhatsapp = () => {
    const validationErrors = {};

    if (!validateName(name)) {
      validationErrors.name = "O campo nome é obrigatório";
    }

    if (!validatePhone(phone)) {
      validationErrors.phone = "O campo telefone é obrigatório";
    }

    if (!email) {
      validationErrors.email = "O campo email é obrigatório";
    } else if (!validateEmail(email)) {
      validationErrors.email =
        "O formato do email digitado é inválido. Verifique.";
    }

    if (!validateMessage(message)) {
      validationErrors.message = "O campo mensagem é obrigatório";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const numeroWhatsapp = whatsappNumber;

    const mensagemWhatsapp = `Nome: ${name} \nTelefone: ${phone} \nEmail: ${email} \nMensagem: ${message}`;

    const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
      mensagemWhatsapp
    )}`;

    window.open(linkWhatsapp, "_blank");
  };

  const validateName = (name) => !!name;

  const validatePhone = (phone) => {
    console.log("Validating phone:", phone);
    const phoneNumberPattern = /^[\d()-\s]+$/;
    const cleanedPhone = phone.replace(/[^\d]/g, "");
    console.log("Cleaned phone:", cleanedPhone);
    console.log("Phone length:", cleanedPhone.length);
    const isValid =
      phoneNumberPattern.test(phone) && cleanedPhone.length === 11;
    return isValid;
  };

  const validateEmail = (email) => {
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.com)?$/;
    if (
      !email.includes("@") &&
      !email.includes(".com") &&
      !email.includes(".com.br")
    ) {
      return false;
    }
    return emailPattern.test(email);
  };

  const validateMessage = (message) => !!message;

  const formatPhoneNumber = (phoneNumber) => {
    let cleaned = phoneNumber.replace(/\D/g, "");
    let formatted = cleaned.replace(
      /^(\d{2})(\d{1,5})?(\d{1,4})?/,
      (match, p1, p2, p3) => {
        let part1 = p1 ? `(${p1}` : "";
        let part2 = p2 ? `) ${p2}` : "";
        let part3 = p3 ? `-${p3}` : "";
        return `${part1}${part2}${part3}`;
      }
    );

    return formatted;
  };

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/[^\d()-\s]/g, "");
    let formattedPhone = formatPhoneNumber(input);
    if (formattedPhone.length <= 15) {
      setPhone(formattedPhone);
    }
  };

  return (
    <div className="phone3:mx-auto text-paragraph3 phone3:text-paragraph4">
      <h1 className="w-full mb-2 phone3:text-title1 tablet1:text-paragraph3 desktop1:text-title1 font-black font-mainFont">
        Entre em contato agora
      </h1>
      <div className="mb-2">
        <div className="flex mb-3 text-gray-500">
          <input
            className="w-full px-1 py-2 border-[1px] border-black rounded-3xl pl-[20px] font-mainFont h-[50px]"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(capitalizeFirstLetter(e.target.value))}
            placeholder="Nome"
            required
          />
        </div>
        {errors.name && (
          <p className="-mt-2 -mb-1 text-red-500 text-paragraph3">
            {errors.name}
          </p>
        )}
      </div>

      <div className="mb-2">
        <div className="flex mb-3 text-gray-500">
          <input
            className="w-full px-1 py-2 border-[1px] border-black rounded-3xl pl-[20px] font-mainFont h-[50px]"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
          />
        </div>
        {errors.email && !errors.email.includes("@") && (
          <p className="-mt-2 -mb-1 text-red-500 text-paragraph3">
            {errors.email}
          </p>
        )}
        {errors.email?.includes("@") && (
          <p className="-mt-2 -mb-1 text-red-500 text-paragraph3">
            {errors.email}
          </p>
        )}
      </div>

      <div className="mb-2">
        <div className="flex mb-3 text-gray-500">
          <input
            className="w-full px-1 py-2 border-[1px] border-black rounded-3xl pl-[20px] font-mainFont h-[50px]"
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Telefone"
            required
          />
        </div>
        {errors.phone && (
          <p className="-mt-2 -mb-1 text-red-500 text-paragraph3">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="mb-5">
        <div className="flex mb-3 text-gray-500">
          <textarea
            className="w-full px-1 pb-2 pt-4 border-[1px] border-black rounded-3xl pl-[20px] font-mainFont h-[90px]"
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mensagem"
            required
          />
        </div>
        {errors.message && (
          <p className="-mt-2 -mb-1 text-red-500 text-paragraph3">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex justify-end items-center w-[240px] desktop1:w-[320px]">
        <button
          className="flex items-center px-8 py-3 font-medium text-white transition bg-primary rounded-3xl text-title1 hover:bg-white hover:text-black"
          onClick={sendToWhatsapp}
        >
          <div className="flex ">
            <p className="text-paragraph4 leading-none phone1:text-paragraph5 phone2:text-title2 tablet1:text-title1 mr-[10px]">
              Enviar
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-send-horizontal"
            >
              <path d="m3 3 3 9-3 9 19-9Z" />
              <path d="M6 12h16" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WhatsappForm;
