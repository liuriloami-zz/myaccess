angular
    .module('app')
    .directive('registrationModal', RegistrationModal);

RegistrationModal.$inject = ['$timeout', 'Data'];

function RegistrationModal($timeout, Data) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            scope.Data = Data;
            scope.$watch('Data.getUserData()', function(user_data) {
                scope.user_data = user_data;
                if (user_data)
                    element.modal('show');
                else
                    element.modal('hide');
            });
        }
    };
}
