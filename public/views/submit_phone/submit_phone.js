app.controller("submit_phone", ["$scope","$location","$http","ServiceConfig","$interval",function($scope,$location,$http,ServiceConfig,$interval){
$scope.yuenima = function(){
	$scope.name = $(".oc1").val();
	$scope.numb = $(".oc2").val();
	$scope.city = $(".oc4").val();
	if(!$scope.name || !$scope.city){
		alert("请填写完整信息")
	}else{
		if($scope.numb.length == 0) {
			alert('请输入手机号码！');
			// document.form1.mobile.focus();  
			return false;
		} else if($scope.numb.length != 11) {
			alert('请输入有效的手机号码！');
			//document.form1.mobile.focus();  
			return false;
		} else if(!(/^1[34578]\d{9}$/.test($scope.numb))) {
			alert("手机号码有误，请重填");
			return false;
		} else {
			$("#tijiao_yuyeu").fadeIn();
		}
	}
}

$scope.subTn = function(){
	$scope.daten = $(".oc3").val();
	$scope.lev = $(".oc5").val();
	if(!$scope.daten){
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
		    	alert("提交成功！我们会尽快与您取得联系")
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
		//普通示例
		var userPicker = new mui.PopPicker();
		userPicker.setData([{
			value: '经济型',
			text: '经济型'
		}, {
			value: '舒适型',
			text: '舒适型'
		}, {
			value: '尊享型',
			text: '尊享型'
		}]);
		var showUserPickerButton = document.getElementById('showUserPicker');
		var userResult = document.getElementById('userResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				userResult.value = items[0].value;
			});
		}, false);			
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
