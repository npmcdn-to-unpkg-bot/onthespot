var src = 'public';
var dist = 'public/build';
var jspmNode = 'public/jspm_packages/npm';
var jspmGit = 'public/jspm_packages/github';

module.exports = exports = {
  binaryURI: '/binserver',
  src: src,
  dist: dist,

  scripts: {
    vendor: [

    ]
  },
  styles: {
    vendorIncludes: [
      jspmNode + '/materialize-css*/sass/**/*'
    ],
    vendor: [
      jspmNode + '/materialize-css@0.97.5/sass/materialize.scss'
    ],
    app: [
      src + '/styles/**/*.scss'
    ]
  },
  fonts: src + '/fonts/*.*'
};
