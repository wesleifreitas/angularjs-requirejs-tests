define(['angular',
    'angular-route',
    'angular-cookies',
    'angular-resource',
    'angular-sanitize',
    'angular-animate',
    'angular-aria',
    'angular-material',
    'angular-ui-mask',
    'px-config',
    'px-util',
    '../system/controllers/index',
    '../system/services/index',    
    '../custom/controllers/index',
    '../custom/directives/index',
    '../custom/filters/index',
    '../custom/services/index'
], function(angular) {
    var app = angular.module('myApp', [
        'ngRoute',
        'ngCookies',
        'ngMaterial',
        'ui.mask',
        'pxConfig',
        'pxUtil', 
        'system.controllers',
        'system.services',
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services'        
    ]);
    
    app.init = function() {
        angular.bootstrap(document, ['myApp']);
    };
    
    return app;
});