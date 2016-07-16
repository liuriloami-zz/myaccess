angular
    .module('app')
    .controller('LoginController', LoginController);

LoginController.$inject = ['$scope', '$location', '$timeout', 'Data'];

function LoginController($scope, $location, $timeout, Data) {
    $scope.cur = 0;
    $scope.choice = [];
    $scope.steps = [];
    $scope.apps = [];
    $scope.Data = Data;

    $scope.$watch('Data.steps', function(steps) {
        $scope.steps = steps;
    }, true);

    $scope.$watch('Data.status', function(status) {
        if (status == 'LOGIN_OK') {
            $location.path('/dashboard');

        } else if (status == 'LOGIN_FAIL') {
            Data.wrong_tries++;
            if (Data.wrong_tries == 5) {
                $location.path('/');
            } else {
                $scope.reset();
                $scope.bg = '#EC644B';
                $timeout(function(){
                    $scope.bg = '#FFFFFF';
                }, 500);
            }
        }
        Data.status = '';
    });

    $scope.next = function(value) {
        $scope.choice[$scope.cur] = value;
        $scope.cur++;
        if ($scope.cur == 2) {
            if (!Data.getUserData() || !Data.getUserData().registration)
                Data.findUsers($scope.choice[0], $scope.choice[1]);
            else {
                $scope.choice[$scope.cur] = Data.getUserData().pictureUrls.values[0];
                $scope.cur++;
            }
        }
    };

    $scope.previous = function() {
        if ($scope.cur > 0)
            $scope.cur--;
        else
            $location.path('/');
    };

    $scope.reset = function() {
        $scope.cur = 0;
        $scope.choice = [];
    };

    $scope.confirm = function() {
        var user_data = Data.getUserData();
        Data.setUserData(null);

        if (!user_data || !user_data.registration)
            Data.login($scope.choice[2], $scope.choice[1], $scope.choice[3], $scope.choice[4]);
        else
            Data.register(user_data.formattedName, user_data.emailAddress, $scope.choice[0], user_data.pictureUrls.values[0], $scope.choice[1], $scope.choice[3], $scope.choice[4]);
    };

    Data.requestSteps();
}
