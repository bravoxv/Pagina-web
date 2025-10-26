import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ¡MUY IMPORTANTE PARA GITHUB PAGES!
  // El valor de 'base' DEBE ser el nombre de tu repositorio de GitHub,
  // comenzando y terminando con una barra inclinada.
  // Ejemplo: si tu repositorio se llama 'mi-proyecto', aquí debe ser '/mi-proyecto/'.
  base: '/mi-universo-bravo-xv/',
})
