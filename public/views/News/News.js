app.controller("fuck", ["$scope","$location","$sce","$interval","$timeout",function($scope,$location,$sce,$interval,$timeout){


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
				$scope.list.push(item)
			}
			$scope.shopList = $scope.list;
		}
})
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
	
$scope.subTn = function(){
	$scope.name = $(".oc1").val();
	$scope.numb = $(".oc2").val();
	$scope.daten = $(".oc3").val();
	$scope.city = $(".oc4").val();
	$scope.lev = $(".oc5").val();
	if(!$scope.name || !$scope.numb || !$scope.daten || !$scope.city){
		alert("请填写完整信息")
	}else{
		
		$.ajax({
		    url:req()+"h5_api/yuesaoAppointmentSave",
		    type: "POST",
		    data: {
		        name:$scope.name,
		        cellPhone: $scope.numb,
		        city:$scope.city,
		        level:$scope.lev,
		        preBirthTime:$scope.daten
		    },
		    success: function(data) {
		    	console.log(JSON.parse(data))
		    	alert("提交成功！")
		    	location.reload()
		    },
		    error : function(){
		    	console.log("error")
		    }
		})	
	
	}
	
}
	
}])
