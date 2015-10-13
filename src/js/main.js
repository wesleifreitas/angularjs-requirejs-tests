require.config({
    paths: {
        'angular': '../lib/angular/angular',
        'angular-locale_pt-br': '../lib/angular-i18n/angular-locale_pt-br',
        'angular-route': '../lib/angular-route/angular-route',
        'angular-cookies': '../lib/angular-cookies/angular-cookies',
        'angular-resource': '../lib/angular-resource/angular-resource.min',
        'angular-sanitize': '../lib/angular-sanitize/angular-sanitize.min',
        'angular-animate': '../lib/angular-animate/angular-animate.min',
        'angular-aria': '../lib/angular-aria/angular-aria.min',
        'angular-material': '../lib/angular-material/angular-material.min',
        'angular-ui-mask': '../lib/angular-ui-mask/dist/mask.min',
        'jquery': '../lib/jquery/dist/jquery.min',
        'jjquery-ui': '../lib/jquery-ui/jquery-ui.min',
        'numeral': '../lib/numeral/min/numeral.min',
        'numeral-languages': '../lib/numeral/min/languages.min',
        'string-mask': '../lib/string-mask/src/string-mask',
        'px-config': 'px-config',
        'px-util': '../system/utils/js/px-util'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-locale_pt-br': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-cookies': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-aria': {
            deps: ['angular']
        },
        'angular-material': {
            deps: ['angular']
        },
        'angular-ui-mask': {
            deps: ['angular']
        }

    }
});

// Angular Bootstrap 
require(['./app', './routes'], function(app) {
    // initialisation code defined within app.js
    app.init();
});