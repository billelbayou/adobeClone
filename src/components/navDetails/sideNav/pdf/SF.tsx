import React from "react";

export default function SF() {
  return (
    <React.StrictMode>
      <div className="bg-[#fafafa] pt-2 border-b" onClick={(e) => e.stopPropagation()}>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
        Business
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
        Student & Teachers
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
        Home & Personal
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
        Government
        </h4>
      </div>
    </React.StrictMode>
  );
}
