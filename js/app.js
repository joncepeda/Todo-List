var todoApp = angular.module("todoApp",['ngRoute']);
todoApp.config(['$routeProvider', function ($routeProvider){
	$routeProvider
		.when('/create',
		{
			controller: 'SimpleController',
			templateUrl: 'create.html'
		})
		.when('/view',
		{
			controller: 'SimpleController',
			templateUrl: 'view.html'
		})
		.when('/delete',{
			controller: 'SimpleController',
			templateUrl: 'delete.html'
		})
		.otherwise({ redirectTo : '/view'});
}]);

todoApp.controller('SimpleController',['$scope','$http',function ($scope,$http){
		$http.get('js/dataRecords.json').success(function(data){
			console.log(data);
			$scope.todolist = data;
			
		})
		.error(function(data,status){
			console.log(status);
		});

		$scope.addList = function(){
			$scope.todolist.push({
				name:$scope.newList.name, 
				start_date: $scope.newList.start_date,
				end_date:$scope.newList.end_date
				//console.info($scope.newList.name);
			});

		};
}]);
