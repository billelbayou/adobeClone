import React from "react";
import acrobat from "../../assets/images/AdobeApps/acrobat_reader.png";

export default function PDF() {
  return (
    <React.StrictMode>
      <div className="w-full flex flex-row justify-around cd p-10 shadow-md overflow-auto">
        {/* first col */}
        <div>
          <div className="border-b flex flex-row items-center ml-5 my-4 justify-start rounded-sm w-44 h-10">
            <h3 className="text-sm font-semibold text-[#444]">Products</h3>
          </div>
          <div className="hover:cursor-pointer pl-4 flex flex-row items-center justify-start rounded-sm w-60 h-12 hover:bg-[#eee]">
            <img src={acrobat} alt="" className="h-8 mr-3" />
            <div>
              <h4>Adobe Acrobat</h4>
              <p className="text-xs font-semibold text-[#aaa]">
                The essential PDF solution
              </p>
            </div>
          </div>
          <button className="m-4 ml-4 text-base font-semibold w-fit h-fit py-1 px-3 bg-[#1473e6] text-white rounded-3xl">
            Acrobat plans and pricing
          </button>
          <div className="hover:cursor-pointer flex flex-col items-start pl-4 justify-center rounded-sm w-60 h-12 hover:bg-[#eee]">
            <h4>Adobe Acrobat Sign</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              The essential e-signature solution
            </p>
          </div>
          <button className="font-semibold text-[#1473e6] hover:bg-[#eee] w-60 h-8 text-left pl-4">
            E-signature plans and pricing
          </button>
          <div className="hover:cursor-pointer flex flex-col items-start pl-4 justify-center rounded-sm w-60 h-12 hover:bg-[#eee]">
            <h4>Acrobat Reader</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              View, scan, and annotate PDFs
            </p>
          </div>
          <button className="font-semibold text-[#1473e6] hover:bg-[#eee] w-60 h-8 text-left pl-4">
            View all products
          </button>
        </div>
        {/* second col */}
        <div>
          <div className="border-b flex flex-row items-center ml-5 my-4 justify-start rounded-sm w-36 h-10">
            <h3 className="text-sm font-semibold text-[#444]">Shop for</h3>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Business</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Student & Teachers</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Home & Personal</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Government</h4>
          </div>
          <div className="border-b flex flex-row items-center ml-5 my-4 justify-start rounded-sm w-36 h-10">
            <h3 className="text-sm font-semibold text-[#444]">
              Artificial Intelligence
            </h3>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-14 hover:bg-[#eee]">
            <h4>AI Overiew</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              About AI at Adobe
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-14 hover:bg-[#eee]">
            <h4>AI in Acrobat</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Generative AI document & PDF Tool
            </p>
          </div>
        </div>
        {/* third col */}
        <div>
          <div className="border-b flex flex-row items-center ml-5 my-4 justify-start rounded-sm w-36 h-10">
            <h3 className="text-sm font-semibold text-[#444]">Online Tools</h3>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>PDF to Word</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Compress PDF</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Merge PDF</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Word to PDF</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>View all tools</h4>
          </div>
          <div className="border-b flex flex-row items-center ml-5 my-4 justify-start rounded-sm w-36 h-10">
            <h3 className="text-sm font-semibold text-[#444]">
              Business Resources
            </h3>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Developer resources</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>E-signature tutorials</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Events & Webinars</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Articles & Reports</h4>
          </div>
        </div>
        {/* fourth col */}
        <div className="bg-white h-44 w-64 border p-6">
          <h2 className="font-semibold text-sm">Acrobat Pro</h2>
          <p className="py-3">
            Create, edit, and sign documents with our most advanced PDF and
            e-signature solution.
          </p>
          <button className="font-semibold text-[#1473e6] w-60 h-8 text-left">
            Start free trial
          </button>
        </div>
      </div>
    </React.StrictMode>
  );
}
