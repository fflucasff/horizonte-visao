import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Publicado em https://fflucasff.github.io/horizonte-visao/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/horizonte-visao/' : '/',
  plugins: [react()],
}))
