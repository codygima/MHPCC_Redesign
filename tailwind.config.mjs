/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { lemon: "#E3D28D", slate_gray: "#2F4F4F" },
      backgroundImage: {
        MHPCC: "url('/img/header_bg.png')",
        prllx1: "url('src/img/mhpcc_building.jpg')",
        prllx2: "url('src/img/MHPCC_aerial.jpg')",
        prllx3: "url('src/img/building.jpg')",
      },
      screens: {
        md: "800px",
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
