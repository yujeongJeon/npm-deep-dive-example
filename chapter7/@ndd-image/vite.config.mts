import {resolve, dirname} from 'node:path'
import {fileURLToPath} from 'node:url'

import {babel} from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'

import pkg from './package.json'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    plugins: [
        react(),
        dts({
            include: ['src'],
            exclude: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
            outDir: 'dist/types',
        }),
    ],
    build: {
        outDir: 'dist',
        sourcemap: true,
        lib: {
            entry: {
                index: resolve(__dirname, 'src/index.ts'),
                react: resolve(__dirname, 'src/react-image-filter.tsx'),
                next: resolve(__dirname, 'src/next-image-filter.tsx'),
                utils: resolve(__dirname, 'src/utils.ts'),
            },
        },
        rollupOptions: {
            external: [...Object.keys(pkg.peerDependencies), 'next/image', 'react/jsx-runtime'],
            output: [
                {
                    format: 'es',
                    dir: 'dist/esm',
                },
                {
                    format: 'cjs',
                    dir: 'dist/cjs',
                },
            ],
            plugins: [
                nodeResolve(),
                commonjs(),
                babel({
                    babelHelpers: 'bundled',
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: 'defaults',
                                useBuiltIns: 'usage',
                                corejs: 3,
                            },
                        ],
                    ],
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                    exclude: 'node_modules/**',
                }),
            ],
        },
    },
    resolve: {
        alias: {},
    },
})
