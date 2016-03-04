var path = require("path");

module.exports = {
  entry: {
    vendor: [
      'npm/es6-shim/es6-shim.js',
      'system-polyfills.js',
      'npm/angular2/bundles/angular2-polyfills.js'
    ]
  },
  resolveLoader: {
    //root: path.join(__dirname, 'node_modules')
    root: path.join(__dirname, 'public/jspm_packages/npm')
  },
  node: {
    fs: "empty"
  },
  output: {
    path: path.resolve(__dirname, "public/build"),
    filename: "vendor.js"
  }
};