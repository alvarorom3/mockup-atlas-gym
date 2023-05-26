/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "hero-section": "url('./src/assets/images/hero.jpg')",
            },
            colors: {
                neutro: "#022026",
                "color-1": "#036873",
                "color-2": "#97d6df",
                "color-3": "#ff3e1a",
            },
            fontFamily: {
                alfa: ["Alfa Slab One", "cursive"],
                poppins: ["Poppins", "sans - serif"],
            },
            keyframes: {
                opacity: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                translate: {
                    "0%": { transform: "translateY(-90%)" },
                    "100%": { transform: "translateY(0%)" },
                },
            },
            animation: {
                tableShow: "opacity 0.5s ease-in-out",
                navDown: "translate 0.7s ease-in-out",
            },
        },
    },
    plugins: [],
}
