import React from "react";
import creativeCloud from "../../assets/images/creative-cloud-40.png";
import cdAdd from "../../assets/images/cd_add.jpeg";

export default function CD() {
  return (
    <React.StrictMode>
      <div className="w-full flex flex-row justify-around cd p-10 shadow-md overflow-auto">
        {/* first col */}
        <div className="mt-2">
          <div className="hover:cursor-pointer flex flex-row items-center justify-center rounded-sm w-72 h-14 hover:bg-[#eee]">
            <img src={creativeCloud} alt="" className="h-7 mr-4" />
            <div>
              <h4>What Is Creative Cloud?</h4>
              <p className="text-xs font-semibold text-[#aaa]">
                Creative apps and services for everyone
              </p>
            </div>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-72 h-14 hover:bg-[#eee]">
            <h4>Photographers</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Lightroom, Photoshop, and more
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-72 h-14 hover:bg-[#eee]">
            <h4>Students and teachers</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Save over 65% on Creative Cloud
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-72 h-14 hover:bg-[#eee]">
            <h4>Individuals</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              20+ creative apps, Acrobat, and more
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-72 h-14 hover:bg-[#eee]">
            <h4>Business</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Solutions for teams and entreprises
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-72 h-14 hover:bg-[#eee]">
            <h4>Schools and universities</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Simple administration and licensing
            </p>
          </div>
          <button className="ml-5 mt-5 text-lg font-semibold w-fit h-fit py-1 px-3 bg-[#1473e6] text-white rounded-3xl">
            View plans and pricing
          </button>
        </div>
        {/* second col */}
        <div>
          <div className="border-b flex flex-row items-center ml-5 my-4 justify-start rounded-sm w-64 h-10">
            <h3 className="text-sm font-semibold text-[#444]">
              Featured products
            </h3>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-72 h-14 hover:bg-[#eee]">
            <h4>Photoshop</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Image editing and design
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-72 h-14 hover:bg-[#eee]">
            <h4>Adobe Express</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              All-in-one design, video, photo and PDF app
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-72 h-14 hover:bg-[#eee]">
            <h4>Lightroom</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Photo editing and organization
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-72 h-14 hover:bg-[#eee]">
            <h4>Illustrator</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Vector graphics and illustration
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-72 h-14 hover:bg-[#eee]">
            <h4>Premier Pro</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Video editing and production
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-72 h-14 hover:bg-[#eee]">
            <h4>Adobe Stock</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              High-quality licensable assets
            </p>
          </div>
          <button className="w-72 h-8 text-left pl-5 hover:bg-[#eee] text-[#1473e6]">
            View all products
          </button>
        </div>
        {/* third col */}
        <div>
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
            <h4>Adobe Firefly</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              AI-powered content creation
            </p>
          </div>
          <div className="border-b flex flex-row items-center ml-5 my-4 justify-start rounded-sm w-36 h-10">
            <h3 className="text-sm font-semibold text-[#444]">Explore</h3>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Photo</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Graphic design</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Video</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Illustration</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>3D & AR</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-5 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>PDF</h4>
          </div>
        </div>
        {/* fourth col */}
        <div className="min-h-[28rem] min-w-64 max-h-[28rem] max-w-64 bg-white border">
          <img src={cdAdd} alt="" className="w-full cursor-pointer" />
          <h3 className="pt-4 px-6 font-semibold text-base">
            THE CREATIVITY CONFERENCE
          </h3>
          <h2 className="px-6 py-6 text-2xl font-bold text-[#333]">
            Get ready for
            <br /> Adobe MAX.
          </h2>
          <p className="px-6 pb-3 font-semibold">
            Join us for the creative event of the year Oct 14–16.
          </p>
          <button className="px-6 font-semibold text-[#1473e6]">
            Register now
          </button>
        </div>
      </div>
    </React.StrictMode>
  );
}
