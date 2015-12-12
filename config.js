var src = 'client/public/src';
var dist = 'client/public/dist';
var bowerRoot = 'client/public/bower';

exports.config = {
  binaryURI: '/binserver',
  scripts: {
    app: [
      '!client/public/src/scripts/vendor/**/*.js',
      src + '/**/*.module.js',
      src + '/**/*.config.js',
      src + '/**/*.controller.js',
      src + '/**/*.service.js',
      src + '/**/*.directive.js',
      src + '/**/*.js'
    ],
    vendor: [
      // Manually downloaded
      'public/src/scripts/vendor/**/*.js',

      // == Bower  == //
      // Angular
      bowerRoot + '/angular/angular.js',
      bowerRoot + '/angular-aria/angular-aria.js',
      bowerRoot + '/angular-animate/angular-animate.js',
      bowerRoot + '/angular-material/angular-material.js',
      bowerRoot + '/angular-ui-router/release/angular-ui-router.js',
      bowerRoot + '/angular-local-storage/dist/angular-local-storage.js',
      bowerRoot + '/angular-jwt/dist/angular-jwt.js',

      // == Standalones == //

      // RXJs
      bowerRoot + '/rxjs/dist/rx.all.js',

      // Websockets, etc.
      bowerRoot + '/eventEmitter/EventEmitter.js',
      bowerRoot + '/sockjs/sockjs.js',
      bowerRoot + '/binaryjs/dist/binary.js'
    ]
  },
  styles: {
    app: [
      'public/src/styles/**/*.scss'
    ],
    vendor: [
      bowerRoot + '/angular-material/angular-material.css'
    ]
  },
  views: {
    root: 'public/src/views/*.ejs',
    templates: 'public/src/views/templates/**/*.html'
  },
  fonts: 'public/fonts/*.*',
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
