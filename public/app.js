			var app=angular.module("myapp",["ngRoute"])
/*初始化基本信息*/			
			app.run(['$rootScope', function($rootScope){
			    $rootScope.version = '0.1';
			    $rootScope.author = 'porcoMar_ZM';
			}]);
/*服务的URL配置*/
			app.constant('ServiceConfig', {
				haoniangjiaTest:'http://mobile.api-test.yizhenjia.com/',
				haoniangjia:'http://appapi.yizhenjia.com/'
			});		
			app.config(["$routeProvider",function($routeProvider){
				$routeProvider
				.when("/",{					
					templateUrl:"views/index/index.html",		
					controller:"index"
				})
				.when("/ServiceMatron",{					
					templateUrl:"views/ServiceMatron/ServiceMatron.html",		
					controller:"ServiceMatron"
				})
				.when("/TeamMatron",{					
					templateUrl:"views/TeamMatron/TeamMatron.html",		
					controller:"TeamMatron"
				})
				.when("/Cooperation",{					
					templateUrl:"views/Cooperation/Cooperation.html",		
					controller:"Cooperation"
				})
				.when("/AboutUs",{					
					templateUrl:"views/AboutUs/AboutUs.html",		
					controller:"AboutUs"
				})
				.when("/execcess",{					
					templateUrl:"views/execcess/execcess.html",		
					controller:"execcess"
				})
				.when("/test",{					
					templateUrl:"views/test/test.html",		
					controller:"test"
				})
				.when("/News",{					
					templateUrl:"views/News/News.html",		
					controller:"fuck"
				})
				.when("/newDetial/:id",{				
					templateUrl:"views/newDetial/newDetial.html",		
					controller:"newDetial"
				})
				.when("/webActivity/:id",{				
					templateUrl:"views/webActivity/webActivity.html",		
					controller:"webActivity"
				})
				.when("/submit_phone",{				
					templateUrl:"views/submit_phone/submit_phone.html",		
					controller:"submit_phone"
				})
				.otherwise({
					redirectTo:"/"
				})
				
			}])
