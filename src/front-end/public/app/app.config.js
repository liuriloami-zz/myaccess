angular
    .module('app')
    .config(function($routeProvider, $locationProvider, $authProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider
        .when('/', {
            templateUrl: '/app/views/home.html',
            controller: 'HomeController'
        })
        .when('/auth/linkedin', {
            templateUrl: '/app/views/home.html',
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl: '/app/views/login.html',
            controller: 'LoginController'
        })
        .when('/dashboard', {
            templateUrl: '/app/views/dashboard.html',
            controller: 'DashboardController'
        })
        .when('/about', {
            templateUrl: '/app/views/about.html',
            controller: 'AboutController'
        });

        $authProvider
        .linkedin({
            clientId: '77f0ll5i8squ2t',
            url: 'http://54.233.113.143:4242/auth/linkedin',
            redirectUri: 'http://accessible-login.s3-website-eu-west-1.amazonaws.com/oauth',
            requiredUrlParams: ['state'],
            scope: ['r_basicprofile', 'r_emailaddress'],
            scopeDelimiter: ' ',
            state: 'STATE',
            type: '2.0',
            popupOptions: { width: 527, height: 582 }
        });
    });
