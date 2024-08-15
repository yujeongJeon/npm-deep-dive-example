import {resolve, dirname} from 'node:path'
import {fileURLToPath} from 'node:url'

import {babel} from '@rollup/plugin-babel'
import react from '@vitejs/plugin-react'
// types 가 없음.
// 1. 타입을 따로 만들어서 설치하는 예제를 보여준다
// 2. 직접 구현하는 예제를 보여준다.
import preserveDirectives from 'rollup-preserve-directives'
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

import pkg from './package.json'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    plugins: [
        react(),
        babel({
            babelHelpers: 'runtime',
            presets: [
                [
                    '@babel/preset-env',
                    {
                        debug: true,
                    },
                ],
            ],
            plugins: [
                [
                    '@babel/plugin-transform-runtime',
                    {
                        corejs: {version: 3, proposals: true},
                    },
                ],
            ],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            exclude: 'node_modules/**',
        }),
        tsconfigPaths(),
        dts({
            include: ['src'],
            exclude: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
            outDir: 'dist/types',
            rollupTypes: true,
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
                utils: resolve(__dirname, 'src/utils/index.ts'),
            },
        },
        rollupOptions: {
            external: [
                ...Object.keys(pkg.peerDependencies),
                'next/image',
                'react/jsx-runtime',
                /@babel\/runtime-corejs3/,
            ],
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
            plugins: [preserveDirectives()],
        },
    },
})
