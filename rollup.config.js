import { defineConfig } from 'rollup';
import react from '@rollup/plugin-react';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default defineConfig({
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    react(),
    resolve(),
    commonjs(),
    terser(),
  ],
  external: ['react', 'react-dom'],
  context: 'window',
  moduleContext: {
    './src/theme/styles.js': './src/theme/styles.js',
  },
});
