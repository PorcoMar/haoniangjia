app.controller("TeamMatron", ["$scope","$interval","$location","$http","$timeout",function($scope,$interval,$location,$http,$timeout){
	$scope.wid = $(window).width();
	$scope.Img = $("#anim .banner .img img");
	$scope.Img.width($scope.wid);
	$scope.banH = Math.floor($("#anim .banner .img").find("img:first").width()/3.84);
	$("#anim .banner").height($scope.banH);
	$scope.Img.height($scope.banH);	
	$http({
		url:local()+"/banner/queryAppCatList",
		method:"post",		
	}).success(function(data,header,config,status){
		//console.log(JSON.parse(data.result))
		var dataBanner = JSON.parse(data.result).hnj_yuesao_nice_banner;
		var imgList = new Array();
		for(var i in dataBanner){
			var datan = dataBanner[i];
			var item = {
				pcImgurl:imgUrl()+datan.pcImgUrl,
				imgUrl:datan.url
			}
			imgList.push(item)
		}
		//console.log(imgList)
		$scope.imgUrlList = imgList;
		$timeout(function(){
	$scope.Img = $("#anim .banner .img img");
	$scope.Img.width($scope.wid);
	$scope.banH = Math.floor($("#anim .banner .img").find("img:first").width()/3.84);
	$("#anim .banner").height($scope.banH);
	$scope.Img.height($scope.banH);	
		Iscroll('#anim',3000);//启动轮播图
		},1)
	}).error(function(){
		console.log("error")
	})


	
	$scope.$on("$destroy", function() {
	    if (angular.isDefined($scope.inTerver)) {
	        $interval.cancel($scope.inTerver);
	        $scope.inTerver = undefined;
	    }
	});	
/*$interval*/
	$scope.timer = $interval(function(){},100000);
	
	$scope.timer.then(success, error, notify);
	
	function success(){
	    //console.log("done");
	}
	
	function error(){
	    //console.log("error");
	}
	
	function notify(){
	
	}

/*banner script*/
	function Iscroll(obj,gapTime){
		var moving = false;		
		var width = $(obj+" .banner .img img").width();
		var i=0;
		var clone=$(obj+" .banner .img li").first().clone();
		$(obj+" .banner .img").append(clone);	
		var size=$(obj+" .banner .img li").size();	
		for(var j=0;j<size-1;j++){
			$(obj+" .banner .num").append("<li></li>");
		}
		$(obj+" .banner .num li").first().addClass("on");
		
		/*鼠标划入圆点*/
		if ($(obj+" .banner .num li")) {
	
		$(obj+" .banner .num li").hover(function(){
			var index=$(this).index();
			i=index;
			$(obj+" .banner .img").stop().animate({left:-index*width},1000)	
			$(this).addClass("on").siblings().removeClass("on")		
		})
		};
	
			
	/*自动轮播*/
	$scope.inTerver = $interval(function(){},gapTime);
	$scope.inTerver.then(success, error, c1);		
		function c1(){
			i++;
			//console.log("index--"+i)
			move();			
		}
			
		/*对banner定时器的操作*/
		$(obj+" .banner").hover(function(){
			$interval.cancel($scope.inTerver); 
		},function(){
			$scope.inTerver = $interval(function(){},gapTime);
			$scope.inTerver.then(success, error, c1);		
				function c1(){
					i++;
					//console.log("teamMaron--"+i)
					move();			
				}
		})

	
		if ($(obj+" .banner .btn_l")) {
	
		/*向左的按钮*/
		$(obj+" .banner .btn_l").stop(true).click(function(){
		if(moving){
		return;
		};
		moving=true;
			i--
			move();	
		})
		
		/*向右的按钮*/
		$(obj+" .banner .btn_r").stop(true).click(function(){
		if(moving){
		return;
		}
		moving=true;
			i++
			move()				
		})
	
		};
		
		function move(){
			
			if(i==size){
				$(obj+" .banner  .img").css({left:0})			
				i=1;
			}
			
			// 修改轮播每屏宽度
			if(i==-1){
				$(obj+" .banner .img").css({left:-(size-1)*width})
				i=size-2;
			}	
			$(obj+" .banner .img").stop(true).delay(200).animate({left:-i*width},1000,function(){
				moving = false;
			})
			
			if(i==size-1){
				$(obj+" .banner .num li").eq(0).addClass("on").siblings().removeClass("on")	
			}else{		
				$(obj+" .banner .num li").eq(i).addClass("on").siblings().removeClass("on")	
			}
		}	
	}
	 
}])
