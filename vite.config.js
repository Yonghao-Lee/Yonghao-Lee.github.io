import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base: './'` makes asset URLs relative, so the build works whether it's
// served from the domain root or from a GitHub Pages project subpath
// (https://<user>.github.io/<repo>/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
