import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useState } from "react";
import CT from "./sideNav/hs/CT";
import HS from "./sideNav/hs/HS";
import LR from "./sideNav/hs/LR";


type NavItem = {
  title: string;
  detail: ReactElement
};

export default function LightHS() {
  const navItems: NavItem[] = [
    { title: "Help and support", detail: <HS/> },
    { title: "Common tasks", detail: <CT /> },
    { title: "Learning resources", detail: <LR /> },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <React.StrictMode>
      <div className="bg-[#fafafa]" onClick={(e) => e.stopPropagation()}>
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
