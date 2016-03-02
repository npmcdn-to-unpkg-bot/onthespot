var path = require("path");

module.exports = {
  entry: {
    vendor: [
      'npm/es6-shim/es6-shim.js',
      'system-polyfills.js',
      'npm/angular2/bundles/angular2-polyfills.js',
      //'typescript@1.8.2/lib/typescript.js',
      //'rxjs@5.0.0-beta.2/bundles/Rx.js',
      //'angular2@2.0.0-beta.7/bundles/angular2.dev.js'
    ]
  },
  resolveLoader: {
    //root: path.join(__dirname, 'node_modules')
    root: (function(){
      var x = path.join(__dirname, 'public/jspm_packages/npm');
      console.log(x);
      return x
    }())
  },
  node: {
    fs: "empty"
  },
  output: {
    path: path.resolve(__dirname, "public/build"),
    filename: "vendor.js"
  }
};