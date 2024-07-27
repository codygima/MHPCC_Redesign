import React from "react";

export default function Header() {
  return (
    <div className="flex flex-row flex-wrap justify-center p-4 bg-info">
      <a href=".">
        <img
          className="h-32 w-auto transition duration-500 ease-in-out transform hover:drop-shadow-[0_0_15px_rgba(227,210,141,0.9)] "
          src="/src/img/test_bg1.png"
          alt="MHPCC Logo"
        />
      </a>
      <ul className="flex flex-wrap justify-center items-center ml-10 gap-10">
        <a href="/about">About Us</a>
        <a href="/whats_new">News & Events</a>
        <a href="/hardware">Hardware</a>
        <a href="/software">Software</a>
        <a href="/user">User Services</a>
        <a href="/doc">Documentation</a>
        <a href="/links">Quick Links</a>
      </ul>
    </div>
  );
}
