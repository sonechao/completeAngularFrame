;(function(){
	'use strict';

	angular.module('myApp.chartDirective')
	.directive('selectDirective',selectDirective);

	function selectDirective(){
		'ngInject';
		return {
			scope: {
				list: '='
			},
			restrict: "AE",
			templateUrl: '/components/chartDirective/views/select.tpl.html',
			replace: true,
			link: linkFunc
		}

		function linkFunc($scope, element, attrs, controller){
			$scope.$watch('search', function(newValue, oldValue, scope) {
				if(newValue !== oldValue && newValue.length){
					// 向后台发送请求数据
					$scope.list = [{
						date: new Date().getTime()
					},{
						date: new Date().getTime()
					},{
						date: new Date().getTime()
					}];
				}else {
					$scope.list = [];
				}
			}, true);
		}
	}
})();