import { Content, Grandiflora_One, Outfit, Ovo } from "next/font/google";

/** @type {import(tailwindcss).Config}  */
export default {
    Content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
               lightHover: "#f0f0f0",
               darkHover: "#2a004a",
               darktheme: "#11001F",
            },
            frontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"],
            },
            boxShadow: {
                'black' : '4px 4px o #000',
                'white' : '4px 4px o #fff',
            },
            gridTamplateColums:{}
          },
        },
        darkMode: 'selector',
    plugins: [],
};