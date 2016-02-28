System.register(['angular2/platform/browser', 'angular2/http', 'app/home/home.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, http_1, home_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(home_component_1.default, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=application.js.map