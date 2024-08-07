import React from "react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="flex flex-row justify-center items-center pt-8 px-8 pb-4 border-t border-dotted border-t-base-100 w-auto"
    >
      {/* <div id="DoD-logo">
        <img
          src="src/img/hpcmp_logo.jpg"
          alt="DoD Logo"
          className="w-[256px] h-[60px] m-4"
        />
      </div> */}
      <div id="textInformation">
        <div
          id="footer-disclaimer"
          className="rounded-box bg-base-100 desktop:w-[45rem] w-auto mx-4 desktop:mx-16 h-auto text-left text-sm text-secondary font-thin p-4"
        >
          <p>
            <span className="font-bold">DISCLAIMER: </span>The appearance of
            hyperlinks does not constitute endorsement by the U.S. Air Force of
            the linked website or the information, products, or services
            contained therein. For other than authorized activities such as
            military exchanges and morale, welfare and recreation sites, the
            U.S. Air Force does not exercise any editorial control over the
            information you may find at these locations. Such links are provided
            consistent with the stated purpose of this DoD web.
            <span className="text-warning transition duration-700 ease-in-out transform font-thin hover:text-[#52bdb2]">
              <a href="https://www.mhpcc.hpc.mil/privacy.html">
                {" "}
                Privacy & Security Notice
              </a>
            </span>
          </p>
        </div>
      </div>
      {/* <div id="other-logo" className="flex flex-row items-center p-4 sm:w-24">
        <img
          src="src/img/afrl_logo.jpg"
          alt="AFRL Logo"
          className="w-[50px] h-[50px]"
        />
        <img
          src="src/img/uh_logo.jpg"
          alt="UH Logo"
          className="w-[50px] h-[50px] m-2"
        />
        <img
          src="src/img/arluh_logo.jpg"
          alt="ARL Logo"
          className="w-[89px] h-[60px]"
        />
      </div> */}
    </footer>
  );
}
<style>
  padding-top:50px; border-top: 3px dotted #bbb; position: sticky; left: 0;
  bottom: 0; width: 100%; background-color: "#f3f4f6"; color: white; text-align:
  left;
</style>;
