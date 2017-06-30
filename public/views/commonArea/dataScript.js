function local(){
	return "http://admin.api.yizhenjia.com"
	//return "http://admin.api-test.yizhenjia.com"
	//return "http://192.168.1.121:8243"
}
function req(){
	return "http://appapi.yizhenjia.com/"
}
function imgUrl(){
	return "http://appimg.yizhenjia.com"
}
function name(a){
	return a.substr(0,1)+"女士";
}
function phoNumber(a){
	return a.substr(0,3)+" **** "+a.substr(8,10);
}
function createTime(){
	var time =  new Date();
	return time.toLocaleDateString();
}
function preBirthTime(a){
	var time =  new Date(a);
	return time.getMonth()+1;
}
function toStandTime(a){
	var time = new Date(a);
	return time.toLocaleDateString();
}
function chargeUrl(a){
	var newURL = new String();
	if(a.url.indexOf("192.168.1.119:8020/haoniangjiaGW/public/index.html") > 0 ){
	 	if(a.url.indexOf("webActivity") > 0 ){
	 		newURL = a.url;
	 		return newURL;
	 	}else{
	 		newURL ="192.168.1.119:8020/haoniangjiaGW/public/index.html#/test"
	 		return newURL;
	 	}
	}else{
		newURL = a.url;
		return newURL;
	}	
}
function over(a){	
	$(a).mouseenter(function(){
		$(this).find("img").css("visibility","visible").next().css("color","#ff7077").parent().siblings().find("img").css("visibility","hidden").next().css("color","#4d4d4d");
	})
	$(a).click(function(){
		$("#naver span").html($(this).find("span").text())
	})
}
/*右滑块*/
	function HoverTreeMove(obj,top){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//滚动的距离
		var h_buchang = 20;
		if (obj.offsetTop < scrollTop + top - h_buchang)
		{
		obj.style.top = obj.offsetTop + h_buchang + "px";
		setTimeout(function () { HoverTreeMove(obj, top); }, 80);
		
		}
		else if (obj.offsetTop > scrollTop + top + h_buchang)
		{
		obj.style.top = (obj.offsetTop - h_buchang) + "px";
		setTimeout(function () { HoverTreeMove(obj, top); }, 80);
		}
		else {
		obj.style.top = scrollTop + top + "px";
		}
	}
	

/*-----*/	

/*swiper script*/
	function mySwiper(){
	  var mySwiper = new Swiper ('.swiper-container', {
		  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		  }, 
		  onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		  } 
	  }) 				
	}
	
/*mouse script*/	
	function controller(controll,effect,duration,delay){
	  $(controll).mouseenter(function(){
	  	$(this).attr("swiper-animate-effect",effect).attr("swiper-animate-duration",duration).attr("swiper-animate-delay",delay).attr("class","ani")
	  	mySwiper()
	  })	
	  $(controll).mouseout(function(){
	  	$(this).removeAttr("attribute")
	  })

	}


	
/*first in*/	
	function active(a,effect,duration,delay){
		$(a).attr("swiper-animate-effect",effect).attr("swiper-animate-duration",duration).attr("swiper-animate-delay",delay).attr("class","ani")
	}	
	

	
/*contBoxn移入阴影*/
	function mouShade(a){
		$(a).mouseenter(function(){
			var _this = $(this)
			_this.css({"box-shadow":"-5px 6px 30px #ccc"})//.animate({top:"-2px",left:"1px"},300)
			_this.find("[hovern]").stop().animate({bottom:"-5px"},300).animate({bottom:"0px"},300)
			_this.find(".opacit").hide();
			
		})
		$(a).mouseleave(function(){
			var _this = $(this);
			_this.css({"box-shadow":"0px 0px 0px #000"});//.animate({top:"0px",left:"0px"},300)
			_this.find("[hovern]").stop().animate({bottom:"-440px"},300);
			_this.find(".opacit").show();
		})	
	}	
	
	function imgscrool2(obj,timer){
		var moving = false;		
		var width = 1200;
		//console.log(width)
		var i=0;
		var clone=$(obj+" .banner2 .img li").first().clone();
		$(obj+" .banner2 .img").append(clone);	
		var size=$(obj+" .banner2 .img li").size();	
		for(var j=0;j<size-1;j++){
			$(obj+" .banner2 .num").append("<li></li>");
		}
		$(obj+" .banner2 .num li").first().addClass("on");
		
		/*鼠标划入圆点*/
		if ($(obj+" .banner2 .num li")) {
	
		$(obj+" .banner2 .num li").hover(function(){
			var index=$(this).index();
			i=index;
			$(obj+" .banner2 .img").stop().animate({left:-index*width},1000)	
			$(this).addClass("on").siblings().removeClass("on")		
		})
		};
	
			
		/*自动轮播*/
		var t=setInterval(function(){
			clearInterval(t);
			i++;
			move2();
		},timer)
			
		/*对banner2定时器的操作*/
		$(obj+" .banner2").hover(function(){
			clearInterval(t);
		},function(){
			t=setInterval(function(){
				i++;
				move2();
			},timer)
		})
		$(".banner2 .btn").mouseenter(function(){
			$(this).css("background","#f5aca6")
		})
		$(".banner2 .btn").mouseleave(function(){
			$(this).css("background","#c4c5c2")
		})
	
		if ($(obj+" .banner2 .btn_l")) {
	
		/*向左的按钮*/
		$(obj+" .banner2 .btn_l").stop(true).click(function(){// background:#f5aca6;
		if(moving){
		return;
		};
		moving=true;
			i--
			move2();	
		})
		
		/*向右的按钮*/
		$(obj+" .banner2 .btn_r").stop(true).click(function(){
		if(moving){
		return;
		}
		moving=true;
			i++
			move2()				
		})
	
		};
		
		function move2(){
			
			if(i==size){
				$(obj+" .banner2  .img").css({left:0})			
				i=1;
			}
			
			// 修改轮播每屏宽度
			if(i==-1){
				$(obj+" .banner2 .img").css({left:-(size-1)*width})
				i=size-2;
			}	
			$(obj+" .banner2 .img").stop(true).delay(200).animate({left:-i*width},1000,function(){
				moving = false;
			})
			
			if(i==size-1){
				$(obj+" .banner2 .num li").eq(0).addClass("on").siblings().removeClass("on")	
			}else{		
				$(obj+" .banner2 .num li").eq(i).addClass("on").siblings().removeClass("on")	
			}
		}	
	}

	
	
	function imgscrool3(obj,timer){
		var moving = false;		
		var width= 1168;
		//console.log(width)
		var i=0;
		var clone=$(obj+" .banner3 .img li").first().clone();
		$(obj+" .banner3 .img").append(clone);	
		var size=$(obj+" .banner3 .img li").size();	
		for(var j=0;j<size-1;j++){
			$(obj+" .banner3 .num").append("<li></li>");
		}
		$(obj+" .banner3 .num li").first().addClass("on");
		
		/*移入出现箭头*/
		$("#logoband").mouseenter(function(){
			$(".btn").show()
		})
		$("#logoband").mouseleave(function(){
			$(".btn").hide()
		})
	
			
		/*自动轮播*/
		var t=setInterval(function(){
			clearInterval(t);
			i++;
			move3();
		},timer)
			
		/*对banner3定时器的操作*/
		$(obj+" .banner3").hover(function(){
			clearInterval(t);
		},function(){
			t=setInterval(function(){
				i++;
				move3();
			},timer)
		})
		$(".banner3 .btn").mouseenter(function(){
			$(this).css("background","#f5aca6")
		})
		$(".banner3 .btn").mouseleave(function(){
			$(this).css("background","#c4c5c2")
		})
	
		if ($(obj+" .banner3 .btn_l")) {
	
		/*向左的按钮*/
		$(obj+" .banner3 .btn_l").stop(true).click(function(){// background:#f5aca6;
		if(moving){
		return;
		};
		moving=true;
			i--
			move3();	
		})
		
		/*向右的按钮*/
		$(obj+" .banner3 .btn_r").stop(true).click(function(){
		if(moving){
		return;
		}
		moving=true;
			i++
			move3()				
		})
	
		};
		
		function move3(){
			
			if(i==size){
				$(obj+" .banner3  .img").css({left:0})			
				i=1;
			}
			
			// 修改轮播每屏宽度
			if(i==-1){
				$(obj+" .banner3 .img").css({left:-(size-1)*width})
				i=size-2;
			}	
			$(obj+" .banner3 .img").stop(true).delay(200).animate({left:-i*width},1000,function(){
				moving = false;
			})
			
			if(i==size-1){
				$(obj+" .banner3 .num li").eq(0).addClass("on").siblings().removeClass("on")	
			}else{		
				$(obj+" .banner3 .num li").eq(i).addClass("on").siblings().removeClass("on")	
			}
		}	
	}
	