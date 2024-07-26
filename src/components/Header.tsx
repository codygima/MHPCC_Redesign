import React from "react";

export default function Header() {
  return (
    <div className="flex flex-row justify-center p-4">
      <a href=".">
        <img
          className="h-32 w-auto hover:drop-shadow-[0_0_15px_rgba(255,252,127,0.8)]"
          src="/src/img/test_bg1.png"
          alt="MHPCC Logo"
        />
      </a>
      <ul className="flex justify-center items-center ml-10 gap-10">
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
