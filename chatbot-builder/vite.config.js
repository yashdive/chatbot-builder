import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  viteStaticCopy({
      targets: [
        {
          src: 'index.html',
          dest: '.' // copies index.html to dist/404.html
        }
      ]
    })],
    base:'/chatbot-builder/'
})
