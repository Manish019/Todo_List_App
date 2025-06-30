import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // This plugin is used to process Tailwind CSS styles
    tailwindcss(),



  ],

})
