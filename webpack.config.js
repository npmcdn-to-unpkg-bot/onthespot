var path = require("path");

module.exports = {
  entry: {
    vendor: [
      'es6-shim/es6-shim.js',
      'angular2/bundles/angular2-polyfills.js',
      'rxjs/bundles/Rx.js',
      'angular2/bundles/angular2.dev.js'
    ]
  },
  resolveLoader: {
    //root: path.join(__dirname, 'node_modules')
    root: path.join(__dirname, 'jspm_packages/npm')
  },
  node: {
    fs: "empty"
  },
  output: {
    path: path.resolve(__dirname, "public/build"),
    filename: "vendor.js"
  }
};