/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function(app) {
    'use strict';

    app.config(function(pxConfig, $routeProvider, $locationProvider) {
        $routeProvider.when('/login', {
            templateUrl: pxConfig.PX_PACKAGE + 'system/login/login.html',
            controller: 'loginCtrl',
            controllerAs: 'vm'
        });
        $routeProvider.when('/home', {
            templateUrl: pxConfig.PX_PACKAGE + 'system/home/home.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
        });
        $routeProvider.when('/', {
            templateUrl: pxConfig.PX_PACKAGE + 'system/home/home.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
        });
        $routeProvider.otherwise({
            redirectTo: '/login'
        });

        // Carregar CSS
        var cssLoader = [{
            file: pxConfig.PX_PACKAGE + 'system/core/external/metro-bootstrap.css'
        }, {
            file: pxConfig.PX_PACKAGE + 'system/core/external/metro-bootstrap-responsive.css'
        }, {
            file: pxConfig.PX_PACKAGE + 'system/core/px-project.css'
        }, {
            file: pxConfig.LIB + 'bootstrap/dist/css/bootstrap.min.css'
        }, {
            file: 'http://cdn.datatables.net/plug-ins/1.10.7/integration/bootstrap/3/dataTables.bootstrap.css'
        }, {
            file: pxConfig.LIB + 'angular-material/angular-material.min.css'
        }, {
            file: 'https://fonts.googleapis.com/css?family=RobotoDraft:300,400,500,700,400italic'
        }, {
            file: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }, {
            file: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
        }, {
            file: pxConfig.PX_PACKAGE + 'system/components/px-view-header/px-view-header.css'
        }, {
            file: pxConfig.PX_PACKAGE + 'system/components/px-data-grid/px-data-grid.css'
        }, {
            file: pxConfig.PX_PACKAGE + 'system/components/px-form-item/px-form-item.css'
        }];

        // Loop em cssLoader
        $.each(cssLoader, function(i, item) {           
            $('<link rel="stylesheet"/>').attr('href', item.file).appendTo($('head'));
        });
        $('<link rel="stylesheet"/>').attr('href', document.location.pathname + 'styles.css').appendTo($('head'));

    });

    app.run(function(pxConfig, $rootScope, $location, $cookieStore, $http) {
        // Verifica se o login é obrigatório
        if (pxConfig.LOGIN_REQUIRED) {
            // manter usuário logado após atualização de página
            $rootScope.globals = $cookieStore.get('globals') || {};
            if ($rootScope.globals.currentUser) {
                $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
            }

            $rootScope.$on('$locationChangeStart', function(event, next, current) {
                // redirecionar para a página de login se não estiver logado e tentar acessar uma página restrita                
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
    });

    return app;
});