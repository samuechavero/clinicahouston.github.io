import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/clinicahouston.github.io/',
  plugins: [react()],
})
