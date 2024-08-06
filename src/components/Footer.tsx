import React from "react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="pt-10 px-8 pb-2 border-t border-dotted border-t-base-100 w-full text-left text-sm"
    >
      <div id="logos">
        <div id="footer-disclaimer">
          <p className="text-secondary">
            <span className="font-bold">DISCLAIMER: </span>The appearance of
            hyperlinks does not constitute endorsement by the U.S. Air Force of
            the linked website or the information, products, or services
            contained therein. For other than authorized activities such as
            military exchanges and morale, welfare and recreation sites, the
            U.S. Air Force does not exercise any editorial control over the
            information you may find at these locations. Such links are provided
            consistent with the stated purpose of this DoD web.
            <span className="text-warning transition duration-700 ease-in-out transform font-thin hover:text-base-100">
              <a href="https://www.mhpcc.hpc.mil/privacy.html">
                {" "}
                Privacy & Security Notice
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
<style>
  padding-top:50px; border-top: 3px dotted #bbb; position: sticky; left: 0;
  bottom: 0; width: 100%; background-color: "#f3f4f6"; color: white; text-align:
  left;
</style>;
