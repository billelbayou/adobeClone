import React from "react";
import adobelogo from "../../assets/images/experience-cloud-40.png";

export default function MC() {
  return (
    <React.StrictMode>
      <div className="w-full flex flex-row justify-around cd p-10 shadow-md overflow-auto">
        {/* first col */}
        <div>
          <div className="flex items-center w-64 h-10 hover:bg-[#eee] pl-7 mb-3 cursor-pointer rounded-sm">
            <img src={adobelogo} alt="" className="h-6 mr-3" />
            <div>
              <h4>Adobe Experience Cloud</h4>
            </div>
          </div>
          <div className="border-b flex flex-row items-center ml-7 mb-4 justify-start rounded-sm w-44 h-10">
            <h3 className="text-sm font-semibold text-[#444]">
              Featured products
            </h3>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-64 h-11 hover:bg-[#eee]">
            <h4>Customer data platform (CDP)</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Adobe Real-Time CDP
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-64 h-11 hover:bg-[#eee]">
            <h4>Omnichannel analytics</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Adobe Customer Journey Analytics
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-64 h-11 hover:bg-[#eee]">
            <h4>Web analytics</h4>
            <p className="text-xs font-semibold text-[#aaa]">Adobe Analytics</p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-64 h-11 hover:bg-[#eee]">
            <h4>Content management system (CMS)</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Adobe Experience Manager Sites
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-64 h-11 hover:bg-[#eee]">
            <h4>Digital asset management (DAM)</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Adobe Experience Manager Assets
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-64 h-11 hover:bg-[#eee]">
            <h4>Digital commerce</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Adobe Commerce (Magento)
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-64 h-11 hover:bg-[#eee]">
            <h4>Project management</h4>
            <p className="text-xs font-semibold text-[#aaa]">Adobe Workfront</p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-64 h-11 hover:bg-[#eee]">
            <h4>Customer journey management</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Adobe Journey Optimizer
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-64 h-11 hover:bg-[#eee]">
            <h4>Marketing automation</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Adobe Marketo Engage
            </p>
          </div>
          <button className="m-4 ml-7 text-base font-semibold w-fit h-fit py-1 px-3 bg-[#1473e6] text-white rounded-3xl">
            View all products
          </button>
        </div>
        {/* second col */}
        <div>
          <div className="border-b flex flex-row items-center ml-7 mb-4 justify-start rounded-sm w-44 h-10">
            <h3 className="text-sm font-semibold text-[#444]">
              New and coming soon
            </h3>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-[21rem] h-11 hover:bg-[#eee]">
            <h4>Adobe GenStudio</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Accelerate your content supply chain
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-[21rem] h-11 hover:bg-[#eee]">
            <h4>AI Assistant</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Streamline workflows and enhance productivity
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-[21rem] h-11 hover:bg-[#eee]">
            <h4>Adobe Real-Time CDP Collaboration</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Boost value for advertisers and publishers
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-[21rem] h-11 hover:bg-[#eee]">
            <h4>Adobe Journey Optimizer - B2B Edition</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Drive revenue via AI and buying group engagement
            </p>
          </div>
          <div className="border-b flex flex-row items-center ml-7 my-4 justify-start rounded-sm w-44 h-10">
            <h3 className="text-sm font-semibold text-[#444]">
              Experience Cloud can help
            </h3>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-[21rem] h-11 hover:bg-[#eee]">
            <h4>Adobe Experience Platform</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Powering the next generation of customer experiences
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-[21rem] h-11 hover:bg-[#eee]">
            <h4>Adobe GenAI</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Generative AI in Experience Cloud
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-[21rem] h-11 hover:bg-[#eee]">
            <h4>Content supply chain</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Get content to market faster
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-[21rem] h-11 hover:bg-[#eee]">
            <h4>Personalization at scale</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Personalize every customer moment
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-[21rem] h-11 hover:bg-[#eee]">
            <h4>B2B marketing</h4>
            <p className="text-xs font-semibold text-[#aaa]">
              Differentiate your brand
            </p>
          </div>
        </div>
        {/* third col */}
        <div>
          <div className="border-b flex flex-row items-center ml-7 mb-4 justify-start rounded-sm w-40 h-10">
            <h3 className="text-sm font-semibold text-[#444]">
              Not sure what you need?
            </h3>
          </div>
          <button className="ml-7 mb-3 text-base font-semibold w-fit h-fit py-1 px-3 bg-[#1473e6] text-white rounded-3xl">
            Find product
          </button>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>See all solutions</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>See all industries</h4>
          </div>
          <div className="border-b flex flex-row items-center ml-7 my-4 justify-start rounded-sm w-40 h-10">
            <h3 className="text-sm font-semibold text-[#444]">Resources</h3>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Resource center</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Customer success stories</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Analyst reports</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Experience Cloud Blog</h4>
          </div>
        </div>
        {/* fourth col */}
        <div>
          <div className="bg-white h-44 w-64 border p-6">
            <h2 className="font-semibold text-sm mb-3">Contact Us</h2>
            <button className="font-semibold text-[#1473e6] w-60 h-8 text-left">
              Request demo
            </button>
            <button className="font-semibold text-[#1473e6] w-60 h-8 text-left">
              Get pricing
            </button>
            <button className="font-semibold text-[#1473e6] w-60 h-8 text-left">
              View product tours
            </button>
          </div>
          <div className="border-b flex flex-row items-center ml-7 my-4 justify-start rounded-sm w-40 h-10">
            <h3 className="text-sm font-semibold text-[#444]">Support</h3>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Services and support</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Training</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Help documentation</h4>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-start pl-7 justify-center rounded-sm w-52 h-8 hover:bg-[#eee]">
            <h4>Partners</h4>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}
