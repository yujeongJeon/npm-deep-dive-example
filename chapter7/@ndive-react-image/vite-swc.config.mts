import {resolve, dirname} from 'node:path'
import {fileURLToPath} from 'node:url'

import react from '@vitejs/plugin-react-swc'
import preserveDirectives from 'rollup-preserve-directives'
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

import pkg from './package.json'

const __dirname = dirname(fileURLToPath(import.meta.url))

const SUPPORT_TARGET = 'es2020'

export default defineConfig({
    plugins: [
        react({
            devTarget: SUPPORT_TARGET,
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
            plugins: [preserveDirectives()],
        },
        target: SUPPORT_TARGET,
    },
    esbuild: {
        target: SUPPORT_TARGET,
    },
})
