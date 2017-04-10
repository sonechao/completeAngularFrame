;(function(){
	'use strict';

	angular.module('myApp', [
		'ui.router',
		'ngRap',
		'LocalStorageModule',
		'ui.bootstrap',
		'myApp.account',
		'myApp.cart',
		'myApp.supermarket',
		'myApp.directLearn',
		'myApp.chartDirective'
		]);
})();