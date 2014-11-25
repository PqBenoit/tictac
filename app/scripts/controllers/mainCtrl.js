'use strict';

app.controller('MainCtrl', ['$rootScope', function($rootScope){
	if(!angular.isDefined($rootScope.selectedOption))
		$rootScope.selectedOption = 1;
}]);