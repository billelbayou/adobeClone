import React, { useState } from "react";
import express from "../assets/images/AdobeApps/adobeexpress.png";
import acrobat from "../assets/images/AdobeApps/acrobat_reader.png";
import ps from "../assets/images/AdobeApps/ps.png";
import lr from "../assets/images/AdobeApps/lr.png";
import sign from "../assets/images/AdobeApps/adobe_sign.png";
import fonts from "../assets/images/AdobeApps/adobe_fonts.png";
import stock from "../assets/images/AdobeApps/st.png";
import cloud from "../assets/images/AdobeApps/ec.png";
import gridLogo from "../assets/images/adobe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons/faLayerGroup";

export default function Grid() {
  const [isGridVisible, setIsGridVisible] = useState<boolean>(false);

  const handleClick = () => {
    setIsGridVisible(!isGridVisible);
  };

  const AdobeApps = [
    { icon: express, title: "Adobe Express" },
    { icon: acrobat, title: "Acrobat" },
    { icon: ps, title: "Photoshop" },
    { icon: lr, title: "Lightroom" },
    { icon: sign, title: "Acrobat Sign" },
    { icon: fonts, title: "Fonts" },
    { icon: stock, title: "Stock" },
    { icon: cloud, title: "Experience Cloud" },
  ];

  const grid = AdobeApps.map((app, index) => (
    <div
      key={index}
      className="flex flex-col items-center justify-center hover:bg-gray-200 h-24 w-26 rounded-lg cursor-pointer"
    >
      <img src={app.icon} alt={app.title} className="h-12" />
      <h3 className="text-sm">{app.title}</h3>
    </div>
  ));

  return (
    <React.StrictMode>
      <div className="relative">
        <div
          onClick={handleClick}
          className="grid grid-cols-3 grid-rows-3 gap-[3px] p-2 rounded-lg hover:bg-gray-300 cursor-pointer"
        >
          <span className="h-1 w-1 bg-gray-800 rounded-md"></span>
          <span className="h-1 w-1 bg-gray-800 rounded-md"></span>
          <span className="h-1 w-1 bg-gray-800 rounded-md"></span>
          <span className="h-1 w-1 bg-gray-800 rounded-md"></span>
          <span className="h-1 w-1 bg-gray-800 rounded-md"></span>
          <span className="h-1 w-1 bg-gray-800 rounded-md"></span>
          <span className="h-1 w-1 bg-gray-800 rounded-md"></span>
          <span className="h-1 w-1 bg-gray-800 rounded-md"></span>
          <span className="h-1 w-1 bg-gray-800 rounded-md"></span>
        </div>
        {isGridVisible && (
          <div className="flex flex-col justify-between p-5 absolute w-[350px] h-[500px] rounded-xl bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.2)] phone:right-1 right-[-70px]">
            <h2 className="font-bold text-xl">Web Apps</h2>
            <div className="grid grid-cols-3 grid-rows-3">{grid}</div>
            <div className="h-1/6 w-full bg-gray-300 rounded-xl flex items-center justify-around">
              <div className="flex flex-col items-center cursor-pointer">
                <img src={gridLogo} alt="Adobe logo" className="w-[24px]" />
                <h4>adobe.com</h4>
              </div>
              <div className="text-center cursor-pointer">
                <FontAwesomeIcon icon={faLayerGroup} size="lg" />
                <h4>See all apps</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.StrictMode>
  );
}
