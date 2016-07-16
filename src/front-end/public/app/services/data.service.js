angular
    .module('app')
    .factory('Data', DataService);

function DataService($http) {
    data = {};
    data.steps = [];
    data.user = {};
    data.status = '';
    data.user_data = null;
    data.wrong_tries = 0;

    data.requestSteps = function() {
        $http.post('http://54.233.113.143:4242/steps', {})
        .success(function(response, httpStatus) {
            data.steps = response;
        });
    };

    data.findUsers = function(gender, step1) {
        $http.post('http://54.233.113.143:4242/profiles', { gender: gender, step1: step1 })
        .success(function(response, httpStatus) {
            data.steps[2].images = response;
        });
    };

    data.login = function(picture, step1, step2, step3) {
        $http.post('http://54.233.113.143:4242/login', { picture: picture, password: [ step1, step2, step3 ] })
        .success(function(response, httpStatus) {
            data.status = response.status;
            data.user = response.user;
        });
    };

    data.register = function(name, email, gender, picture, step1, step2, step3) {
        $http.post('http://54.233.113.143:4242/register', { name: name, email: email, gender: gender,
            picture: picture, password: [ step1, step2, step3 ] })
        .success(function(response, httpStatus) {
            data.status = response.status;
            data.user = response.user;
        });
    };

    data.setUserData = function(user_data) {
        data.user_data = user_data;
    };

    data.getUserData = function() {
        return data.user_data;
    };

    data.submitApps = function(apps) {
        $http.post('http://54.233.113.143:4242/apps', { picture: data.user.picture, password: data.user.password, apps: apps })
        .success(function(response, httpStatus) {
            data.user = response.user;
        });
    };

    return data;
}
