import React from "react";
import Logo from "../assets/images/adobe-logo.png";

export default function AdobeLogo() {
  return (
    <React.StrictMode>
      <div className="AdobeLogo flex flex-row items-center justify-center w-fit h-fit mr-5 cursor-pointer">
        <img src={Logo} alt="Adobe logo" className="w-8 mr-3" />
        <h2 className="font-primarySemiBold text-xl text-primaryRed">Adobe</h2>
      </div>
    </React.StrictMode>
  );
}
