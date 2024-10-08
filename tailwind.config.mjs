/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        lemon: "#E3D28D",
        slate_gray: "#2F4F4F",
        "primary-dark": "#93823B",
      },
      backgroundImage: {
        MHPCC: "url('/img/header_bg.png')",
        prllx2: "url('/img/MHPCC_aerial.jpg')",
        prllx3: "url('/img/building.jpg')",
        prllx4: "url(/img/computer_guy.avif)",
        prllx5: "url(/img/tech1.jpeg)",
      },
      screens: {
        md: "800px",
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1400px",
        // => @media (min-width: 1280px) { ... }
        nestHb: "1300px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#E3D28D",

          secondary: "#4B4737",

          accent: "#B1AB99",

          neutral: "#78716c",

          "base-100": "#f3f4f6",

          info: "#a8a29e",

          success: "#A2BC84",

          warning: "#44857F",

          error: "#BE5944",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  //   corePlugins: { preflight: false },
};
