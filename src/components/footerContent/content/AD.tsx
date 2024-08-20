import React from "react";

export default function AD() {
  return (
    <React.StrictMode>
      <ul className="flex flex-col p-4" onClick={(e) => e.stopPropagation()}>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          About
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          AI Overview
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Careers
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Newsroom
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Corporate responsibility
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Investor Relations
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Supply chain
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Trust Center
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Events
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Diversity and inclusion
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Integrity
        </li>
      </ul>
    </React.StrictMode>
  );
}
