import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/content-script.js',
  output: {
    file: 'dist/content-script.js',
    format: 'cjs'
  },
  plugins: [
    nodeResolve()
  ]
};
