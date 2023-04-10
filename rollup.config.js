import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import packageJson from './package.json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const tailwindcss = require('tailwindcss');
const tailwindConfig = require('./tailwind.config.js');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    external(),
    commonjs(),
    resolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: './tsconfig.json',
    }),
    terser(),
    postcss({
      config: {
        path: './postcss.config.js',
      },
      extensions: ['.css'],
      minimize: true,
      plugins: [tailwindcss(tailwindConfig)],
    }),
  ],
};
