app.controller("newDetial", ["$scope","$rootScope","$http","$location","$routeParams",function($scope,$rootScope,$http,$location,$routeParams){
	$http({
		url:local()+"/banner/queryAppCatList",
		method:"post",		
	}).success(function(data,header,config,status){
		var dataBanner = JSON.parse(data.result).hnj_about_us_banner;
		var index = dataBanner.length-1;
		$scope.newDetailImg=imgUrl()+dataBanner[index].pcImgUrl
	}).error(function(){
		console.log("error")
	})		
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
	
	$scope.bbm = function(){
		$rootScope.a = false;
		$location.path("/AboutUs")
	}
	$scope.aam = function(){
		$rootScope.a = true;
		$location.path("/AboutUs")
	}

		var speed=200;//滑动的速度
		$('body,html').animate({ scrollTop: 0 }, speed);
		console.log()
	var Id = $routeParams.id;
	$http({
		url:local()+"/information/info",
		method:"post",
	    data: {
			id:Id
	    },
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        transformRequest: function(obj) { 
          var str = [];    
          for (var s in obj) {    
            str.push(encodeURIComponent(s) + "=" + encodeURIComponent(obj[s]));    
          }    
          return str.join("&");    
        } 		
	}).success(function(data,header,config,status){
		//console.log(data)
		var datan = data.result;
		$scope.content = datan.content
		$(".contm").append(datan.content)
	})

}])
