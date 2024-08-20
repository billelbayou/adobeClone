import React from "react";

export default function AI() {
  return (
    <React.StrictMode>
      <div className="bg-[#fafafa] pt-2 border-b" onClick={(e) => e.stopPropagation()}>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          AI Overview
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          Adobe Firefly
        </h4>
      </div>
    </React.StrictMode>
  );
}
