export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/amazing.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.dynamictextareadirective',
  globals: {
    '@angular/core': 'ng.core'
  }
}