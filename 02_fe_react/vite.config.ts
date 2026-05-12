import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    // nginx-feature(4080) 너머에서 도메인으로 들어오는 요청을 허용.
    // 선두 점(.atchu.co.kr)은 atchu.co.kr 본체 + 모든 서브도메인 매칭.
    allowedHosts: ['.atchu.co.kr', 'localhost', '127.0.0.1'],
    watch: {
      usePolling: true,
      interval: 300,
    },
    hmr: {
      clientPort: 4080,
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
})
