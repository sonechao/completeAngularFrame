;(function(){

	'use strict';
	angular.module('myApp.directLearn')
	.controller('directLearnCtrl', directLearnCtrl);

	directLearnCtrl.$inject = [];

	function directLearnCtrl(){
		var vm = this;
		console.log('这里是指令的控制器！。。。。。。。。。。。。。');

		vm.legend = ["Berlin", "London",'New York','Tokyo'];  
	    vm.item = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];  
	    vm.data = [  
	        [-1, 1, 3, 7, 13, 16, 18, 16, 15, 9, 4, 2], //Berlin  
	        [0, 1, 4, 7, 12, 15, 16, 15, 15, 10, 6, 5], //London  
	        [4, 4, 5, 10, 16, 22, 25, 24, 20, 14, 9, 3],    //New York  
	        [7, 6, 8, 14, 17, 22, 25, 27, 24, 17, 14, 10]   //Tokyo  
	    ];  
	}

})();