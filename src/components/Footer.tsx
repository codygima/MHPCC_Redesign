import React from "react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="flex flex-col justify-between items-center desktop:flex-row md:justify-center md:pt-4 pt-8 px-8 pb-4 border-t border-dotted border-t-base-100 md:w-auto w-full"
    >
      <div id="DoD-logo" className="mb-4 md:mb-0 bg-white rounded-box">
        <img
          src="img/hpcmp_logo.jpg"
          alt="DoD Logo"
          className="w-[256px] h-[60px] m-4"
        />
      </div>
      <div
        id="footer-disclaimer"
        className="rounded-box bg-accent md:w-1/2 w-auto mt-4 mx-4 md:mx-8 text-left text-sm text-secondary font-thin p-4"
      >
        <p>
          <span className="font-bold">DISCLAIMER: </span>The appearance of
          hyperlinks does not constitute endorsement by the U.S. Air Force of
          the linked website or the information, products, or services contained
          therein. For other than authorized activities such as military
          exchanges and morale, welfare and recreation sites, the U.S. Air Force
          does not exercise any editorial control over the information you may
          find at these locations. Such links are provided consistent with the
          stated purpose of this DoD web.
          <span className="text-warning transition duration-700 ease-in-out transform font-thin hover:text-[#52bdb2]">
            <a href="https://www.mhpcc.hpc.mil/privacy.html">
              {" "}
              Privacy & Security Notice
            </a>
          </span>
        </p>
      </div>
      <div
        id="other-logo"
        className="flex flex-row items-center p-4 space-x-4 bg-white rounded-box my-4"
      >
        <img
          src="img/afrl_logo.jpg"
          alt="AFRL Logo"
          className="w-[50px] h-[50px]"
        />
        <img
          src="img/uh_logo.jpg"
          alt="UH Logo"
          className="w-[50px] h-[50px] m-2"
        />
        <img
          src="img/arluh_logo.jpg"
          alt="ARL Logo"
          className="w-[89px] h-[60px]"
        />
      </div>
    </footer>
  );
}
