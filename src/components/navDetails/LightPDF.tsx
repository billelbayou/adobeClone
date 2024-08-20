import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useState } from "react";
import AI from "./sideNav/pdf/AI";
import BR from "./sideNav/pdf/BR";
import OT from "./sideNav/pdf/OT";
import PR from "./sideNav/pdf/PR";
import SF from "./sideNav/pdf/SF";

type NavItem = {
  title: string;
  detail: ReactElement
};

export default function LightPDF() {
  const navItems: NavItem[] = [
    { title: "Products", detail: <PR/> },
    { title: "Shop for", detail: <SF /> },
    { title: "Artificial Intelligence", detail: <AI /> },
    { title: "Online Tools", detail: <OT /> },
    { title: "Business Resources", detail: <BR /> },
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
