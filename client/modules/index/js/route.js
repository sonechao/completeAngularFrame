;(function(){
	'use strict';

	angular
		.module('myApp')
		.config(config)
		.run(['$rootScope','$state','$stateParams','$window','localStorageService',function($rootScope,$state,$stateParams,$window,localStorageService){
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;

			$rootScope.$on('$stateChangeSuccess',function(event,toState,toParams,fromState,fromParams){
				$rootScope.noCommonPart = false;
				var noCommonState = ['signIn','cart','Canvaspie'];
				if(noCommonState.indexOf($state.current.name) !== -1){
					$rootScope.noCommonPart = true;
				}
			});
		}]);

	config.$inject = ['$locationProvider','$stateProvider','$urlRouterProvider','$httpProvider','ngRapProvider'];

	function config($locationProvider,$stateProvider,$urlRouterProvider,$httpProvider,ngRapProvider){
		$stateProvider
			.state('signIn',{
				url:'/sign_in',
				templateUrl : '/modules/account/views/sign_in.html',
				controller:'signInCtrl',
				controllerAs:'vm'
			})
			.state('signIn.signIn2',{
				url:'/test',
				templateUrl : '/modules/account/views/sign_in_test.html',
				controller:'signInCtrl',
				controllerAs:'vm'
			})
			.state('cart',{
				url:'/cart',
				templateUrl : '/modules/cart/views/cart.html',
				controller:'cartCtrl',
				controllerAs:'sc'
			})
			.state('Supermarket',{
				url:'/supermarket?test&name',
				templateUrl : '/modules/supermarket/views/supermarket.tpl.html',
				controller:'supermarketCtrl',
				controllerAs:'vm'
			})
			.state('DirectLearn',{
				url:'/directLearn',
				templateUrl : '/modules/direct_learn/views/direct_learn.html',
				controller:'directLearnCtrl',
				controllerAs:'vm'
			})
			.state('Canvaspie',{
				url:'/canvaspie',
				templateUrl : '/modules/canvaspie/views/canvaspie.tpl.html',
				controller:'canvaspieCtrl',
				controllerAs:'vm'
			});

		$locationProvider.html5Mode(true);

	}



})();