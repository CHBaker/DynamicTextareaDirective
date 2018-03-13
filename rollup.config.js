export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/dynamictextareadirective.umd.js',
  format: 'umd',
  moduleName: 'ng.dynamictextareadirective',
  globals: {
    '@angular/core': 'ng.core'
  }
}