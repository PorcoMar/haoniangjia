app.controller("AboutUs", ["$scope","$rootScope","$location","$http",function($scope,$rootScope,$location,$http){
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
		$scope.boolen5 = false;
	}
	$scope.conC = function(){
		$scope.boolen1 = false;
		$scope.boolen2 = true;
		$scope.boolen3 = false;
		$scope.boolen5 = false;
	}
	$scope.way = function(){
		$scope.boolen1 = false;
		$scope.boolen2 = false;
		$scope.boolen3 = true;
		$scope.boolen5 = false;
	}
	$scope.newS = function(){
		$scope.boolen1 = false;
		$scope.boolen2 = false;
		$scope.boolen3 = false;
		$scope.boolen5 = true;
	}
	
	$http({
		url:local()+"/banner/queryAppCatList",
		method:"post",		
	}).success(function(data,header,config,status){
		console.log(data)
		var dataBanner = JSON.parse(data.result).hnj_about_us_banner;
		var index = dataBanner.length-1;
		$scope.imgUrl = dataBanner[index].url;
		$scope.aboutImg=imgUrl()+dataBanner[index].pcImgUrl
	}).error(function(){
		console.log("error")
	})	

}])
