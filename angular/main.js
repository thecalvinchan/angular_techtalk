var app = angular.module('converter',[]);
angular.module('converter').controller('main',['$scope',
    function($scope) {
        $scope.fahr, $scope.cels;
        $scope.convert = function() {
            $scope.cels = Math.round(($scope.fahr - 32) * 5 / 9);
        }
    }
]);
