import React from "react";

export default function ButtonWithIcon({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row items-center justify-around transition rounded-[40px] px-[30px] py-[16px] bg-black text-white border-black button-gradient-effect`}
    >
      <div className="flex items-center text-center gap-[20px]">
        <div className="">{icon}</div>
        <p className="flex items-center text-paragraph4 font-secondFont">
          {label}
        </p>
      </div>
    </button>
  );
}
