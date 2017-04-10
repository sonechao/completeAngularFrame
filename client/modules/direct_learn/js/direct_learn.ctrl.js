;(function(){

	'use strict';
	angular.module('myApp.directLearn')
	.controller('directLearnCtrl', directLearnCtrl);

	directLearnCtrl.$inject = [];

	function directLearnCtrl(){
		var vm = this;
		console.log('这里是指令的控制器！。。。。。。。。。。。。。');

		vm.legend = ["legend1", "legend2",'legend3','legend4'];  
	    vm.item = ['星期一', '星期2', '星期3', '星期4', '星期5', '星期6', '星期7', '星期8', '星期9', '星期10', '星期11', '星期12'];  
	    vm.data = [  
	        [-1, 1, 3, 7, 13, 16, 18, 16, 15, 9, 4, 2], //Berlin  
	        [0, 1, 4, 7, 12, 15, 16, 15, 15, 10, 6, 5], //London  
	        [4, 4, 5, 10, 16, 22, 25, 24, 20, 14, 9, 3],    //New York  
	        [7, 6, 8, 14, 17, 22, 25, 27, 24, 17, 14, 10]   //Tokyo  
	    ];  
	}

})();