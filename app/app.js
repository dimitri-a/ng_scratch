angular.module('ngboiler', [])
    .controller('myController', ['$scope', function ($scope) {
        $scope.myHTML = "hi there"

        $scope.changeHello =function(){
            $scope.myHTML='good bye';
        }
    }]);