import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

//빌드시 맨 처음으로 어떻게 전처리 해야하는 지 알려주는
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  /////??? modern-compiler 란 무엇인가
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
