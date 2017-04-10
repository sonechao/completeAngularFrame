;(function(){
	'use strict';
	angular.module('myApp.supermarket')
	.controller('supermarketCtrl',supermarketCtrl);

	supermarketCtrl.$inject = ['$scope','$state'];

	function supermarketCtrl($scope,$state){
		var vm = this;
		console.log('$state:    ',$state);

		vm.dataList = [];
	}

})();