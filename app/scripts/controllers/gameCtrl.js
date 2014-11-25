'use strict';

app.controller('gameCtrl', ['$scope', '$rootScope',  function ($scope, $rootScope) {
	$scope.clock = new clock();
	$scope.clock.initialize($rootScope.selectedOption);
	$scope.dayTime = $scope.clock.dayTime;

	$scope.hour = 0;
	$scope.minute = 0;

	$scope.upHour = function() {
		if($scope.hour == 23){
			$scope.hour = 0;	
		} else {
			$scope.hour++;
		}
	}

	$scope.downHour = function() {
		if($scope.hour == 0){
			$scope.hour = 23;
		} else {
			$scope.hour--;
		}
	}

	$scope.upMinute = function() {
		if($scope.minute == 55){
			$scope.minute = 0;
		} else {
			$scope.minute += 5;
		}
	}

	$scope.downMinute = function() {
		if($scope.minute == 0){
			$scope.minute = 55;
		} else {
			$scope.minute -= 5;
		}
	}

	$scope.checkHour = function() {
		if($scope.hour == $scope.clock.hour && $scope.minute == $scope.clock.minute)
			$scope.isRight = true;
		else
			$scope.isWrong = true;

		console.log($scope.isRight)
	}

	$scope.reload = function() {
		$scope.clock.initialize($rootScope.selectedOption);
	}
}]);