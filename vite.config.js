import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' lets the built site work from any folder or GitHub Pages path.
export default defineConfig({
  plugins: [react()],
  base: './',
});
