angular
    .module('app')
    .controller('DashboardController', DashboardController);

DashboardController.$inject = ['$scope', 'Data'];

function DashboardController($scope, Data) {
    $scope.Data = Data;

    $scope.$watch('Data.user', function(user) {
        $scope.user = user;
        $scope.apps = [
            { name: 'Dropbox', url: 'https://dropbox.com', image: '/images/apps/dropbox.jpg' },
            { name: 'Facebook', url: 'https://facebook.com', image: '/images/apps/facebook.png' },
            { name: 'Gmail', url: 'https://gmail.com', image: '/images/apps/gmail.png' },
            { name: 'LinkedIn', url: 'https://linkedin.com', image: '/images/apps/linkedin.png' },
            { name: 'Skype', url: 'https://web.skype.com', image: '/images/apps/skype.png' },
            { name: 'YouTube', url: 'https://youtube.com', image: '/images/apps/youtube.png' }
        ];
        for (var i = 0; i < $scope.apps.length; i++)
            for (var j = 0; j < $scope.user.apps.length; j++)
                if ($scope.user.apps[j].name == $scope.apps[i].name)
                    $scope.apps[i] = $scope.user.apps[j];
    }, true);

    $scope.submitApps = function(apps) {
        Data.submitApps(apps);
    };
}
