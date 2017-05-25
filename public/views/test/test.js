app.controller("test", ["$scope","$location","$http","ServiceConfig",function($scope,$location,$http,ServiceConfig){
	$(".map").height($(window).height())
	map_load();
}])
