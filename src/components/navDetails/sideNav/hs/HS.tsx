import React from "react";

export default function HS() {
  return (
    <React.StrictMode>
      <div
        className="bg-[#fafafa] pt-2 border-b"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          Help Center
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          Enterprise Support
        </h4>
        <h4 className="hover:bg-[#f5f5f5] cursor-pointer hover:text-[#1473e6] pl-6 py-[0.4rem] text-sm font-medium">
          Adobe Support Community
        </h4>
        <button className="ml-5 my-2 text-base font-semibold w-fit h-fit py-1 px-3 border-2 border-[#4b4b4b] text-[#4b4b4b] hover:text-white hover:bg-[#4b4b4b] transition duration-300 rounded-3xl">
          Download and install
        </button>
        <button className="block ml-5 my-2 text-base font-semibold w-fit h-fit py-1 px-3 bg-[#1473e6] text-white rounded-3xl">
          Contact us
        </button>
      </div>
    </React.StrictMode>
  );
}
