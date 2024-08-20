import React from "react";

export default function AA() {
  return (
    <React.StrictMode>
        <ul className="flex flex-col p-4" onClick={(e) => e.stopPropagation()}>
          <li className="text-sm w-fit hover:text-[#035fe6] cursor-pointer mb-1">
            Log in to your account
          </li>
        </ul>
    </React.StrictMode>
  );
}
