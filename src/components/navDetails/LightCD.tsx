import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useState } from "react";
import AI from "./sideNav/cd/AI";
import FP from "./sideNav/cd/FP";
import EXP from "./sideNav/cd/EXP";

type NavItem = {
  title: string;
  detail: ReactElement
};

export default function LightCD() {
  const navItems: NavItem[] = [
    { title: "Featured products", detail: <FP/> },
    { title: "Artificial Intelligence", detail: <AI /> },
    { title: "Explore", detail: <EXP /> },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <React.StrictMode>
      <div className="bg-[#fafafa] pt-2" onClick={(e) => e.stopPropagation()}>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          What Is Creative Cloud?
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          Photographers
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          Students and teachers
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          Individuals
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          Business
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          Schools and universities
        </h4>
        <button className="ml-5 mt-2 text-base font-semibold w-fit h-fit py-1 px-3 bg-[#1473e6] text-white rounded-3xl">
          View plans and pricing
        </button>
        <div>
          {navItems.map(function (item, index) {
            return (
              <div key={index}>
                <div className="w-full justify-between flex items-center h-full border-b p-3 pl-6 text-base cursor-pointer" onClick={() => handleClick(index)}>
                  <span className="text-sm font-semibold text-[#444]">{item.title}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    size="xs"
                    className={`duration-300 transition ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`${expandedIndex === index ? "block" : "hidden"}`}
                >
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.StrictMode>
  );
}
