/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { lemon: "#E3D28D" },
      backgroundImage: {
        MHPCC: "url('/img/header_bg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  //   corePlugins: { preflight: false },
};
