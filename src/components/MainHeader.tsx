import React, { useState } from "react";

export default function MainHeader() {
  // Array of links to path directory
  const links = [
    { href: ".", label: "Home" },
    {
      href: "/about",
      label: "About Us",
      subLinks: [
        { href: "/business", label: "Business Hours" },
        { href: ".", label: "Contact" },
        { href: ".", label: "Visitors" },
      ],
    },
    {
      href: "/whats_new",
      label: "News & Events",
      subLinks: [
        { href: "/whats_new", label: "What's New" },
        { href: ".", label: "Publications" },
      ],
    },
    { href: "/hardware", label: "Hardware" },
    {
      href: "/software",
      label: "Software",
      subLinks: [
        { href: "/software", label: "High Performance Software" },
        { href: ".", label: "Software Request" },
      ],
    },
    {
      href: "/user",
      label: "User Services",
      subLinks: [
        { href: "/user", label: "Services" },
        { href: ".", label: "System News" },
        { href: ".", label: "Accounts" },
        { href: ".", label: "Software Request" },
        { href: ".", label: "Program Services & Resources" },
        { href: ".", label: "HPC Portal" },
      ],
    },
    { href: "/doc", label: "Documentation" },
    { href: "/links", label: "Quick Links" },
  ];

  // The styling we want for the links using Tailwind CSS
  const linkClasses =
    "transition duration-700 ease-in-out text-secondary text-[17px]  transform font-thin hover:text-base-100";
  // The styling we want for the enitre navigation bar
  const baseNavClass =
    "flex flex-row flex-wrap items-center w-full p-4 fixed top-0 z-10 transition duration-500 ease-in-out transform";

  // Logic for Navigation Bar animation
  const [nav, setNavbar] = useState(false);
  const changeBG = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBG);

  return (
    <>
      {/* The line of code below is to have the same styling code without having to copy/paste it just to have "bg-neutral/transparent" added */}
      <nav
        className={`${baseNavClass} ${
          nav
            ? "bg-info bg-opacity-90 scale-100"
            : "desktop:bg-transparent desktop:scale-90 bg-info bg-opacity-90"
        }`}
      >
        <div className="flex min-h-[inherit] items-center">
          <a href=".">
            <img
              className="h-32 w-auto transition duration-500 ease-in-out transform hover:drop-shadow-[0_0_15px_rgba(227,210,141,0.9)]"
              src="/img/test_bg1.png"
              alt="MHPCC Logo"
            />
          </a>
        </div>
        <label className="btn btn-ghost swap swap-rotate ml-auto text-lg peer desktop:hidden px-2">
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
          className="desktop:w-fit w-full desktop:*:w-fit *:w-full hidden desktop:flex flex-wrap items-center ml-auto gap-2 pb-4 desktop:pb-0 *:p-1 peer-has-[:checked]:flex text-center menu-horizontal [&>li:not(.menu-title)>details>ul]:static desktop:[&>li:not(.menu-title)>details>ul]:fixed"
        >
          {/* Maps through the links array and lists it in order based on the array's index */}
          {links.map((link, index) => (
            <li
              key={link.href}
              className={`${linkClasses} menu hover:cursor-pointer`}
            >
              {link.subLinks ? (
                <details>
                  <summary>{link.label}</summary>
                  <ul className="bg-accent text-md static xl:fixed">
                    {link.subLinks.map((subLink) => (
                      <li
                        key={subLink.label}
                        className="text-base-100 hover:text-primary hover:transition"
                      >
                        <a href={subLink.href}>{subLink.label}</a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a href={link.href}>{link.label}</a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
