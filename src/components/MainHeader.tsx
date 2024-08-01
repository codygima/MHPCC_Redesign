import React from "react";

export default function Header() {
  return (
    <header className="flex flex-row flex-wrap justify-center mt-[-10rem] p-4 bg-neutral bg-opacity-50 sticky top-0 z-10">
      <a href=".">
        <img
          className="h-32 w-auto transition duration-500 ease-in-out transform hover:drop-shadow-[0_0_15px_rgba(227,210,141,0.9)] "
          src="/src/img/test_bg1.png"
          alt="MHPCC Logo"
        />
      </a>
      <ul className="flex flex-wrap justify-center items-center ml-10 gap-10 text-default">
        <a
          className="transition duration-700 ease-in-out transform hover:scale-125 text-lg hover:text-base-100"
          href="/about"
        >
          About Us
        </a>
        <a
          className="transition duration-700 ease-in-out transform hover:scale-125 text-lg hover:text-base-100"
          href="/whats_new"
        >
          News & Events
        </a>
        <a
          className="transition duration-700 ease-in-out transform hover:scale-125 text-lg hover:text-base-100"
          href="/hardware"
        >
          Hardware
        </a>
        <a
          className="transition duration-700 ease-in-out transform hover:scale-125 text-lg hover:text-base-100"
          href="/software"
        >
          Software
        </a>
        <a
          className="transition duration-700 ease-in-out transform hover:scale-125 text-lg hover:text-base-100"
          href="/user"
        >
          User Services
        </a>
        <a
          className="transition duration-700 ease-in-out transform hover:scale-125 text-lg hover:text-base-100"
          href="/doc"
        >
          Documentation
        </a>
        <a
          className="transition duration-700 ease-in-out transform hover:scale-125 text-lg hover:text-base-100"
          href="/links"
        >
          Quick Links
        </a>
      </ul>
    </header>
  );
}
