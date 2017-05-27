app.controller("newDetial", ["$scope","$rootScope","$location","$sce",function($scope,$rootScope,$location,$sce){
	
	$scope.hash = window.location.hash.split("?")[1];
	if($scope.hash=="new1"){
		$scope.boolen6 = true;
		$scope.boolen7 = false;
		$scope.boolen8 = false;
		$scope.boolen9 = false;
		$scope.boolen10 = false;		
		$scope.boolen11 = false;
		$scope.boolen12 = false;
		$scope.boolen13 = false;
		$scope.boolen14 = false;		
		$scope.boolen15 = false;		
	}
	else if($scope.hash=="new2"){
		$scope.boolen6 = false;
		$scope.boolen7 = true;
		$scope.boolen8 = false;
		$scope.boolen9 = false;
		$scope.boolen10 = false;	
		$scope.boolen11 = false;
		$scope.boolen12 = false;
		$scope.boolen13 = false;
		$scope.boolen14 = false;		
		$scope.boolen15 = false;			
	}	
	else if($scope.hash=="new3"){
		$scope.boolen6 = false;
		$scope.boolen7 = false;
		$scope.boolen8 = true;
		$scope.boolen9 = false;
		$scope.boolen10 = false;	
		$scope.boolen11 = false;
		$scope.boolen12 = false;
		$scope.boolen13 = false;
		$scope.boolen14 = false;		
		$scope.boolen15 = false;			
	}	
	else if($scope.hash=="new4"){
		$scope.boolen6 = false;
		$scope.boolen7 = false;
		$scope.boolen8 = false;
		$scope.boolen9 = true;
		$scope.boolen10 = false;	
		$scope.boolen11 = false;
		$scope.boolen12 = false;
		$scope.boolen13 = false;
		$scope.boolen14 = false;		
		$scope.boolen15 = false;			
	}	
	else if($scope.hash=="new5"){
		$scope.boolen6 = false;
		$scope.boolen7 = false;
		$scope.boolen8 = false;
		$scope.boolen9 = false;
		$scope.boolen10 = true;	
		$scope.boolen11 = false;
		$scope.boolen12 = false;
		$scope.boolen13 = false;
		$scope.boolen14 = false;		
		$scope.boolen15 = false;			
	}	
	else if($scope.hash=="new6"){
		$scope.boolen6 = false;
		$scope.boolen7 = false;
		$scope.boolen8 = false;
		$scope.boolen9 = false;
		$scope.boolen10 = false;	
		$scope.boolen11 = true;
		$scope.boolen12 = false;
		$scope.boolen13 = false;
		$scope.boolen14 = false;		
		$scope.boolen15 = false;			
	}	
	else if($scope.hash=="new7"){
		$scope.boolen6 = false;
		$scope.boolen7 = false;
		$scope.boolen8 = false;
		$scope.boolen9 = false;
		$scope.boolen10 = false;	
		$scope.boolen11 = false;
		$scope.boolen12 = true;
		$scope.boolen13 = false;
		$scope.boolen14 = false;		
		$scope.boolen15 = false;			
	}	
	else if($scope.hash=="new8"){
		$scope.boolen6 = false;
		$scope.boolen7 = false;
		$scope.boolen8 = false;
		$scope.boolen9 = false;
		$scope.boolen10 = false;	
		$scope.boolen11 = false;
		$scope.boolen12 = false;
		$scope.boolen13 = true;
		$scope.boolen14 = false;		
		$scope.boolen15 = false;			
	}	
	else if($scope.hash=="new9"){
		$scope.boolen6 = false;
		$scope.boolen7 = false;
		$scope.boolen8 = false;
		$scope.boolen9 = false;
		$scope.boolen10 = false;	
		$scope.boolen11 = false;
		$scope.boolen12 = false;
		$scope.boolen13 = false;
		$scope.boolen14 = true;		
		$scope.boolen15 = false;			
	}	
	else if($scope.hash=="new10"){
		$scope.boolen6 = false;
		$scope.boolen7 = false;
		$scope.boolen8 = false;
		$scope.boolen9 = false;
		$scope.boolen10 = false;	
		$scope.boolen11 = false;
		$scope.boolen12 = false;
		$scope.boolen13 = false;
		$scope.boolen14 = false;		
		$scope.boolen15 = true;			
	}	
	$scope.comP = function(){
		$scope.boolen1 = true;
		$scope.boolen2 = false;
		$scope.boolen3 = false;
		$scope.boolen4 = false;
		$scope.boolen5 = false;
	}
	$scope.conC = function(){
		$scope.boolen1 = false;
		$scope.boolen2 = true;
		$scope.boolen3 = false;
		$scope.boolen4 = false;
		$scope.boolen5 = false;
	}
	$scope.way = function(){
		$scope.boolen1 = false;
		$scope.boolen2 = false;
		$scope.boolen3 = true;
		$scope.boolen4 = false;
		$scope.boolen5 = false;
	}
	$scope.manage = function(){
		$scope.boolen1 = false;
		$scope.boolen2 = false;
		$scope.boolen3 = false;
		$scope.boolen4 = true;
		$scope.boolen5 = false;
	}
	$scope.newS = function(){
		$scope.boolen1 = false;
		$scope.boolen2 = false;
		$scope.boolen3 = false;
		$scope.boolen4 = false;
		$scope.boolen5 = true;
	}
	
	$scope.bbm = function(){
		$rootScope.a = false;
		$location.path("/AboutUs")
	}
	$scope.aam = function(){
		$rootScope.a = true;
		$location.path("/AboutUs")
	}

		var speed=200;//滑动的速度
		$('body,html').animate({ scrollTop: 0 }, speed);
}])
