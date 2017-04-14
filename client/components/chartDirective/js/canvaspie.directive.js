;(function(){
	'use strict';
	angular.module('myApp.chartDirective')
	.directive('canvaspieDirective',canvaspieDirective);

	function canvaspieDirective(){
		'ngInject';
			return {  
	        scope: {  
	            id: "@",  
	            legend: "=",  
	            item: "=",  
	            max: "=",  
	            data: "="  
	        },  
	        restrict: 'E',  
	        template: '<div style="height:400px"></div>',  
	        replace: true,  
	        link: function($scope, element, attrs, controller) {  
	            var option = {  
	                tooltip: {  
	                	show:true,
	                    trigger: 'item'  
	                },  
	                legend: {  
	                    orient: 'vertical',  
	                    x: 'right',  
	                    y: 'bottom',  
	                    data: $scope.legend  
	                },  
	                polar: [{  
	                    indicator: function(){  
	                        var indicator = [];  
	                        for(var i=0;i<$scope.item.length;i++){  
	                            var item = {  
	                                text: $scope.item[i],  
	                                max: $scope.max[i] //设置最大值  
	                            };  
	                            indicator.push(item);  
	                        };  
	                        return indicator;  
	                    }()  
	                }],  
	                series: [{  
	                    type: 'radar',  
	                    data: function(){  
	                        var data = [];  
	                        for(var i=0;i<$scope.legend.length;i++){  
	                            var item = {  
	                                name: $scope.legend[i],  
	                                value: $scope.data[i]  
	                            };  
	                            data.push(item);  
	                        }  
	                        return data;  
	                    }()  
	                }]  
	            };  
	  
	            var myChart = echarts.init(document.getElementById($scope.id),'macarons');  
	            myChart.setOption(option);  
	        }  
	    };
	}

})();