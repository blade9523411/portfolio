import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Set `base` to your repo name when deploying to GitHub Pages:
//   base: '/your-repo-name/'
// Leave as '/' for Vercel, Netlify, or a custom domain.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
