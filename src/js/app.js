define(['angular',
    'angular-route',
    'px-config',
    '../custom/controllers/index',
    '../custom/directives/index',
    '../custom/filters/index',
    '../custom/services/index'
], function(angular) {
    var app = angular.module('myApp', [
        'pxConfig',
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services',
        'ngRoute'
    ]);

    app.init = function() {
        angular.bootstrap(document, ['myApp']);
    };

    /*
    app.config(function($routeProvider, $locationProvider) {
        console.info('app.config');
        
        $routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            //controller: 'loginCtrl',
            //controllerAs: 'vm'
        });
        $routeProvider.when('/home', {
            templateUrl: 'partials/home.html',
            //controller: 'homeCtrl',
            //controllerAs: 'vm'
        });
        $routeProvider.when('/', {
            templateUrl: 'partials/home.html',
            //controller: 'homeCtrl',
            //controllerAs: 'vm'
        });
        $routeProvider.otherwise({
            redirectTo: '/login'
        });
        
    });
    */
    return app;
});