;(function(){
	'use strict';
	angular.module('myApp.canvaspie')
	.controller('canvaspieCtrl',canvaspieCtrl);

	function canvaspieCtrl(){
		'ngInject';
		var vm = this;
		console.log("here is canvaspie's ctrl!!!!!!!!!!!!");

		vm.legend = ['预算'];  
	    vm.item = ['销售', '管理', '信息技术', '客服', '研发', '市场'];  
	    vm.max = [55000,55000,55000,55000,55000,55000];  
	    vm.data = [  
	        [4300, 10000, 28000, 35000, 50000, 19000]  
	    ]; 

	}

})();