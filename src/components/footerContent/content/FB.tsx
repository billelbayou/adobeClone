import React from "react";

export default function FB() {
  return (
    <React.StrictMode>
      <ul className="flex flex-col p-4" onClick={(e) => e.stopPropagation()}>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Creative Cloud for business
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Creative Cloud for enterprise
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Acrobat for business
        </li>
      </ul>
    </React.StrictMode>
  );
}
