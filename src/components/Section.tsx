import {
  faFilePdf,
  faFilm,
  faImage,
  faMessage,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import first from "../assets/images/first.png";
import second from "../assets/images/second.png";
import fourth from "../assets/images/fourth.png";
import fifth from "../assets/images/fifth.png";

export default function Section() {
  return (
    <React.StrictMode>
      <section className="phone:px-20 py-10 px-8">
        <div className="flex items-center mx-auto flex-wrap mb-6">
          <h2 className="font-bold text-xl mr-4">
            Get started fast with free tools.
          </h2>
          <ul className="flex flex-wrap">
            <li className="mr-4 my-2 w-fit h-fit border-[3px] hover:text-white hover:bg-[#2c2c2c] cursor-pointer transition duration-100 border-[#2c2c2c] rounded-3xl py-1 px-3 flex items-center font-semibold">
              <FontAwesomeIcon icon={faImage} className="mr-1" />
              Edit photos
            </li>
            <li className="mr-4 my-2 w-fit h-fit border-[3px] hover:text-white hover:bg-[#2c2c2c] cursor-pointer transition duration-100 border-[#2c2c2c] rounded-3xl py-1 px-3 flex items-center font-semibold">
              <FontAwesomeIcon icon={faFilm} className="mr-1" />
              Edit videos
            </li>
            <li className="mr-4 my-2 w-fit h-fit border-[3px] hover:text-white hover:bg-[#2c2c2c] cursor-pointer transition duration-100 border-[#2c2c2c] rounded-3xl py-1 px-3 flex items-center font-semibold">
              <FontAwesomeIcon icon={faFilePdf} className="mr-1" />
              View PDFs
            </li>
            <li className="mr-4 my-2 w-fit h-fit border-[3px] hover:text-white hover:bg-[#2c2c2c] cursor-pointer transition duration-100 border-[#2c2c2c] rounded-3xl py-1 px-3 flex items-center font-semibold">
              <FontAwesomeIcon icon={faMessage} className="mr-1" />
              Edit PDFs
            </li>
            <li className="my-2 w-fit h-fit border-[3px] hover:text-white hover:bg-[#2c2c2c] cursor-pointer transition duration-100 border-[#2c2c2c] rounded-3xl py-1 px-3 flex items-center font-semibold">
              <FontAwesomeIcon icon={faPencil} className="mr-1" />
              Fill & Sign PDFs
            </li>
          </ul>
        </div>
        <div className="section-div">
          <div className="border flex flex-col items-center justify-between bg-black p-6 rounded-xl secItem cursor-pointer">
            <div className="text-white mb-6">
              <h3 className="font-semibold text-lg mb-4">
                CREATIVE CLOUD ALL APPS
              </h3>
              <h2 className="font-bold text-xl mb-4">
                Multiply your creativity.
              </h2>
              <p className="text-lg mb-4">
                Create anything you can imagine with over 20 apps plus
                generative AI features.
              </p>
              <p>Learn more</p>
            </div>
            <img src={first} alt="" className="w-full" />
          </div>
          <div className="border flex flex-col items-center justify-between bg-[#eb1000] p-6 rounded-xl secItem cursor-pointer">
            <div className="text-white mb-6">
              <h2 className="font-bold text-xl mb-4">Acrobat's got AI.</h2>
              <p className="text-lg mb-4">
                Get early-access pricing of AI Assistant for Acrobat starting at
                US$4.99/mo. Extended to September 4, 2024.
              </p>
              <p>Learn more</p>
            </div>
            <img src={second} alt="" className="w-full" />
          </div>
          <div className="border rounded-xl overflow-hidden">
            <div className="text-white bg-gradient-to-r from-pink-600 to-purple-800 w-full p-6">
              <h2 className="font-bold text-xl mb-4">Creative Cloud</h2>
              <p className="hover:underline cursor-pointer font-semibold mb-3">
                Creative Cloud All Apps free trial
              </p>
              <p className="hover:underline cursor-pointer font-semibold mb-3">
                Creative Cloud for business
              </p>
              <p className="hover:underline cursor-pointer font-semibold">
                Student pricing
              </p>
            </div>
            <div className="bg-[#ededed] w-full p-6 h-full">
              <h2 className="font-bold text-xl mb-2">Acrobat</h2>
              <p className="hover:underline cursor-pointer font-semibold mb-1">
                Acrobat free trial
              </p>
              <p className="hover:underline cursor-pointer font-semibold">
                Online PDF tools
              </p>
              <h2 className="font-bold text-xl mt-3 mb-2">Explore</h2>
              <p className="hover:underline cursor-pointer font-semibold mb-1">
                View all products
              </p>
              <p className="hover:underline cursor-pointer font-semibold">
                See all plans and pricing
              </p>
            </div>
          </div>
          <div className="border secItem cursor-pointer flex flex-col items-center justify-between bg-gradient-to-r from-violet-500 to-fuchsia-500 p-6 rounded-xl">
            <div className="text-white mb-6">
              <h2 className="font-bold text-xl mb-4">
                Amazing apps. Endless possibilities.
              </h2>
              <p className="text-lg mb-4">
                Create something beautiful, boost productivity, and deliver
                engaging experiences with Adobe software.
              </p>
              <p>View all products</p>
            </div>
            <img src={fourth} alt="" className="w-full" />
          </div>
          <div className="border secItem cursor-pointer flex flex-col items-center justify-between bg-gradient-to-r from-sky-500 to-indigo-500 p-6 rounded-xl">
            <div className="text-white mb-6">
              <h3 className="font-semibold text-lg mb-4">ADOBE GENSTUDIO</h3>
              <h2 className="font-bold text-xl mb-4">
                Accelerate your marketing content.
              </h2>
              <p className="text-lg mb-4">
                Plan, create, distribute, activate, and measure content.
              </p>
              <p>Learn more</p>
            </div>
            <img src={fifth} alt="" className="w-full" />
          </div>
          <div className="border rounded-xl overflow-hidden">
            <div className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-16 flex items-center">
              <h2 className="text-xl pl-5">
                IN THE NEWS
              </h2>
            </div>
            <div className="p-5 bg-[#ededed]">
              <div className="pb-3">
                <h3 className="font-semibold text-lg">Adobe transforms B2B marketing with generative AI.</h3>
                <p className="my-2">Tailor content to engage buyers with Adobe Journey Optimizer.</p>
                <p className="font-semibold hover:underline cursor-pointer">Read the story</p>
              </div>
              <div className="border-y border-[#aaa] py-3">
                <h3 className="font-semibold text-lg">Adobe Express brings AI to millions of students and teachers.</h3>
                <p className="my-2">Educators get free access to AI that's designed to be classroom safe.</p>
                <p className="font-semibold hover:underline cursor-pointer">Read the story</p>
              </div>
              <div className="pt-3">
                <h3 className="font-semibold text-lg">Powerful new features come to Photoshop and Illustrator.</h3>
                <p className="my-2">Designers can now create complex, custom designs in less time.</p>
                <p className="font-semibold hover:underline cursor-pointer">Read the story</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.StrictMode>
  );
}
