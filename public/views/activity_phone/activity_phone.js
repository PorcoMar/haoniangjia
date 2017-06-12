app.controller("activity_phone", ["$scope","$location","$http","ServiceConfig","$interval",function($scope,$location,$http,ServiceConfig,$interval){
placeholderPic();
window.onresize = function(){
	placeholderPic();
}
function placeholderPic(){
	var w = document.documentElement.offsetWidth ;
	document.documentElement.style.fontSize= w / 16 + 'px' ;
}
}])
