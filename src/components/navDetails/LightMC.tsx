import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useState } from "react";
import ECCH from "./sideNav/mc/ECCH";
import FP from "./sideNav/mc/FP";
import NSC from "./sideNav/mc/NSC";
import NSW from "./sideNav/mc/NSW";
import RS from "./sideNav/mc/RS";
import SUP from "./sideNav/mc/SUP";

type NavItem = {
  title: string;
  detail: ReactElement
};

export default function LightMC() {
  const navItems: NavItem[] = [
    { title: "Featured products", detail: <FP/> },
    { title: "New and coming soon", detail: <NSC /> },
    { title: "Experience Cloud can help", detail: <ECCH /> },
    { title: "Not sure what you need?", detail: <NSW/> },
    { title: "Resources", detail: <RS /> },
    { title: "Support", detail: <SUP /> },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <React.StrictMode>
      <div className="bg-[#fafafa] pt-2" onClick={(e) => e.stopPropagation()}>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
        Adobe Experience Cloud
        </h4>
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
