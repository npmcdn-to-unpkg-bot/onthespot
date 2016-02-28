var path = require("path");

/*
 node_modules/angular2/bundles/angular2-polyfills.js
 <script src="node_modules/systemjs/dist/system.src.js"
 <script src="node_modules/rxjs/bundles/Rx.js"
 <script src="node_modules/angular2/bundles/angular2.dev.js"
 */
module.exports = {
  entry: {
    vendor: [
      'es6-shim/es6-shim.min.js',
      'angular2/bundles/angular2-polyfills.js',
      'rxjs/bundles/Rx.js',
      'angular2/bundles/angular2.dev.js'
    ]
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  node: {
    fs: "empty"
  },
  output: {
    path: path.resolve(__dirname, "public/build"),
    filename: "vendor.js"
  }
};