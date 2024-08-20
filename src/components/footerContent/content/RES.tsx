import React from "react";

export default function RES() {
  return (
    <React.StrictMode>
      <ul className="flex flex-col p-4" onClick={(e) => e.stopPropagation()}>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Adobe Blog
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Adobe Developer
        </li>
      </ul>
    </React.StrictMode>
  );
}
