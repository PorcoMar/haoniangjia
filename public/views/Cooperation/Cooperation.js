app.controller("Cooperation", ["$scope","$location","$interval","$http",function($scope,$location,$interval,$http){
$scope.numStart1 = 0;$scope.numStart2 = 0;$scope.numStart3 = 0;$scope.numStart4 = 0;

//inter(50,20,".pop4",$scope.numStart4)

inter(20,70,".pop1 span",$scope.numStart1,20000000)
inter(14,72,".pop2 span",$scope.numStart2,250000)
inter(20,48,".pop3 span",$scope.numStart3,1250)
inter(50,20,".pop4 span",$scope.numStart4,1)

function inter(time,times,obj,Start,num){	
	$scope.numberScroll = $interval(function(){},time,times);
	$scope.numberScroll.then(success, error, B1);
		function B1(){
			Start+=num;
			$(obj).html(Start)
		}
}

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
//$scope.maptest = function(){
//	$location.path("/test")
//}
$scope.value = "城市代理";
$("#cl1").click(function(){
	if($(this).prop("checked")){
		$("#cl2").attr("checked",false)
		$scope.value = "城市代理";
	}
})
$("#cl2").click(function(){
	if($(this).prop("checked")){
		$("#cl1").attr("checked",false)
		$scope.value = "单店加盟";
	}
})






//
//var name=["张中牟","李中牟","王中牟","周中牟","赵中牟","钱中牟","马中牟","孙中牟","金中牟"]
//var num=["18699999145","13599999178","18799999464","15999999978","15699999967","13899999895","15699999564","18699999096"]
//var lev=["尊享型","舒适型","经济型"]
//var time =["2017-12-29","2017-08-27","2017-09-12","2017-11-09","2018-02-22","2018-01-10","2017-12-05","2018-01-12"]
//var type=["城市代理","单店加盟"]
//for(var i=0 ;i<20;i++){
//	var a = Math.floor(Math.random()*9)
//	var b = Math.floor(Math.random()*8)
//	var c = Math.floor(Math.random()*3)
//	var d = Math.floor(Math.random()*8)
//	var e = Math.floor(Math.random()*2)
//	var namen = name[a]
//	var numn = num[b]
//	var levn = lev[c]
//	var timen = time[d]
//	var typen = type[e]
//		$.ajax({
//		    url:req()+"h5_api/yuesaoAppointmentSave",
//		    type: "POST",
//		    data: {
//		        name:namen,
//		        cellPhone: numn,
//		        city:"上海",
//		        level:levn,
//		        preBirthTime:timen
//		    },
//		    success: function(data) {
//		    	console.log(JSON.parse(data))
//		    },
//		    error : function(){
//		    	console.log("error")
//		    }
//		})
//
////		$.ajax({
////			url:req()+"h5_api/yuesaoAppointmentSaveWithType",
////			type:"POST",
////			data:{
////				name:namen,
////				cellPhone:numn,
////				city: "杭州",
////				email:"990135141@qq.com",
////				type:typen
////			},
////			success:function(data){
////				console.log(data)
////			}
////		})
//}




$scope.submit = function(){
	$scope.area = $(".ck3").val()
	$scope.cocatPer = $(".ck1").val()
	$scope.number = $(".ck2").val()
	console.log($scope.value,$scope.area,$scope.cocatPer,$scope.number);
	if(!$scope.value || !$scope.area|| !$scope.cocatPer|| !$scope.number){
		alert("请填写完整信息！")
	}else{
		$.ajax({
			url:req()+"h5_api/yuesaoAppointmentSaveWithType",
			type:"POST",
			data:{
				name:$scope.cocatPer,
				cellPhone:$scope.number,
				city: $scope.area,
				type:$scope.value
			},
			success:function(data){
				//console.log(data)
			}
		})

            alert("提交成功")
	}
	
}


	imgscrool2('.bammer',5000);	
	imgscrool2('.bammer1',5000);
		$(".banner2 .l").mouseenter(function(){
		$(this).find(".wdTitle").css("color","#ff8188")	
	})
	$(".banner2 .l").mouseleave(function(){
		$(this).find(".wdTitle").css("color","#333")	
	})
	//移入变左右箭头颜色
	$(".banner2 .btn_l").mouseenter(function(){
		$(".banner2 .btn").css("background","#ff8188")	
	})
	$(".banner2 .btn_r").mouseenter(function(){
		$(".banner2 .btn2").css("background","#ff8188")	
	})
	$(".banner2 .btn_l").mouseleave(function(){
		$(".banner2 .btn").css("background","#cecece")	
	})
	$(".banner2 .btn_r").mouseleave(function(){
		$(".banner2 .btn2").css("background","#cecece")	
	})
}])
