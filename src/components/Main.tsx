import React from "react";

export default function Main() {
  return (
    <React.StrictMode>
      <main
        className="bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center h-screen"
      >
        <div className="navbar:w-2/5 w-full navbar:ml-24 m-6">
          <h3 className="font-bold text-lg">LIMITED-TIME OFFER</h3>
          <h1 className="font-bold text-5xl leading-tight my-4">Students, get a month of Creative Cloud on us.</h1>
          <p className="text-xl font-semibold leading-8">
            Save over 65% on the All Apps plan for the first year. And get the
            first month at no charge. Just <del>US$59.99/mo</del> US$19.99/mo. Ends Sep 2.
            <u className="cursor-pointer">See terms</u>.
          </p>
          <button className="mt-4 text-xl font-semibold w-fit h-fit py-2 px-5 bg-[#1473e6] text-white rounded-3xl">
            Buy now
          </button>
        </div>
      </main>
    </React.StrictMode>
  );
}
