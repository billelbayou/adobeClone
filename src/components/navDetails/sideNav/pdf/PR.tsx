import React from "react";

export default function PR() {
  return (
    <React.StrictMode>
      <div className="bg-[#fafafa] pt-2 border-b" onClick={(e) => e.stopPropagation()}>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
        Adobe Acrobat
        </h4>
        <button className="ml-5 my-2 text-base font-semibold w-fit h-fit py-1 px-3 bg-[#1473e6] text-white rounded-3xl">
        Acrobat plans and pricing
        </button>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
        Adobe Acrobat Sign
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
        E-signature plans and pricing
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
        Acrobat Reader
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
        View all products
        </h4>
      </div>
    </React.StrictMode>
  );
}
