import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
=======
// https://vite.dev/config/
>>>>>>> b5c0952842cc4edf318b1eaf79724fe75f962223
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
<<<<<<< HEAD
      '/api': {
        target: 'http://localhost:8080', // 로컬 개발 백엔드
=======
      '/api':{
        target: 'http://localhost:8080',
>>>>>>> b5c0952842cc4edf318b1eaf79724fe75f962223
        changeOrigin: true
      }
    }
  }
<<<<<<< HEAD
})
=======
})
>>>>>>> b5c0952842cc4edf318b1eaf79724fe75f962223
