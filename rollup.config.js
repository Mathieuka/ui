import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import copy from 'rollup-plugin-copy'
import svgr from '@svgr/rollup'

import * as packageJson from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    copy({
      targets: [
        { src: ['src/ui/styles/palette.scss', 'src/ui/styles/themes.scss'], dest: 'lib/scss' }
      ],
      verbose: true
    }),
    peerDepsExternal(),
    svgr(),
    resolve(),
    commonjs(),
    typescript(),
    postcss()
  ]
}
