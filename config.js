var src = 'public/src';
var dist = 'public/dist';
var bowerRoot = 'public/bower';

exports.config = {
  scripts: {
    app: [
      '!public/src/scripts/vendor/**/*.js',
      src + '/**/*.module.js',
      src + '/**/*.config.js',
      src + '/**/*.controller.js',
      src + '/**/*.service.js',
      src + '/**/*.directive.js',
      src + '/**/*.js'
    ],
    vendor: [
      'public/src/scripts/vendor/**/*.js',
      bowerRoot + '/angular/angular.js',
      bowerRoot + '/angular-aria/angular-aria.js',
      bowerRoot + '/angular-animate/angular-animate.js',
      bowerRoot + '/angular-material/angular-material.js',
      bowerRoot + '/angular-ui-router/release/angular-ui-router.js',
      bowerRoot + '/rxjs/dist/rx.all.js'
    ]
  },
  styles: {
    app: [
      'public/src/styles/**/*.css'
    ],
    vendor: [
      bowerRoot + '/angular-material/angular-material.css'
    ]
  },
  views: {
    root: 'public/src/views/*.ejs',
    templates: 'public/src/views/templates/**/*.html'
  },
  injections: [
    dist + '/scripts/vendor.js',

    dist + '/scripts/**/*.module.js',
    dist + '/scripts/**/*.config.js',

    dist + '/scripts/**/*.controller.js',
    dist + '/scripts/**/*.service.js',
    dist + '/scripts/**/*.directive.js',

    dist + '/scripts/**/*.js',
    dist + '/styles/**/*.css'
  ]
};
