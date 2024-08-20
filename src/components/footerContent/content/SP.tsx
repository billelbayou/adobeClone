import React from "react";

export default function SP() {
  return (
    <React.StrictMode>
      <ul className="flex flex-col p-4" onClick={(e) => e.stopPropagation()}>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Creative Cloud
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Photoshop
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Adobe Express
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Photography
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Premiere Pro
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Adobe Stock
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Elements Family
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Document Cloud
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Acrobat
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Acrobat Sign
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Special offers
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          View plans and pricing
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          View all products
        </li>
      </ul>
    </React.StrictMode>
  );
}
