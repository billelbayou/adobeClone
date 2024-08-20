import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useState } from "react";
import LightCD from "./navDetails/LightCD";
import LightHS from "./navDetails/LightHS";
import LightMC from "./navDetails/LightMC";
import LightPDF from "./navDetails/LightPDF";

type props = {
  visibility: string;
  referenceWidth: number | null;
};

type NavItem = {
  title: string;
  detail: ReactElement
};

export default function SideNavBar({ visibility, referenceWidth }: props) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const navItems: NavItem[] = [
    { title: "Creativity & Design", detail: <LightCD /> },
    { title: "PDF & E-signatures", detail: <LightPDF /> },
    { title: "Marketing & Commerce", detail: <LightMC /> },
    { title: "Help & Support", detail: <LightHS /> },
  ];

  return (
    <React.StrictMode>
      <div
        style={{
          width: `calc(${referenceWidth}px - 30px)`,
          height: `calc(100vh - 64px)`,
        }}
        className={`${visibility} absolute bg-white border-r left-[-1.25rem] bottom-0 translate-y-full overflow-auto`}
      >
        {navItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
          >
            <div className="w-full justify-between flex items-center h-full border-t p-3 text-base cursor-pointer">
              <span className="mr-2">{item.title}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                size="xs"
                className={`duration-300 transition ${
                  expandedIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            <div className={`${expandedIndex === index ? "block" : "hidden"}`}>{item.detail}</div>
          </div>
        ))}
      </div>
    </React.StrictMode>
  );
}
