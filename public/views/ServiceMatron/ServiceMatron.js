app.controller("ServiceMatron", ["$scope","$location","$sce","$http","$timeout",function($scope,$location,$sce,$http,$timeout){
	$http({
		url:local()+"/banner/queryAppCatList",
		method:"post",		
	}).success(function(data,header,config,status){
		//console.log(JSON.parse(data.result))
		var dataBanner = JSON.parse(data.result).hnj_yuesao_service_banner;
		var index = dataBanner.length-1;
		$scope.imgUrl = $scope.imgUrl = dataBanner[index].url;
		$scope.serviceImg=imgUrl()+dataBanner[index].pcImgUrl;
		console.log($scope.imgUrl)
	}).error(function(){
		console.log("error")
	})	
	$scope.turnIndex = function(){
		$location.path("#/index")
	}
/*预约服务*/
	$scope.ecoo = function(){
		$location.path("/News")
	}
	$scope.shus = function(){
		$location.path("/News")
	}
	$scope.zunx = function(){
		$location.path("/News")
	}
/*移入变色*/
	$("[promis]").mouseenter(function(){
		$(this).find(".head").css({"color":"#fff"}).parent().find(".cont").css({"color":"#fff"});
	})
	$("[promis]").mouseleave(function(){
		$(this).find(".head").css({"color":"#333"}).parent().find(".cont").css({"color":"#333"});
	})	

/*mouse animate effect*/
//通过浏览器类型输出效果事件
		var userAgent = navigator.userAgent;
		if (!!window.ActiveXObject || "ActiveXObject" in window){
			//alert("IE") ;
		}else if (userAgent.indexOf("Edge") > -1) {
			//alert("Edge")  
		}
		else {
		}
		controller("[root]","rotateIn","0.8s","0s");			

/*contBoxn移入阴影 && other*/
	mouShade("#eco");
	mouShade("#shushi");
	mouShade("#zunxiang");

	$(".Tuwen").mouseenter(function(){
		var _this = $(this);
		_this.find(".ppacity").hide();		
		_this.find(".flotIn").animate({"top":"0"},300);
	})
	$(".Tuwen").mouseleave(function(){
		var _this = $(this);
		_this.find(".ppacity").show();
		_this.find(".flotIn").stop().animate({"top":"-285px"},300);
	})

//
//	angular.element(window).bind('scroll',function(){
//		$scope.process = document.getElementById("processCom").offsetTop;
//		$scope.bao = document.getElementById("bao").offsetTop;
//	
//		
//		$scope.scrollTop = $(window).scrollTop();
//		$scope.sc_Height0 = $(window).scrollTop()+$(window).height();
//		$scope.sc_Height150 = $(window).scrollTop()+$(window).height()-150;
//		$scope.sc_Height300 = $(window).scrollTop()+$(window).height()-300;
//
//	/*process 区*/
//		if ($scope.process >= $scope.scrollTop && $scope.process < $scope.sc_Height150) {
//			if(!$scope.onOffE){
//					active("[pros='a1']","fadeInUp" ,"1.5s","0s")
//					active("[pros='a2']","fadeInUp" ,"1.5s","0s")
//					active("[ng='b1']","fadeInUp" ,"0.8s","0.2s")
//					active("[ng='b2']","fadeInUp" ,"0.9s","0.3s")
//					active("[ng='b3']","fadeInUp" ,"1s","0.4s")
//					active("[ng='b4']","fadeInUp" ,"1.1s","0.5s")
//					active("[ng='b5']","fadeInUp" ,"1.2s","0.6s")
//					active("[ng='b6']","fadeInUp" ,"1.3s","0.7s")
//					active("[ng='b7']","fadeInUp" ,"1.4s","0.8s")
//					
//					mySwiper();
//					$scope.onOffE =true;
//			}
//		}
//	/*bao 区*/
//		if ($scope.bao >= $scope.scrollTop && $scope.bao < $scope.sc_Height150) {
//			if(!$scope.onOffF){
//					active("[pro]","slideInUp" ,"1.5s","0s")
//					active("[promis]","slideInUp" ,"1.5s","0.5s")
//					mySwiper();
//					$scope.onOffF =true;
//			}
//		}
//
//	});

}])
