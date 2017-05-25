app.controller("AboutUs", ["$scope","$rootScope","$location","$sce",function($scope,$rootScope,$location,$sce){
	over(".comp")
	if($rootScope.a){
		$scope.boolen5 = true;	
		$scope.boolen1 = false;
		$(".comp:first").find("img").css("visibility","hidden").next().css("color","#4d4d4d");
		$(".comp:last").find("img").css("visibility","visible").next().css("color","#ff7077");
		$("#naver span").text("好娘家资讯")
	}else{
		$scope.boolen1 = true;
	}
	$scope.comP = function(){
		$scope.boolen1 = true;
		$scope.boolen2 = false;
		$scope.boolen3 = false;
		$scope.boolen4 = false;
		$scope.boolen5 = false;
	}
	$scope.conC = function(){
		$scope.boolen1 = false;
		$scope.boolen2 = true;
		$scope.boolen3 = false;
		$scope.boolen4 = false;
		$scope.boolen5 = false;
	}
	$scope.way = function(){
		$scope.boolen1 = false;
		$scope.boolen2 = false;
		$scope.boolen3 = true;
		$scope.boolen4 = false;
		$scope.boolen5 = false;
	}
	$scope.manage = function(){
		$scope.boolen1 = false;
		$scope.boolen2 = false;
		$scope.boolen3 = false;
		$scope.boolen4 = true;
		$scope.boolen5 = false;
	}
	$scope.newS = function(){
		$scope.boolen1 = false;
		$scope.boolen2 = false;
		$scope.boolen3 = false;
		$scope.boolen4 = false;
		$scope.boolen5 = true;
	}
}])
