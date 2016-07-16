angular
    .module('app')
    .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', '$auth', 'Data'];

function HomeController($scope, $auth, Data) {
    $scope.$auth = $auth;
    $scope.Data = Data;

    $scope.register = function() {
        $auth.authenticate('linkedin');
    };

    $scope.$watch('$auth.getToken()', function(token) {
        if (!token) return;
        Data.setUserData(JSON.parse(JSON.parse(token)));
        $auth.logout();
    }, true);
}
