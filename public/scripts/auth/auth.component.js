System.register(['angular2/core', './auth.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, auth_service_1;
    var AuthComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            AuthComponent = (function () {
                function AuthComponent(authService) {
                    this.authService = authService;
                    console.log('Auth component:', authService);
                }
                AuthComponent = __decorate([
                    core_1.Component({
                        selector: 'authenticate',
                        template: '<h1>Please Log in</h1>',
                        providers: [auth_service_1.default]
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.default])
                ], AuthComponent);
                return AuthComponent;
            }());
            exports_1("default",AuthComponent);
        }
    }
});
//# sourceMappingURL=auth.component.js.map