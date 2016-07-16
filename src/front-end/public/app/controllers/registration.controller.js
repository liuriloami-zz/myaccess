angular
    .module('app')
    .controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['$scope', 'Data', '$location'];

function RegistrationController($scope, Data, $location) {
    $scope.submit = function(user_data) {
        user_data.registration = true;
        Data.setUserData(user_data);
        $location.path('/login');
    };
}
