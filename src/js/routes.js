/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function(app) {
    'use strict';

    app.config(function($routeProvider, $locationProvider, pxConfig) {
        console.info('app.config');
        console.info('pxConfig', pxConfig);

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

    return app;
});