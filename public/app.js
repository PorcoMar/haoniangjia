			var app=angular.module("myapp",["ngRoute"])
/*初始化基本信息*/			
			app.run(['$rootScope', function($rootScope){
			    $rootScope.version = '0.1';
			    $rootScope.author = 'porcoMar_ZM';
			}]);
/*服务的URL配置*/
			app.constant('ServiceConfig', {		
				yizhenjia_shoping:'https://test.yizhenjia.com/xcxapi/',
				movies_api: 'https://api.douban.com/v2/movie/',
				tngou:'http://www.tngou.net/api/top/list'
			});		
			app.config(["$routeProvider",function($routeProvider){
				$routeProvider
				.when("/index",{					
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
				.when("/newDetial",{				
					templateUrl:"views/newDetial/newDetial.html",		
					controller:"newDetial"
				})
				.otherwise({
					redirectTo:"/index"
				})
				
			}])
