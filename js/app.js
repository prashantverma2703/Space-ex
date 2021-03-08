/* 
    author: Prashant Verma,
    Data: 7th March 2021
*/


var app = angular.module("MyApp",[]);

    app.controller("IndexController",['$scope','$http',function($scope, $http){
        
        /*variable declaration */
        $scope.land=null;
        $scope.launch=null;
        $scope.year=null;
        $scope.textValue
        $scope.url="https://api.spacexdata.com/v3/launches?limit=100";

        /* api calling function */
        $scope.apiCall=function(){
            $http.get($scope.url)
            .then(function(response){
                $scope.result = response.data;
                }
            )
        }

        /* url literal function */
        $scope.callData = function(){
            $scope.url = "https://api.spacexdata.com/v3/launches?limit=100";
            if($scope.year!=null){
                $scope.url += `&launch_year=${$scope.year}`; 
            }
            if($scope.land!=null){
                $scope.url+= `&land_success=${$scope.land}`;
            }
            if($scope.launch!=null){
                $scope.url+= `&launch_success=${$scope.launch}`;
            }
            $scope.apiCall();
        }
        
        /* filter application function */
        $scope.applyFilter = function(selected, value){
                
            if(selected=="year"){
                $scope.year = value;
                $scope.yearText = value;
            }
            else if(selected=="launch"){
                $scope.launch=value;
                $scope.launchText=value;
            }
            else if(selected=="land"){
                $scope.land=value;
                $scope.landText=value;
            }
            $scope.callData();
            }
        
        
            $scope.apiCall();


}])