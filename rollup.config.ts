import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import external from 'rollup-plugin-peer-deps-external';
// import rename from 'rollup-plugin-rename';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';

const clear = require('rollup-plugin-clear');

const extensions = ['.tsx', '.ts'];

export default {
  external: ['react', 'react-dom'],
  input: ['./src/index.ts'],
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      dir: 'dist/esm',
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  preserveModules: true,
  plugins: [
    clear({
      targets: ['dist'],
      watch: true,
    }),
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
      exclude: ['node_modules/**'],
    }),
    // rename({
    //   include: ['**/*.js'],
    //   map: (name) => name.replace('node_modules/', 'external/'),
    // }),
    terser(),
    filesize(),
  ],
};
