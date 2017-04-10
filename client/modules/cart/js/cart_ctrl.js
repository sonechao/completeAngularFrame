;(function(){
	'use strict';

	// console.log('这里是购物车部分JS！！！！！！！！！！！！！！！！！！！');


	angular.module('myApp.cart')
	.controller('cartCtrl',cartCtrl);

	cartCtrl.$inject = ['cartService'];

	function cartCtrl(cartService){
		//jshint validthis:true

		var sc = this;
		console.log('这里是购物车的控制器!');

		sc.username = 'xiangming';
		sc.password = 'nicaidaowojiugeinifahongbao!'

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