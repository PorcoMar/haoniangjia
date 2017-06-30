app.controller("webActivity", ["$scope","$location","$http","ServiceConfig","$interval","$routeParams",function($scope,$location,$http,ServiceConfig,$interval,$routeParams){
	$scope.winH = $(window).width();
	if($scope.winH<500){
		$scope.pc=false;
		$scope.phone = true;
		placeholderPic();
		window.onresize = function(){
			placeholderPic();
		}
		function placeholderPic(){
			var w = document.documentElement.offsetWidth ;
			document.documentElement.style.fontSize= w / 16 + 'px' ;
		}		
	}else{
		$scope.pc=true;
		$scope.phone = false;
	}
	var id = $routeParams.id;
	$http({
		url:local()+"/webActivity/info",
		method:"post",
		data:{id:id},
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        transformRequest: function(obj) {   
          var str = [];    
          for (var s in obj) {    
            str.push(encodeURIComponent(s) + "=" + encodeURIComponent(obj[s]));    
          }    
          return str.join("&");    
        } 		
	}).success(function(data){
		//console.log(data)
		var newList = new Array();
		var datan = data.result;
		$scope.actImg=imgUrl()+datan.imgUrl
		//console.log($scope.actImg)
	}).error(function(){
		alert("系统错误，请稍后重试！")
	})
}])
