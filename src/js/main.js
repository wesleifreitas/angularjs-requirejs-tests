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
        'jquery-ui': '../lib/jquery-ui/jquery-ui.min',
        'dataTables': '//datatables.net/download/build/nightly/jquery.dataTables.js?_=99823af74ba032ba950452c707888b11',
        'metro': '../system/core/external/metro.min',
        'docs': '../system/core/external/docs',
        'moment': '../lib/moment/min/moment-with-locales.min',
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
        },
        'metro': {
            deps: ['jquery', 'jquery-ui']
        },
        'docs': {
            deps: ['jquery']
        }

    },
    config: {
        moment: {
            noGlobal: true
        }
    }
});

// Angular Bootstrap 
require(['./app', './routes'], function(app) {
    // initialisation code defined within app.js
    app.init();
});