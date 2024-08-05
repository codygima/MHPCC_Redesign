import React from "react";

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

  // The styling we want for each anchor tag using Tailwind CSS
  const linkClasses =
    "transition duration-700 ease-in-out transform hover:scale-125 text-lg hover:text-base-100";

  return (
    <header className="flex flex-row flex-wrap justify-center p-4 rounded-btn sticky top-0 z-10">
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
    </header>
  );
}
