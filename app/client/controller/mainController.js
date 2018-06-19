
app.controller("mainController", function ($scope,$http) {
	
    $scope.msg = "I love London";

    $http.get("/get")
    .then(function(res) {
       $scope.msg = res.data; 
    });
});