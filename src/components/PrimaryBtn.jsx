import Image from "next/image";
import React from "react";

const PrimaryBtn = ({ text, icon, width }) => {
  return (
    <button
      className="bg-[#00B4DB] py-2 rounded-md text-white font-bold text-2xl flex items-center justify-center gap-2 hover:bg-[#10a6c8] transition duration-300 ease-in-out hover:scale-105"
      style={{ width }}
    >
      {icon && (
        <Image src={"/login.png"} alt="login" width={35} height={30}></Image>
      )}
      {text}
    </button>
  );
};

export default PrimaryBtn;
