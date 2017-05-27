app.controller("index", ["$scope","$rootScope","$location","$http","ServiceConfig","$interval",function($scope,$rootScope,$location,$http,ServiceConfig,$interval){
	$scope.winH = $(window).width();
	$scope.Img = $("#ban1 .banner .img img");
	$("#mianCont").height($(window).height()).width($("body").width());
	$scope.Img.width($scope.winH);
	$scope.bannerH = Math.floor($("#ban1 .banner .img").find("img:first").width()/3);
	$("#ban1 .banner").height($scope.bannerH);
	$scope.Img.height($scope.bannerH);
	//console.log($(window).height(),$(document).height(),$("body").height())
	$scope.bannH = Math.floor($("#bann").width()/6.4);
	$("#bann").height($scope.bannH);
	//console.log($("#bann").height())
//轮播图设高
$(".liCont").width($scope.winH);
$.ajax({
	url:req()+"h5_api/yuesaoAppointmentList",
	type:"POST",
		success:function(data){
			$scope.list=new Array();
			var data = JSON.parse(data).result;
			//console.log(data);
			for(var i in data){
				var $list = data[i];
				var item = {
						name:name($list.name),
						cellPhone:phoNumber($list.cellPhone),
						createdTime:createTime(),
						level:$list.level,
						preBirthTime:preBirthTime($list.preBirthTime)
					}
				$scope.list.push(item);
			}
			$scope.shopList = $scope.list;
		}
})

/*预约服务*/
	$scope.ecoo = function(){$location.path("/News")};
	$scope.shus = function(){$location.path("/News")};
	$scope.zunx = function(){$location.path("/News")};
/*21条嫂规*/
	$scope.saogui = function(){$location.path("/TeamMatron")};
/*查看新闻*/
	$scope.lookA1 = function(){
		$rootScope.a = true;
		$location.path("/AboutUs")
	};
	$scope.exe = function(){
		$rootScope.a = true;
		$location.path("/execcess")
	};
/*移入变色*/
	$("[promis]").mouseenter(function(){
		$(this).find(".head").css({"color":"#fff"}).parent().find(".cont").css({"color":"#fff"})
	})
	$("[promis]").mouseleave(function(){
		$(this).find(".head").css({"color":"#333"}).parent().find(".cont").css({"color":"#333"})
	})
	
	
/*contBoxn移入阴影*/
	mouShade("#eco");
	mouShade("#shushi");
	mouShade("#zunxiang");
//启动轮播图
 ingSrc('#ban1',3000);
 //imgscrool2('#ban2',5000);
 //imgscrool3('#logoband',8000);
//移入变网点名称颜色
$("#center .l").mouseenter(function(){
	$(this).find(".wdTitle").css("color","#ff8188")	
})
$("#center .l").mouseleave(function(){
	$(this).find(".wdTitle").css("color","#333")	
})
//移入变左右箭头颜色
$("#ban2 .banner2 .btn_l").mouseenter(function(){
	$("#ban2 .banner2 .btn").css("background","#ff8188")	
})
$("#ban2 .banner2 .btn_r").mouseenter(function(){
	$("#ban2 .banner2 .btn2").css("background","#ff8188")	
})
$("#ban2 .banner2 .btn_l").mouseleave(function(){
	$("#ban2 .banner2 .btn").css("background","#cecece")	
})
$("#ban2 .banner2 .btn_r").mouseleave(function(){
	$("#ban2 .banner2 .btn2").css("background","#cecece")	
})
/*右滑块*/	
//	var offsetTo = ($(window).height()-$("#div1").height())/2
//	var h_div1 = document.getElementById('div1')
//	var h_hvttop = offsetTo//移动后的距离顶部的高度
/*--------*/	

/*自动播放*/
	//console.log($("#serviceLevel").offset().top)
	active("[posAb]","fadeInDown" ,"1.5s","0s")
	active("[numB]","fadeInUp" ,"1.5s","0s")
	active("[pp]","fadeInUp" ,"1.2s","0.5s")
	mySwiper();
	
/*数字滚动*/
$scope.numStart1 = 0;$scope.numStart2 = 0;$scope.numStart3 = 0;$scope.numStart4 = 0;$scope.numStart5 = 0;
inter(125,8,"[numB='numB1']",$scope.numStart1)
inter(100,10,"[numB='numB2']",$scope.numStart2)
inter(20,50,"[numB='numB3']",$scope.numStart3)
inter(33,30,"[numB='numB4']",$scope.numStart4)
interB(50,20,"[numB='numB5']",$scope.numStart5)
function inter(time,times,obj,Start){	
	$scope.numberScroll = $interval(function(){},time,times);
	$scope.numberScroll.then(success, error, B1);
		function B1(){
			Start++;
			$(obj).html(Start)
		}
}
function interB(time,times,obj,Start){	
	$scope.numberScroll = $interval(function(){},time,times);
	$scope.numberScroll.then(success, error, B2);
		function B2(){
			Start+=250;
			$(obj).html(Start)
		}	
}

	
	angular.element("#mianCont").bind('scroll',function(){
	//$("#mianCont").scroll(function () {

		/*右滑块*/
		//HoverTreeMove(h_div1, h_hvttop);
		/*--------*/
		$scope.serviceLevel = document.getElementById("serviceLevel").offsetTop;	
		$scope.contBoxn = document.getElementById("contBoxn").offsetTop;
		$scope.process = document.getElementById("processCom").offsetTop;
		$scope.bao = document.getElementById("bao").offsetTop;
		$scope.honor = document.getElementById("honor").offsetTop;
//		$scope.bigBanner = document.getElementById("bigBanner").offsetTop;
//		$scope.logoband = document.getElementById("logoband").offsetTop;  
		$scope.shop = document.getElementById("shop").offsetTop;  
		
		$scope.scrollTop = $("#mianCont").scrollTop();
		$scope.sc_Height0 = $("#mianCont").scrollTop()+$(window).height();
		$scope.sc_Height150 = $("#mianCont").scrollTop()+$(window).height()-150;
		$scope.sc_Height300 = $("#mianCont").scrollTop()+$(window).height()-300;
		
//	function scrollShow(){
	/*serviceLevel 区*/
		if ($scope.serviceLevel >= $scope.scrollTop && $scope.serviceLevel < $scope.sc_Height150) {
			if(!$scope.onOffA){
					active("[serlevel='a1']","fadeInUp" ,"1.5s","0s")
					active("[serlevel='a2']","fadeInUp" ,"1.5s","0.2s")
					active("[serlevel='a3']","fadeInUp" ,"1.5s","0.4s")
					mySwiper();
					$scope.onOffA =true;
			}
		}
	
	/*contBoxn 区*/
		if ($scope.contBoxn >= $scope.scrollTop && $scope.contBoxn < $scope.sc_Height150) {
			if(!$scope.onOffD){
					active("[contbox='a3']","fadeInLeft" ,"1.5s","0.2s")
					active("[contbox='a2']","fadeInLeft" ,"1.5s","0.4s")
					active("[contbox='a1']","fadeInLeft" ,"1.5s","0.6s")
					active("[contbox='a4']","fadeInRight" ,"1.7s","0.4s")
					mySwiper();
					$scope.onOffD =true;
			}
		}
	/*process 区*/
		if ($scope.process >= $scope.scrollTop && $scope.process < $scope.sc_Height150) {
			if(!$scope.onOffE){
					active("[pros='a1']","fadeInUp" ,"1.5s","0s")
					active("[pros='a2']","fadeInUp" ,"1.5s","0s")
					active("[ng='b1']","fadeInUp" ,"0.8s","0.2s")
					active("[ng='b2']","fadeInUp" ,"0.9s","0.3s")
					active("[ng='b3']","fadeInUp" ,"1s","0.4s")
					active("[ng='b4']","fadeInUp" ,"1.1s","0.5s")
					active("[ng='b5']","fadeInUp" ,"1.2s","0.6s")
					active("[ng='b6']","fadeInUp" ,"1.3s","0.7s")
					active("[ng='b7']","fadeInUp" ,"1.4s","0.8s")
					
					mySwiper();
					$scope.onOffE =true;
			}
		}
	/*bao 区*/
		if ($scope.bao >= $scope.scrollTop && $scope.bao < $scope.sc_Height150) {
			if(!$scope.onOffF){
					active("[pro]","fadeInUp" ,"1.5s","0s")
					active("[promis]","fadeInUp" ,"1.5s","0.5s")
					mySwiper();
					$scope.onOffF =true;
			}
		}
	
	/*honor 区*/
		if ($scope.honor >= $scope.scrollTop && $scope.honor < $scope.sc_Height150) {
			if(!$scope.onOffG){
					active("[fadein='left']","bounceInLeft" ,"1.5s","0.1s")
					active("[fadein='right']","bounceInRight" ,"1.5s","0.1s")
					mySwiper();
					$scope.onOffG =true;
			}
		}
	
		
	/*bigbanner 区*/
//		if ($scope.bigBanner >= $scope.scrollTop && $scope.bigBanner < $scope.sc_Height150) {
//			if(!$scope.onOffB){
//					active("[bigBanner]","fadeIn" ,"1.5s","0.2s")
//					mySwiper();
//					$scope.onOffB =true;
//			}
//		}
	/*wangdian 区*/
		if ($scope.shop >= $scope.scrollTop && $scope.shop < $scope.sc_Height150) {
			if(!$scope.onOffH){
					active("[waDin='wa1']","fadeInUp" ,"1.5s","0s")
					active("[waDin='wa2']","fadeInUp" ,"1.5s","0.2s")
					mySwiper();
					$scope.onOffH =true;
			}
		}		
	/*logoband 区*/
//		if ($scope.logoband >= $scope.scrollTop && $scope.logoband < $scope.sc_Height150) {
//			if(!$scope.onOffC){
//					active("[bandlogo]","fadeInUp" ,"1.5s","0.2s")
//					active("[bandlogon]","fadeInUp" ,"1.2s","0s")
//					mySwiper();
//					$scope.onOffC =true;
//			}
//		}

	
});

/*滚动显示内容*/
  var demoScro=document.getElementById("demoScro");
  var demoScro1=document.getElementById("demoScro1");
  var demoScro2=document.getElementById("demoScro2");
  //$("#demoScro").height("350");
  demoScro2.innerHTML=demoScro1.innerHTML;
  demoScro.style.height=document.getElementById("express").offsetHeight+"px";
  demoScro2.style.height=demoScro.offsetHeight+"px";

/*$interval*/
	$scope.timer = $interval(function(){},80);
	
	$scope.timer.then(success, error, notify);
	
	function success(){
	    //console.log("done");
	}
	
	function error(){
	    //console.log("error");
	}
	
	function notify(){
	    if(demoScro.scrollTop>=demoScro.offsetHeight)
	    {
	      demoScro.scrollTop=0;
	    }else
	    {
	      demoScro.scrollTop++;
	    }
	}

	$scope.mouover = function(){
		 $interval.cancel($scope.timer);
	}
	$scope.mouleave = function(){
		$scope.timer = $interval(function(){},80);
		$scope.timer.then(success, error, notify);
	}
	
	$("#returnTop").click(function(){
		$("#mianCont").scrollTop(0)
	})
	$(".bk1").mouseenter(function(){
		$(this).css("background"," url(img/km1.png)")
	})
	$(".bk1").mouseleave(function(){
		$(this).css("background"," url(img/km.png)")
	})
	$(".bk2").mouseenter(function(){
		$(this).css("background"," url(img/kn1.png)")
	})
	$(".bk2").mouseleave(function(){
		$(this).css("background"," url(img/kn.png)")
	})
	$(".bk3").mouseenter(function(){
		$(this).css("background"," url(img/kb1.png)")
		$(".nmb").animate({right:"62px",width:"117px","padding-left":"5px"});
		$("#div1").css("overflow","visible");
	})
	$(".bk3").mouseleave(function(){
		$(this).css("background"," url(img/kb.png)")
		$(".nmb").animate({right:"6px",width:"20px"})	
		
	})
	$(".bk4").mouseenter(function(){
		$(this).css("background"," url(img/kv1.png)")
	})
	$(".bk4").mouseleave(function(){
		$(this).css("background"," url(img/kv.png)")
	})
	


 /*鼠标移入效果*/

		//controller("[rot]","rotateIn","0.8s","0s");
	//logoband	
		//controller("[bounce]","rubberBand","0.8s","0s");
		//controller("[bounce='c6']","hinge","1.8s","0s");
	//#bann	
		//controller("[butnm]","swing","0.8s","0s");
	//bandShow && bigBanner
		//controller("[pulse]","pulse","0.8s","0s");
	//honor 查看
		//controller("[see]","swing","1s","0s");
		
//通过浏览器类型输出效果事件
		var userAgent = navigator.userAgent;
		if (!!window.ActiveXObject || "ActiveXObject" in window){
			//alert("IE") ;
		}else if (userAgent.indexOf("Edge") > -1) {
			//alert("Edge")  
		}
		else {
			controller("[rot]","rotateIn","0.8s","0s");
		}



$scope.$on("$destroy", function() {
    if (angular.isDefined($scope.inTerver)) {
        $interval.cancel($scope.inTerver);
        $scope.inTerver = undefined;
    }
});	


/*banner script*/
	function ingSrc(obj,gapTime){
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
			console.log("index--"+i)
			move();			
		}
			
		/*对banner定时器的操作*/
		$(obj+" .banner").hover(function(){
			//clearInterval(t);
			$interval.cancel($scope.inTerver); 
		},function(){
			$scope.inTerver = $interval(function(){},gapTime);
			$scope.inTerver.then(success, error, c1);		
				function c1(){
					i++;
					console.log("index--"+i)
					move();			
				}
		})

	
		if ($(obj+" .banner .btn_l")) {
	
		/*向左的按钮*/
		$(obj+" .banner .btn_l").stop(true).click(function(){// background:#f5aca6;
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
