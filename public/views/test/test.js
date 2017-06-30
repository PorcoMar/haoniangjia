app.controller("test", ["$scope","$location","$http","ServiceConfig","$interval","$timeout",function($scope,$location,$http,ServiceConfig,$interval,$timeout){
//	$(".map").height($(window).height())
//	map_load();
function placeholderPic(){
	var w = document.documentElement.offsetWidth ;
	document.documentElement.style.fontSize= w / 16 + 'px' ;
}
placeholderPic();
window.onresize = function(){
	if($(window).width()>500){
		$scope.hashVal = window.location.hash;
		if($scope.hashVal != "#/"){
			$location.path("/")
		}	
	}
	else{placeholderPic();}
}
$http({
	url:local()+"/banner/queryAppCatList",
	method:"post",		
}).success(function(data,header,config,status){
	//console.log(JSON.parse(data.result))
	var dataBanner = JSON.parse(data.result).hnj_home_banner;
	var imgList = new Array();
	for(var i in dataBanner){
		var datan = dataBanner[i];
		var item = {
			pcImgurl:imgUrl()+datan.imgUrl,
			url:chargeUrl(datan)
		}
		imgList.push(item)
	}
	console.log(imgList)
	$scope.imgUrlList = imgList;
	$timeout(function(){myswiper()},1)
}).error(function(){
	console.log("error")
})
;function myswiper(){
	var mySwiper = new Swiper ('.swiper-container', {
		//effect:'cube',
		loop: true,autoplay: 3000,pagination: '.swiper-pagination',
		autoplayDisableOnInteraction : false, //手动滑动后继续自动播放
		paginationClickable: true,//点击导航切换 
	})	
}
$scope.nav = document.getElementById("nav");
$scope.eq = document.getElementById("eq");
$scope.eq1 = document.getElementById("eq1");
$scope.eq2 = document.getElementById("eq2");
$scope.eq3 = document.getElementById("eq3");
$scope.target1 = function(){$(window).scrollTop($scope.eq.offsetTop-50);}
$scope.target2 = function(){$(window).scrollTop($scope.eq1.offsetTop-50);}
$scope.target3 = function(){$(window).scrollTop($scope.eq2.offsetTop-50);}
$scope.target4 = function(){$(window).scrollTop($scope.eq3.offsetTop-50);}
var $topFix = $("#displaym");
var $top = $("#returnT");
var $fixLi = ".topFix .li";
angular.element(window).bind('scroll',function(){
	var scrollTop = $(window).scrollTop();
		if (scrollTop >= $scope.eq.offsetTop-50 && scrollTop < $scope.eq.offsetTop+$scope.eq.offsetHeight-50) {
			bord($fixLi,0);
		}else if(scrollTop >= $scope.eq1.offsetTop-50 && scrollTop < $scope.eq1.offsetTop+$scope.eq1.offsetHeight-50){
			bord($fixLi,1);
		}else if(scrollTop >= $scope.eq2.offsetTop-50 && scrollTop < $scope.eq2.offsetTop+$scope.eq2.offsetHeight-50){
			bord($fixLi,2);
		}else if(scrollTop >=$scope.eq3.offsetTop-50 && scrollTop < $scope.eq3.offsetTop+$scope.eq3.offsetHeight-50){
			bord($fixLi,3);
		}else if(scrollTop < $scope.eq.offsetTop-50){
			$($fixLi).css("border","0");
		}
		!scrollTop ? $top.fadeOut() : $top.fadeIn();
		scrollTop >= $scope.nav.offsetTop ? $topFix.fadeIn() : $topFix.hide();
});

$top.click(function(){
	$('body,html').animate({ scrollTop: 0}, 300);
	return false;	
})
$scope.konw = function(){
	$location.path("/submit_phone");
}
$scope.know2 = function(){
	$location.path("/submit_phone");
}
/*选项卡*/
$scope.scc = true;
$scope.Aclick = function(){$scope.sca = true;$scope.scb = false;$scope.scc = false;};
$scope.Bclick = function(){$scope.sca = false;$scope.scb = true;$scope.scc = false;};
$scope.Cclick = function(){$scope.sca = false;$scope.scb = false;$scope.scc = true;};
changeColor(".switchShow li");
changeColor("#banmer .num li");
function changeColor(obj){$(obj).click(function(){$(this).css({"background":"#fc5a5f","color":"#fff","border":"0"}).siblings().css({"background":"#fff","color":"#333","border":"1px solid #999"})})}
function bord(obj,index){return $(obj).eq(index).css({"border-bottom":"2px solid #ff7076","color":"#ff7076"}).siblings().css({"border":"0","color":"#333"})};

/*$interval*/
	$scope.timer = $interval(function(){},80);
	$scope.timer.then(success, error, notify);
	function success(){};
	function error(){};
	function notify(){};
	$scope.$on("$destroy", function() {
	    if (angular.isDefined($scope.inTerver)) {
	        $interval.cancel($scope.inTerver);
	        $scope.inTerver = undefined;
	    }
	});		
 	ingSrc('#banmer',5000);
	function ingSrc(obj,gapTime){
	$(obj+" .banner .img img:first").on("load",function(){
		var moving = false;		
	   //var width = $(this).width();
		var width = document.documentElement.offsetWidth*0.6
		var i=0;
		var clone=$(obj+" .banner .img li").first().clone();
		$(obj+" .banner .img").append(clone);	
		var size=$(obj+" .banner .img li").size();	
		$(obj+" .num li").first().addClass("on");
		
		/*鼠标划入圆点*/
		if ($(obj+" .num li")) {
	
		$(obj+" .num li").click(function(){
			$interval.cancel($scope.inTerver); 
			var index=$(this).index();
			i=index;
			$(obj+" .banner .img").stop().animate({left:-index*width},500)	
			$(this).addClass("on").siblings().removeClass("on")	
			$scope.inTerver = $interval(function(){},gapTime);
			$scope.inTerver.then(success, error, c1);		
				function c1(){
					i++;
					move();			
				}			
		})
		};	
	/*自动轮播*/
	$scope.inTerver = $interval(function(){},gapTime);
	$scope.inTerver.then(success, error, c1);		
		function c1(){
			i++;
			//console.log(width)
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
					move();			
				}
		})
		if ($(obj+" .btn_l")) {
	
		/*向左的按钮*/
		$(obj+" .btn_l").stop(true).click(function(){
		$interval.cancel($scope.inTerver); 
		if(moving){
			return;
		};
		moving=true;
			i--;
			move();	
			$scope.inTerver = $interval(function(){},gapTime);
			$scope.inTerver.then(success, error, c1);		
				function c1(){
					i++;
					move();			
				}
		})
		/*向右的按钮*/
		$(obj+" .btn_r").stop(true).click(function(){
		$interval.cancel($scope.inTerver); 
		if(moving){
			return;
		}
		moving=true;
			i++;
			move();	
			$scope.inTerver = $interval(function(){},gapTime);
			$scope.inTerver.then(success, error, c1);		
				function c1(){
					i++;
					move();			
				}
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
			$(obj+" .banner .img").stop(true).delay(200).animate({left:-i*width},500,function(){
				moving = false;
			})
			
			if(i==size-1){
				$(obj+" .num li").eq(0).addClass("on").siblings().removeClass("on");
			}else{		
				$(obj+" .num li").eq(i).addClass("on").siblings().removeClass("on");	
			}
		}	
		
		});
	}
}])