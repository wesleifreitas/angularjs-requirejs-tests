define(['angular'], function(ng) {
	'use strict';

	var config = ng.module('pxConfig', [])
		.constant('pxConfig', {
			PX_PACKAGE: '', // Pacote Phoenix Project
			LIB: 'lib/', // Componentes externos
			PROJECT_ID: 0, // Identificação do projeto (table: px.project)
			PROJECT_NAME: 'Phoenix Project', // Nome do projeto
			PROJECT_SRC: 'angularjs-requirejs-tests/src/', // Source do projeto
			LOCALE: 'pt-BR', // Locale
			LOGIN_REQUIRED: false // Login obrigatório?
		})

	return config;
});