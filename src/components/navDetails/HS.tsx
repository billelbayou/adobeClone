import React from "react";
import image from "../../assets/images/HS_Image.png";
export default function HS() {
  return (
    <React.StrictMode>
      <div className="w-full flex flex-row justify-around cd p-10 shadow-md overflow-auto">
        {/* first */}
        <div>
          <div className="border-b flex flex-row items-center ml-5 my-4 justify-start rounded-sm w-36 h-10">
            <h3 className="text-sm font-semibold text-[#444]">
              Help and support
            </h3>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-60 h-14 hover:bg-[#eee]">
            <h4>Help Center</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Troubleshooting and how-tos
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-60 h-14 hover:bg-[#eee]">
            <h4>Enterprise Support</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Dedicated help for large organizations
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-60 h-8 hover:bg-[#eee]">
            <h4>Adobe Support Community</h4>
          </div>
          <button className="mt-2 ml-4 block text-base font-semibold w-fit h-fit py-1 px-3 transition duration-300 bg-white hover:bg-[#4b4b4b] hover:text-[white] text-[#4b4b4b] border border-[#4b4b4b] rounded-3xl">
            Download and install
          </button>
          <button className="m-4 ml-4 text-base font-semibold w-fit h-fit py-1 px-3 bg-[#1473e6] text-white rounded-3xl">
            Contact us
          </button>
        </div>
        {/* second */}
        <div>
          <div className="border-b flex flex-row items-center ml-5 my-4 justify-start rounded-sm w-36 h-10">
            <h3 className="text-sm font-semibold text-[#444]">Common tasks</h3>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Manage my account</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Manage my plan</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Subscribe to Adobe Status</h4>
          </div>
        </div>
        {/* third */}
        <div>
          <div className="border-b flex flex-row items-center ml-5 my-4 justify-start rounded-sm w-36 h-10">
            <h3 className="text-sm font-semibold text-[#444]">
              Learning resources
            </h3>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-72 h-14 hover:bg-[#eee]">
            <h4>Creative Cloud tutorials</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Learn with tutorials designed to inspire
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-72 h-14 hover:bg-[#eee]">
            <h4>Adobe Express</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Quick videos to start a project
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-72 h-14 hover:bg-[#eee]">
            <h4>Acrobat tutorials</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Learn the basics or refine your skills
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-72 h-14 hover:bg-[#eee]">
            <h4>Adobe Experience League</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Personalized learning to develop your skills
            </p>
          </div>
        </div>
        {/* fourth */}
        <div className="min-w-64 min-h-[22rem] max-w-64 max-h-[22rem] bg-black text-white">
          <img src={image} alt="" className="cursor-pointer" />
          <div className="p-6">
            <p className="font-bold">
              Make social content and more with Adobe Express video tutorials.
            </p>
            <button className="underline decoration-white mt-3">
              Get started
            </button>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}
