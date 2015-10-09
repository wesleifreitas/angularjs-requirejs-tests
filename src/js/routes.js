/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function(app) {
    'use strict';

    app.config(function(pxConfig, $routeProvider, $locationProvider) {
        console.info('app.config');
        console.info('pxConfig', pxConfig);

        $routeProvider.when('/login', {
            templateUrl: pxConfig.PX_PACKAGE + 'system/login/login.html',
            //controller: 'loginCtrl',
            //controllerAs: 'vm'
        });
        $routeProvider.when('/home', {
            templateUrl: pxConfig.PX_PACKAGE + 'system/home/home.html',
            //controller: 'homeCtrl',
            //controllerAs: 'vm'
        });
        $routeProvider.when('/', {
            templateUrl: pxConfig.PX_PACKAGE + 'system/home/home.html',
            //controller: 'homeCtrl',
            //controllerAs: 'vm'
        });
        $routeProvider.otherwise({
            redirectTo: '/login'
        });

    });

    //app.run(function(pxConfig, $rootScope, $location, $cookieStore, $http) {
    app.run(function(pxConfig) {
        console.info('app.run');
        /*
        // Verifica se o login é obrigatório
        if (pxConfig.LOGIN_REQUIRED) {
            // keep user logged in after page refresh
            $rootScope.globals = $cookieStore.get('globals') || {};
            if ($rootScope.globals.currentUser) {
                $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
            }

            $rootScope.$on('$locationChangeStart', function(event, next, current) {
                // redirect to login page if not logged in and trying to access a restricted page
                var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
                var loggedIn = $rootScope.globals.currentUser;
                if (restrictedPage && !loggedIn) {
                    $location.path('/login');
                }
            });
        } else {
            $rootScope.globals = {
                currentUser: {
                    username: '',
                    authdata: null
                }
            };
        }
        */
    });

    return app;
});