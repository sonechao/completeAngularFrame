;(function(){
	'use strict';

	// console.log('这里是购物车部分JS！！！！！！！！！！！！！！！！！！！');


	angular.module('myApp.cart')
	.controller('cartCtrl',cartCtrl);

	cartCtrl.$inject = ['cartService'];

	function cartCtrl(cartService){
		//jshint validthis:true

		var sc = this;


		sc.legend = ["legend1", "legend2",'legend3','legend4'];  
	    sc.item = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];  
	    sc.data = [  
	        [-1, 1, 3, 7, 13, 16, 18, 16, 15, 9, 4, 2], //Berlin  
	        [0, 1, 4, 7, 12, 15, 16, 15, 15, 10, 6, 5], //London  
	        [4, 4, 5, 10, 16, 22, 25, 24, 20, 14, 9, 3],    //New York  
	        [7, 6, 8, 14, 17, 22, 25, 27, 24, 17, 14, 10]   //Tokyo  
	    ]; 


		console.log('这里是购物车的控制器!');

		sc.username = 'xiangming';
		sc.password = 'nicaidaowojiugeinifahongbao!';

		sc.buy = buy;

		function buy(){

			var params = {
				username : sc.username,
				password : sc.password
			}

			var response = cartService.buy(params);
			if(response.code === 10000){
				alert('登录成功');
				return false;
			}
			if(2 === 2){
				alert('2真的等于2');
				return;
			}
			alert('登录失败！');

		}


	}

})();