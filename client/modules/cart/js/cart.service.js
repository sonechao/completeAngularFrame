;(function(){
	'use strict';

	angular
		.module('myApp.cart')
		.service('cartService',cartService);


	cartService.$inject = ['$http'];
	function cartService($http){
		return {
			buy : cart111,
		};

		function cart111(params){
			/*return $http.post('/',params).then(function(response){
				return response;
			});*/

			return {
				code:10001,
				data:'success'
			};
		}

	}
})();
