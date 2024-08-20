import React, { useEffect, useState } from "react";
import DefaultFooter from "./footerContent/DefaultFooter";
import LightFooter from "./footerContent/LightFooter";
import acrobat from "../assets/images/media_acrobat.png";
import express from "../assets/images/media_cloud.png";
import ps from "../assets/images/media_ps.png";
import ai from "../assets/images/media_ai.png";
import fb from "../assets/images/2515845_black and white_dark grey_facebook_icon.png";
import insta from "../assets/images/1161953_instagram_icon.png";
import x from "../assets/images/11244080_x_twitter_elon musk_twitter new logo_icon.png";
import lin from "../assets/images/104493_linkedin_icon.png";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";

export default function Footer() {
  const [isWide, setIsWide] = useState<boolean>(window.innerWidth > 900);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <React.StrictMode>
      <footer className="bg-[#fafafa]">
        {isWide ? <DefaultFooter /> : <LightFooter />}
        <div className="border-y m-6 p-2 items-center justify-center footer-apps hidden navbar:flex">
          <h3 className="font-semibold mr-6">Featured products</h3>
          <div className="flex items-center mr-6 cursor-pointer">
            <img src={acrobat} alt="" className="w-8 mr-2" />
            <h4 className="text-sm font-semibold">Adobe Acrobat Reader</h4>
          </div>
          <div className="flex items-center mr-6 cursor-pointer">
            <img src={express} alt="" className="w-8 mr-2" />
            <h4 className="text-sm font-semibold">Adobe Express</h4>
          </div>
          <div className="flex items-center mr-6 cursor-pointer">
            <img src={ps} alt="" className="w-8 mr-2" />
            <h4 className="text-sm font-semibold">Photoshop</h4>
          </div>
          <div className="flex items-center mr-6 cursor-pointer">
            <img src={ai} alt="" className="w-8 mr-2" />
            <h4 className="text-sm font-semibold">Illustrator</h4>
          </div>
        </div>
        <div className="flex justify-between items-center mx-6 mt-6 pb-6 flex-wrap">
          <div className="flex items-center mb-2 navbar:m-0">
            <div className="flex items-center mr-6">
              <FontAwesomeIcon icon={faGlobe} size="lg" className="mr-2" />
              <p className="text-sm mr-2">Change region</p>
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </div>
            <div className="flex">
              <img src={fb} alt="" className="w-6 mr-4" />
              <img src={insta} alt="" className="w-6 mr-4" />
              <img src={x} alt="" className="w-6 mr-4" />
              <img src={lin} alt="" className="w-6" />
            </div>
          </div>
          <div>
            <p className="text-xs flex flex-wrap">
              Copyright © 2024 Adobe. All rights reserved. /{" "}
              <span className="font-semibold cursor-pointer hover:text-[#1473e6]">
                Privacy
              </span>{" "}
              /{" "}
              <span className="font-semibold cursor-pointer hover:text-[#1473e6]">
                Terms of Use
              </span>{" "}
              /{" "}
              <span className="font-semibold cursor-pointer hover:text-[#1473e6]">
                Cookie preferences
              </span>{" "}
              /{" "}
              <span className="font-semibold cursor-pointer hover:text-[#1473e6]">
                Do not sell or share my personal information
              </span>{" "}
              /{" "}
            </p>
          </div>
        </div>
      </footer>
    </React.StrictMode>
  );
}
