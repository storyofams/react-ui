import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import external from 'rollup-plugin-peer-deps-external';
import svg from 'rollup-plugin-svg';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';

import pkg from './package.json';

const extensions = ['.tsx', '.ts'];

export default {
  external: ['react', 'react-dom'],
  input: ['./src/index.ts'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    // external handles the third-party deps we've listed in the package.json
    /** @note needs to come before resolve! */
    external(),
    resolve({
      preferBuiltins: true,
    }),
    commonjs(),
    typescript({
      clean: true,
      tsconfig: './tsconfig.build.json',
      typescript: ttypescript,
    }),
    babel({
      extensions,
      babelHelpers: 'runtime',
      include: ['src/**/*'],
      exclude: ['node_modules/**'],
    }),
    svg(),
    terser(),
    filesize(),
  ],
};
