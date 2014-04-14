(function(window, angular, undefined){
    angular
        .module('webdbtApp', ['ngRoute'])
        .config(function($routeProvider){
            $routeProvider
                .when('/calendar/:year?/:month?', {
                    templateUrl: 'templates/calendar.html'
                })
                .when('/week/:year/:month/:week', {
                })
                .when('/day/:year/:month/:day', {
                })
                .otherwise({redirectTo: '/calendar'});
        });
})(window, angular);