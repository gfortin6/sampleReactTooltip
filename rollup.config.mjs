import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
      sourceMap: true,
    }),
    postcss(),
    json(),
    terser(),
    resolve({
      browser: true,
    }),
  ],
  external: [
    'react',
    'react-dom',
    'react-bootstrap',
    'react-icons/ri',
    'react-icons/bs',
    'react-icons/fi',
    'react-icons/cg',
    'react-datepicker/dist/react-datepicker.css',
    'react-datepicker',
    'react-input-mask',
    'react-pro-sidebar',
    'react-toastify',
    'lottie-react',
    // 'react-tooltip',
    'react-bootstrap-typeahead',
  ], // Add any external dependencies here to prevent them from being bundled
};
