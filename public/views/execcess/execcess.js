app.controller("execcess", ["$scope","$location","$sce",function($scope,$location,$sce){
	function mou(obj,top){
		$(obj).mouseenter(function(){
			var _this = $(this);
			_this.find(".ppacity .opacit").css({"background":"#171310"});		
			_this.find("p").css("color","#fff")
		})
		$(obj).mouseleave(function(){
			var _this = $(this);
			_this.find(".ppacity .opacit").css({"background":"#fff"});
			_this.find("p").css("color","#000")
		})		
	}
	mou("#bantu1 .Tuwen","-294px")
	mou("#bantu2 .Tuwen","-247px")
	mou("#bantu3 .Tuwen","-294px")
	mou("#bantu4 .Tuwen","-245px")
	
	
	//imgscrool2('.bammer',5000);	
//移入变网点名称颜色
$("#center .l").mouseenter(function(){
	$(this).find(".wdTitle").css("color","#ff8188")	
})
$("#center .l").mouseleave(function(){
	$(this).find(".wdTitle").css("color","#333")	
})
}])
