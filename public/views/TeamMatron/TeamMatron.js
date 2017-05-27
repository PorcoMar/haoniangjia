app.controller("TeamMatron", ["$scope","$location",function($scope,$location){
	$scope.wid = $(window).width();
	$scope.Img = $("#anim .banner .img img");
	$scope.Img.width($scope.wid);
	$scope.banH = Math.floor($("#anim .banner .img").find("img:first").width()/3.84);
	$("#anim .banner").height($scope.banH);
	$scope.Img.height($scope.bannerH);	
	console.log($scope.wid / $scope.banH)
	Iscroll('#anim',3000);
	function Iscroll(obj,timer){
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
		var t=setInterval(function(){
			i++;
			move();
		},timer)
			
		/*对banner定时器的操作*/
		$(obj+" .banner").hover(function(){
			clearInterval(t);
		},function(){
			t=setInterval(function(){
				i++;
				move();
			},timer)
		})
//		$(".banner .btn").mouseenter(function(){
//			$(this).css("background","#f5aca6")
//		})
//		$(".banner .btn").mouseleave(function(){
//			$(this).css("background","#c4c5c2")
//		})
	
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
