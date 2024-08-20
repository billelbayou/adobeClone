import React from "react";

export default function FE() {
  return (
    <React.StrictMode>
      <ul className="flex flex-col p-4" onClick={(e) => e.stopPropagation()}>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Discounts for students and teachers
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Schools and universities
        </li>
        <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
          Digital Learning Solutions
        </li>
      </ul>
    </React.StrictMode>
  );
}
