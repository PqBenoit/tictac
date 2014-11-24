'use strict';
var app = angular.module('ticTac', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider){
	$routeProvider.when('/', {
		templateUrl: '/partials/home.html',
		controller: 'homeCtrl'
	}).when('/game', {
		templateUrl: '/partials/game.html',
		controller: 'gameCtrl'
	}).when('/options', {
		templateUrl: '/partials/options.html',
		controller: 'optionsCtrl'
	}).when('/credits', {
		templateUrl: '/partials/credits.html',
		controller: 'creditsCtrl'
	}).otherwise({
		redirectTo: '/'
	});
}]);
