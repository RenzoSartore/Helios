angular
.module('myApp', [])
.factory("tasks", ["$firebaseArray",
  function($firebaseArray) {
    // create a reference to the database location where we will store our data
    var ref = firebase.database().ref().child('tasks');

    // this uses AngularFire to create the synchronized array
    return $firebaseArray(ref);
  }
])
.controller('personCtrl', ["$scope", function($scope) {
  $scope.saved = localStorage.getItem('tasks');
	$scope.tasks = (localStorage.getItem('tasks')!==null) ? JSON.parse($scope.saved) : [ {text: 'EJMPLO', description:'Este es uno'}];
	localStorage.setItem('tasks', JSON.stringify($scope.tasks));

	$scope.addtask = function() {
		$scope.tasks.push({
			text: $scope.taskText,
			description: $scope.taskDescription,
      done: true
		});
    console.log($scope.tasks);
		$scope.taskText = ''; //clear the input after adding
    $scope.taskDescription = '';
		localStorage.setItem('tasks', JSON.stringify($scope.tasks));
	};

  $scope.change = function (){
    if ($scope.task.done){
      $scope.task.done = !$scope.task.done;
    }
  };

  $scope.archive = function() {
		var oldtasks = $scope.tasks;
		$scope.tasks = [];
		localStorage.setItem('tasks', JSON.stringify($scope.tasks));
	};

  // $scope.auxTask = {
  //   name: '',
  //   description: '',
  //   progress: 0
  // };
  // $scope.tasks = [{
  //   name:'The hobbit',
  //   description:'Read at least 10 pages of the book.',
  //   progress: 10
  // },
  // {
  //   name:'Work out',
  //   description:'Do at least 1 hour of work out.',
  //   progress: 70
  // },
  // {
  //   name:'QuialityTime',
  //   description:'Spend a little bit of time with dad.',
  //   progress: 100
  // },
  // {
  //   name:'Homework',
  //   description:'Do the daily homework.'
  //   ,progress: 0
  // }];
  //
  // $scope.addTask = function(){
  //   $scope.tasks.push($scope.auxTask);
  //   localStorage.setItem('tasks', JSON.stringify($scope.auxTask));
  // };

  // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

  // var keyinput = “key10”;
	// 	var valoutput = “value10”;
	// 	if(typeof(window.localStorage) != 'undefined'){
	// 		window.localStorage.setItem(keyinput,valinput);
	// 	}
	// 	else{
	// 		throw "window.localStorage, not defined";
	// 	}

}]);
