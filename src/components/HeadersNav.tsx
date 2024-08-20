import React, { useState } from "react";
import CD from "./navDetails/CD";
import HS from "./navDetails/HS";
import MC from "./navDetails/MC";
import PDF from "./navDetails/PDF";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type NavProps = {
  referenceWidth: number;
};

type NavItem = {
  title: string;
  detail: React.ReactNode;
};

export default function HeadersNav({ referenceWidth }: NavProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const navItems: NavItem[] = [
    { title: "Creativity & Design", detail: <CD /> },
    { title: "PDF & E-signatures", detail: <PDF /> },
    { title: "Marketing & Commerce", detail: <MC /> },
    { title: "Help & Support", detail: <HS /> },
  ];

  return (
    <ul className="navbar:flex hidden flex-row h-full relative">
      {navItems.map((item, index) => (
        <li
          key={index}
          className={`px-3 text-sm flex items-center cursor-pointer ${
            expandedIndex === index
              ? "bg-primaryNav "
              : "white hover:bg-primaryNav"
          }`}
          onClick={() => handleClick(index)}
        >
          <div>
            <span className="mr-2">{item.title}</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              size="xs"
              className={`duration-300 transition ${
                expandedIndex === index ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: `${referenceWidth}px` }}
            className={`absolute bg-primaryNav top-16 left-[-138.5px] hover:cursor-default ${
              expandedIndex === index ? "block" : "hidden"
            }`}
          >
            {item.detail}
          </div>
        </li>
      ))}
    </ul>
  );
}
