app.controller("Cooperation", ["$scope", "$location", "$interval", "$http","ServiceConfig", function($scope, $location, $interval, $http,ServiceConfig) {
	$scope.numStart1 = 0;
	$scope.numStart2 = 0;
	$scope.numStart3 = 0;
	$scope.numStart4 = 0;
	inter(20, 70, ".pop1 span", $scope.numStart1, 20000000);
	inter(14, 72, ".pop2 span", $scope.numStart2, 250000);
	inter(20, 48, ".pop3 span", $scope.numStart3, 1250);
	inter(50, 20, ".pop4 span", $scope.numStart4, 1);

	function inter(time, times, obj, Start, num) {
		$scope.numberScroll = $interval(function() {}, time, times);
		$scope.numberScroll.then(success, error, B1);

		function B1() {
			Start += num;
			$(obj).html(Start)
		}
	}
	$scope.timer = $interval(function() {}, 80);
	$scope.timer.then(success, error, notify);

	function success() {}

	function error() {}

	function notify() {}
	$scope.value = "城市代理";
	$("#cl1").click(function() {
		if($(this).prop("checked")) {
			$("#cl2").attr("checked", false);
			$scope.value = "城市代理"
		}
	});
	$("#cl2").click(function() {
		if($(this).prop("checked")) {
			$("#cl1").attr("checked", false);
			$scope.value = "单店加盟"
		}
	});
	$scope.submit = function() {
		$scope.area = $(".ck3").val();
		$scope.cocatPer = $(".ck1").val();
		$scope.number = $(".ck2").val();
		//console.log($scope.value, $scope.area, $scope.cocatPer, $scope.number);
		if(!$scope.value || !$scope.area || !$scope.cocatPer || !$scope.number) {
			alert("请填写完整信息！")
		} else {
			$.ajax({
				url: ServiceConfig.haoniangjia + "h5_api/yuesaoAppointmentSaveWithType",
				type: "POST",
				data: {
					name: $scope.cocatPer,
					cellPhone: $scope.number,
					city: $scope.area,
					type: $scope.value
				},
				success: function(data) {}
			});
			alert("提交成功")
		}
	};
	$scope.$on("$destroy", function() {
		if(angular.isDefined($scope.inTerver)) {
			$interval.cancel($scope.inTerver);
			$scope.inTerver = undefined
		}
	});
	imgscrool2('.bammer', 5000);
	$(".banner2 .l").mouseenter(function() {
		$(this).find(".wdTitle").css("color", "#ff8188")
	});
	$(".banner2 .l").mouseleave(function() {
		$(this).find(".wdTitle").css("color", "#333")
	});
	$(".banner2 .btn_l").mouseenter(function() {
		$(".banner2 .btn").css("background", "#ff8188")
	});
	$(".banner2 .btn_r").mouseenter(function() {
		$(".banner2 .btn2").css("background", "#ff8188")
	});
	$(".banner2 .btn_l").mouseleave(function() {
		$(".banner2 .btn").css("background", "#cecece")
	});
	$(".banner2 .btn_r").mouseleave(function() {
		$(".banner2 .btn2").css("background", "#cecece")
	})
}]);