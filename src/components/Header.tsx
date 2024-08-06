import React, { useState } from "react";

export default function Header() {
  // Array of links to path directory
  const links = [
    { href: "/about", label: "About Us" },
    { href: "/whats_new", label: "News & Events" },
    { href: "/hardware", label: "Hardware" },
    { href: "/software", label: "Software" },
    { href: "/user", label: "User Services" },
    { href: "/doc", label: "Documentation" },
    { href: "/links", label: "Quick Links" },
  ];

  // The styling we want for different elements using Tailwind CSS
  const linkClasses =
    "transition duration-700 ease-in-out transform font-thin hover:scale-125 text-lg hover:text-base-100";
  const baseNavClass =
    "flex flex-row flex-wrap justify-center w-full p-4 sticky top-0 z-10 transition duration-500 ease-in-out transform";

  // Logic for Navigation Bar animation
  const [nav, setNavbar] = useState(false);
  const changeBG = () => {
    if (window.scrollY >= 128) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBG);

  return (
    // The line of code below is to have the same styling code without having to copy/paste it just to have "bg-neutral/transparent" added
    <>
      <nav
        className={`${baseNavClass} ${
          nav ? "bg-neutral bg-opacity-50 " : "bg-transparent"
        }`}
      >
        <a href=".">
          <img
            className="h-32 w-auto transition duration-500 ease-in-out transform hover:drop-shadow-[0_0_15px_rgba(227,210,141,0.9)]"
            src="/src/img/test_bg1.png"
            alt="MHPCC Logo"
          />
        </a>
        <ul className="flex flex-wrap justify-center items-center ml-10 gap-10 text-default">
          {/* Goes through each index of the links array and references/styles the anchor tag accordingly */}
          {links.map((link) => (
            <a key={link.href} className={linkClasses} href={link.href}>
              {link.label}
            </a>
          ))}
        </ul>
      </nav>
    </>
  );
}
