import React from "react";

export default function FP() {
  return (
    <React.StrictMode>
      <div
        className="bg-[#fafafa] pt-2 border-b"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          Customer data platform (CDP)
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          Omnichannel analytics
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          Web analytics
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          Content management system (CMS)
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          Digital asset management (DAM)
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          Digital commerce
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          Project management
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          Customer journey management
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          Marketing automation
        </h4>
        <button className="ml-5 my-2 text-base font-semibold w-fit h-fit py-1 px-3 bg-[#1473e6] text-white rounded-3xl">
          View all products
        </button>
      </div>
    </React.StrictMode>
  );
}
