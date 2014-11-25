'use strict';

app.controller('optionsCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
	$scope.selectClock = function(n) {
		$rootScope.selectedOption = n;
		$location.path('#/');
	}
}]);