define(['angular'], function(ng) {
	'use strict';

	var config = ng.module('pxConfig', [])
		.constant('pxConfig', {
			PX_PACKAGE: '', // Pacote Phoenix Project
			EXTERNAL_COMPONENTS: 'bower_components/', // Componentes externos
			PROJECT_ID: 0, // Identificação do projeto (table: px.project)
			PROJECT_NAME: 'Phoenix Project', // Nome do projeto
			PROJECT_SRC: 'px-project/src/', // Source do projeto
			LOCALE: 'pt-BR', // Locale
			LOGIN_REQUIRED: true // Login obrigatório?

		})

	return config;
});