import React from "react";

export default function NSW() {
  return (
    <React.StrictMode>
      <div
        className="bg-[#fafafa] pt-2 border-b"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="ml-5 my-2 text-base font-semibold w-fit h-fit py-1 px-3 bg-[#1473e6] text-white rounded-3xl">
          Find product
        </button>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          See all solutions
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          See all industries
        </h4>
      </div>
    </React.StrictMode>
  );
}
