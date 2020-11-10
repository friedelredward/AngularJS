'use strict';
/**OJO !! Have to inject it */
angular.module('myApp', ['ngRoute']);

angular.module('myApp')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/welcome', {
            templateUrl:'/templates/welcome.html',
            controller: 'WelcomeController',
            controllerAs: 'vm'
            
        })
        .when("/about", {
            templateUrl: "templates/about.html",
            controller: 'AboutController',
            controllerAs: 'vm'
        })
        .when("/contact", {
            templateUrl: "templates/contact.html",
            controller: 'ContactController',
            controllerAs: 'vm'
        }).otherwise({ redirectTo: '/'});
}]);

/**
 * Controllers */
angular.module('myApp')
    .controller('WelcomeController', [ function() {
        var vm = this;//as sintax
        vm.details = "Hello From WELCOME";
}]);

angular.module('myApp')
    .controller('AboutController', [ function() {
        var vm = this;//as sintax
        vm.details = "Hello From About";
}]);

angular.module('myApp')
    .controller('ContactController', [function() {
        var vm = this;//as sintax
        vm.details = "Hello From CONTACT";
}]);
