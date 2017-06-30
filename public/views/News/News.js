app.controller("fuck", ["$scope","$location","$http","ServiceConfig","$interval",function($scope,$location,$http,ServiceConfig,$interval){
new PCAS("province","city","area","","","");//三及联动
$http({
	url:ServiceConfig.haoniangjia+"h5_api/yuesaoAppointmentList",
	method:"POST"
}).success(function(data){
	$scope.list=new Array();
	var data =data.result;
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
$scope.lost = function(){
	$scope.name = $(".oc1").val();
	$scope.numb = $(".oc2").val();
	$scope.province = $('[name="province"]').val();
	$scope.city = $('[name="city"]').val();
	$scope.arean = $('[name="area"]').val();
	//console.log($scope.province,$scope.city,$scope.arean)
	if(!$scope.name || !$scope.province){
		alert("请填写完整信息")
	}else if($scope.arean=="市辖区"){
		alert("请填写市/区")
	}else{
		if($scope.numb.length == 0) {
			alert('请输入手机号码！');
			return false;
		} else if($scope.numb.length != 11) {
			alert('请输入有效的手机号码！');
			return false;
		} else if(!(/^1[34578]\d{9}$/.test($scope.numb))) {
			alert("手机号码有误，请重填");
			return false;
		} else {
			$("#float_yuyeu").fadeIn();
		}
	}	
};
$scope.subTn = function(){
	$scope.daten = $(".oc3").val();
	$scope.lev = $("select[name=status]").val();
	if(!$scope.daten){
		alert("请填写完整信息")
	}else{
		//console.log($scope.name,$scope.numb,$scope.province,$scope.city,$scope.arean,$scope.lev,$scope.daten)
		$http({
		    url:ServiceConfig.haoniangjia+"h5_api/yuesaoAppointmentSave",
		    method: "POST",
		    data: {
		        name:$scope.name,
		        cellPhone:$scope.numb,
		        province:$scope.province,
		        city:$scope.city,
		        area:$scope.arean,
		        level:$scope.lev,
		        preBirthTime:$scope.daten
		    },
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },//POST表单请求提交时，使用的Content-Type是application/x-www-form-urlencoded，所以需要把Content-Type修改下！
        transformRequest: function(obj) {//这时数据是放到了Form Data中但是发现是以对象的形式存在，所以需要进行序列化！    
          var str = [];    
          for (var s in obj) {    
            str.push(encodeURIComponent(s) + "=" + encodeURIComponent(obj[s]));    
          }    
          return str.join("&");    
        } 		    
		}).success(function(data) {
			console.log(data)
			alert("提交成功！我们会尽快与您取得联系")
			location.reload();
		})
		.error(function(){
			alert("系统错误,请稍后提交!")
			location.reload();
		})
	
	}
	
}

}])
