import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "https://alvarorom3.github.io/mockup-atlas-gym/",
})
