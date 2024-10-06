/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Permite o uso de globals como describe, test, expect
    environment: 'jsdom', // Para simular um ambiente de navegador
    setupFiles: './setupTests.ts', // Arquivo de configuração global, se necessário
  },
});