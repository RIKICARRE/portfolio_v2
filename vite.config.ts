import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
  optimizeDeps: {
    include: ['qss'],
  },
  // Configure image domains for microlink
  css: {
    postcss: {
      plugins: [
        {
          // Add microlink.io to allowed image domains
          postcssPlugin: 'internal:image-domains',
          Once(root) {
            // This is a placeholder for Vite's image handling
            // Actual image domain restrictions are handled by the browser's CORS policy
          }
        }
      ]
    }
  }
})
