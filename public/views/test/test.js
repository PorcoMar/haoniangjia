app.controller("test", ["$scope","$location","$http","ServiceConfig","$interval",function($scope,$location,$http,ServiceConfig,$interval){
//	$(".map").height($(window).height())
//	map_load();
function placeholderPic(){
	var w = document.documentElement.offsetWidth ;
	document.documentElement.style.fontSize= w / 16 + 'px' ;
}
placeholderPic();
window.onresize = function(){
	placeholderPic();
}	

$scope.eq = document.getElementById("eq");
$scope.eq1 = document.getElementById("eq1");
$scope.eq2 = document.getElementById("eq2");
$scope.eq3 = document.getElementById("eq3");

$scope.target1 = function(){
	$(window).scrollTop($scope.eq.offsetTop-50);
}
$scope.target2 = function(){
	$(window).scrollTop($scope.eq1.offsetTop-50);
}
$scope.target3 = function(){
	$(window).scrollTop($scope.eq2.offsetTop-50);
}
$scope.target4 = function(){
	$(window).scrollTop($scope.eq3.offsetTop-50);
}

var $top = $("#returnTop")
angular.element(window).bind('scroll',function(){
	var scrollTop = $(window).scrollTop();
		if (scrollTop >= $scope.eq.offsetTop-50 && scrollTop < $scope.eq.offsetTop+$scope.eq.offsetHeight-50) {
			bord("#topFix .li",0)
		}else if(scrollTop >= $scope.eq1.offsetTop-50 && scrollTop < $scope.eq1.offsetTop+$scope.eq1.offsetHeight-50){
			bord("#topFix .li",1)
		}else if(scrollTop >= $scope.eq2.offsetTop-50 && scrollTop < $scope.eq2.offsetTop+$scope.eq2.offsetHeight-50){
			bord("#topFix .li",2)
		}else if(scrollTop >=$scope.eq3.offsetTop-50 && scrollTop < $scope.eq3.offsetTop+$scope.eq3.offsetHeight-50){
			bord("#topFix .li",3)
		}
		!scrollTop ? $top.fadeOut() : $top.fadeIn();
});

$top.click(function(){
	$('body,html').animate({ scrollTop: 0}, 300);
	return false;	
})

function bord(obj,index){
	return $(obj).eq(index).css({"border-bottom":"1px solid red"}).siblings().css({"border":"0"})
};

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

	}

	$scope.$on("$destroy", function() {
	    if (angular.isDefined($scope.inTerver)) {
	        $interval.cancel($scope.inTerver);
	        $scope.inTerver = undefined;
	    }
	});		

 	ingSrc('#banmer',3000);
	function ingSrc(obj,gapTime){
		var moving = false;		
		var width = 300;
		//var width = $(obj+" .banner .img img").width();
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
	
		$(obj+" .banner .num li").click(function(){
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
			//clearInterval(t);
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
		$(obj+" .btn_l").stop(true).click(function(){// background:#f5aca6;
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
			i++
			move()	
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
	
/**********/			
/*三级联动省市区*/	
/*********/
//	(function($, doc) {
//		$.init();
//		
//		$.ready(function() {
//			var cityPicker3 = new $.PopPicker({
//				layer: 3
//			});
//			cityPicker3.setData(cityData3);
//			var showCityPickerButton = doc.getElementById('showCityPicker3');
//			var cityResult3 = doc.getElementById('cityResult3');
//			showCityPickerButton.addEventListener('tap', function(event) {
//				cityPicker3.show(function(items) {
//					cityResult3.innerText = "你选择的城市是:" + (items[0] || {}).text + " " + (items[1] || {}).text + " " + (items[2] || {}).text;
//					//返回 false 可以阻止选择框的关闭
//					//return false;
//				});
//			}, false);	
//		});
//	})(mui, document);
/**********/			
/*时间选择器*/	
/*********/
//	(function($) {
//		$.init();
//		var result = $('#result')[0];
//		var btns = $('.btn');
//		btns.each(function(i, btn) {
//			btn.addEventListener('tap', function() {
//				var optionsJson = this.getAttribute('data-options') || '{}';
//				var options = JSON.parse(optionsJson);
//				var id = this.getAttribute('id');
//				var picker = new $.DtPicker(options);
//				picker.show(function(rs) {
//					result.innerText = '选择结果: ' + rs.text;
//					picker.dispose();
//				});
//			}, false);
//		});
//	})(mui);	



}])
