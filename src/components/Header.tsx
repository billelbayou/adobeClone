import React, { useEffect, useRef, useState } from "react";
import AdobeLogo from "./AdobeLogo";
import HeadersNav from "./HeadersNav";
import Grid from "./Grid";
import SideNavBar from "./SideNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const referenceDivRef = useRef<HTMLDivElement>(null);
  const [referenceWidth, setReferenceWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (referenceDivRef.current) {
        setReferenceWidth(referenceDivRef.current.offsetWidth);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const [sidebar, setSidebar] = useState(false);
  function sideNavHandler() {
    setSidebar((prev) => !prev);
  }

  return (
    <React.StrictMode>
      <div
        ref={referenceDivRef}
        className="header h-16 w-full bg-white flex flex-row items-center shadow-md px-5 justify-between border-b fixed"
      >
        <div className="flex justify-center items-center h-full relative">
          <div className="mr-8 navbar:hidden">
            <div className="cursor-pointer" onClick={sideNavHandler}>
              {sidebar ? (
                <FontAwesomeIcon icon={faXmark} size="xl" />
              ) : (
                <FontAwesomeIcon icon={faBars} size="lg" />
              )}
            </div>
            <div>
              <SideNavBar
                visibility={sidebar ? "block" : "hidden"}
                referenceWidth={referenceWidth}
              />
            </div>
          </div>
          <AdobeLogo />
          {referenceWidth !== null && (
            <HeadersNav referenceWidth={referenceWidth} />
          )}
        </div>
        <div className="flex justify-center items-center">
          <Grid />
          <h3 className="ml-2 border-2 border-gray-400 px-4 py-1 font-semibold rounded-3xl cursor-pointer hover:bg-gray-200">
            Sign in
          </h3>
        </div>
      </div>
    </React.StrictMode>
  );
}
