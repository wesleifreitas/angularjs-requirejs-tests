define(['angular',
    'angular-route',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function(angular) {
    var app = angular.module('myApp', [
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services',
        'ngRoute'
    ]);

    app.init = function() {
        angular.bootstrap(document, ['myApp']);
    };

    app.config(function($routeProvider, $locationProvider) {
        console.info('app.config');
        
        $routeProvider.when('/login', {
            templateUrl: 'partials/partial1.html',
            //controller: 'loginCtrl',
            //controllerAs: 'vm'
        });
        $routeProvider.when('/home', {
            templateUrl: 'partials/partial2.html',
            //controller: 'homeCtrl',
            //controllerAs: 'vm'
        });
        $routeProvider.when('/', {
            templateUrl: 'partials/partial2.html',
            //controller: 'homeCtrl',
            //controllerAs: 'vm'
        });
        $routeProvider.otherwise({
            redirectTo: '/login'
        });
        
    });

    return app;
});