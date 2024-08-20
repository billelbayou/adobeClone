import React, { ReactNode, useState } from "react";
import AA from "./content/AA";
import AD from "./content/AD";
import EC from "./content/EC";
import FB from "./content/FB";
import FE from "./content/FE";
import FM from "./content/FM";
import RES from "./content/RES";
import SP from "./content/SP";
import SUP from "./content/SUP";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type footerContentItem = {
  title: string;
  content: ReactNode;
};

type footerContentList = footerContentItem[];

const footerContent: footerContentList = [
  { title: "Shop for", content: <SP /> },
  { title: "For business", content: <FB /> },
  { title: "For education", content: <FE /> },
  { title: "For mobile", content: <FM /> },
  { title: "Experience Cloud", content: <EC /> },
  { title: "Support", content: <SUP /> },
  { title: "Resources", content: <RES /> },
  { title: "Adobe Account", content: <AA /> },
  { title: "Adobe", content: <AD /> },
];

export default function LightFooter() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  function handleClick(index: number) {
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  return (
    <React.StrictMode>
      <div className="w-full">
        {footerContent.map((item, index) => (
          <div key={index} onClick={() => handleClick(index)}>
            <div className="w-full justify-between flex items-center h-full border-b p-3 text-base cursor-pointer">
              <span className="mr-2">{item.title}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                size="xs"
                className={`duration-300 transition ${
                  expandedIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            <div className={`${expandedIndex === index ? "block" : "hidden"}`}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </React.StrictMode>
  );
}
