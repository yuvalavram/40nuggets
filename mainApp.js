var app = angular.module("mainApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "general.html",
		activetab: 'general',
		controller: 'generalCtrl'
	})
	.when("/general", {
		templateUrl : "general.html",
		activetab: 'general',
		controller: 'generalCtrl'
	})
	.when("/integrations", {
		templateUrl : "integrations.html",
		activetab: 'integrations',
		controller: 'integrationsCtrl'		
	})
});

app.controller('menuCtrl', ['$scope', '$route', '$location',  function($scope, $route, $location){
	$scope.$route = $route;
	$scope.changeView = function(view){
		$location.path(view); 
	}
}]);

app.controller('generalCtrl', ['$scope',  function($scope){
	$scope.saveClicked = function(){
		alert('save clicked');
	}
}]);

