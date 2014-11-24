'use strict';

app.controller('gameCtrl', ['$scope', function ($scope) {
	
	$scope.clock = new clock();
	$scope.clock.initialize();

	$scope.hour = 0;
	$scope.minute = 0;
	$scope.result;

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

	$scope.checkHour = function(){
		$scope.result = $scope.hour + ":" + $scope.minute;
		console.log($scope.result);
	}
}]);