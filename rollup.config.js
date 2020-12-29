import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import alias from '@rollup/plugin-alias';
import svgr from '@svgr/rollup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import { uglify } from 'rollup-plugin-uglify';
import path from 'path';

import packageJson from './package.json';

const rootDir = path.resolve(__dirname);

const plugins = [
    peerDepsExternal(),
    postcss({
        use: {
            sass: null,
            stylus: null,
            less: { javascriptEnabled: true },
        },
        extensions: ['.scss'],
        extract: true,
    }),
    commonjs(),
    typescript({
        typescript: require('typescript'),
    }),
    json(),
    alias({
        entries: [{ find: 'src', replacement: path.resolve(rootDir, 'src') }],
    }),
    svgr(),
];

if (process.env.BUILD === 'production') {
    plugins.push(
        uglify({
            nameCache: {},
        })
    );
}

export default {
    input: './src/index.ts',
    dest: 'index.js',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins,
};
