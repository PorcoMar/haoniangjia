app.controller("fuck", ["$scope","$location","$http","ServiceConfig","$interval",function($scope,$location,$http,ServiceConfig,$interval){

$.ajax({
	url:ServiceConfig.haoniangjia+"h5_api/yuesaoAppointmentList",
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
		    url:ServiceConfig.haoniangjia+"h5_api/yuesaoAppointmentSave",
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

/*citypicker*/	
		mui.init();
		mui.ready(function() {
			var cityPicker3 = new mui.PopPicker({
				layer: 3
			});
			cityPicker3.setData(cityData3);
			var showCityPickerButton = document.getElementById('showCityPicker3');
			var cityResult3 = document.getElementById('cityResult3');
			showCityPickerButton.addEventListener('tap', function(event) {
				cityPicker3.show(function(items) {
					cityResult3.value = (items[0] || {}).text + " " + (items[1] || {}).text + " " + (items[2] || {}).text;
					//返回 false 可以阻止选择框的关闭
					//return false;
				});
			}, false);	
		});
	
/*timepicker*/	
	(function($) {
		$.init();
		var result = $('#result')[0];
		var btns = $('.btn');
		btns.each(function(i, btn) {
			btn.addEventListener('tap', function() {
				var optionsJson = this.getAttribute('data-options') || '{}';
				var options = JSON.parse(optionsJson);
				var id = this.getAttribute('id');
				var picker = new $.DtPicker(options);
				picker.show(function(rs) {
					result.value = rs.text;
					picker.dispose();
				});
			}, false);
		});
	})(mui);	
}])
