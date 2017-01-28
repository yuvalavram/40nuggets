var app = angular.module("mainApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "general.html",
		activetab: 'general'
	})
	.when("/general", {
		templateUrl : "general.html",
		activetab: 'general'
	})
	.when("/integrations", {
		templateUrl : "integrations.html",
		activetab: 'integrations'	
	})
});

app.controller('menuCtrl', ['$scope', '$route', '$location',  function($scope, $route, $location){
	$scope.$route = $route;
	$scope.changeView = function(view){
		$location.path(view); 
	}
}]);

