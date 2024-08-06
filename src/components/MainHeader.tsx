import React, { useState } from "react";

export default function MainHeader() {
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
    "transition duration-700 ease-in-out text-secondary transform font-thin hover:scale-125 text-lg hover:text-base-100";
  const baseNavClass =
    "flex flex-row flex-wrap justify-between w-full p-4 fixed top-0 z-10 transition duration-500 ease-in-out transform xl:gap-8";

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
          nav ? "bg-info bg-opacity-90 " : "bg-transparent"
        }`}
      >
        <div className="flex min-h-[inherit] items-center">
          <a href=".">
            <img
              className="h-32 w-auto transition duration-500 ease-in-out transform hover:drop-shadow-[0_0_15px_rgba(227,210,141,0.9)]"
              src="/src/img/test_bg1.png"
              alt="MHPCC Logo"
            />
          </a>
        </div>
        <label className="btn btn-ghost swap swap-rotate text-lg peer xl:hidden px-2">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        <ul
          id="nav-items"
          className="xl:w-fit w-full xl:[&>li]:w-fit [&>li]:w-full hidden xl:flex flex-wrap items-center gap-3 pb-4 xl:pb-0 [&>li]:p-2 peer-has-[:checked]:flex text-center"
        >
          {links.map((link) => (
            <li className={linkClasses}>
              <a key={link.href} className={linkClasses} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
