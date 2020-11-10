'use strict';
/**OJO !! Have to inject it */
angular.module('myApp', ['ngRoute']);

angular.module('myApp')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/welcome', {
            templateUrl:'/templates/welcome.html',
            controller: 'WelcomeController',
            controllerAs: 'vm',
            exampleData:{
                algo1: "asdasdsd",
                algo2: "asdasdas"
            }
            
        })
        .when("/about", {
            templateUrl: "templates/about.html",
            controller: 'AboutController',
            controllerAs: 'vm'
        })
        .when("/product/:productId", {
            templateUrl: "templates/product.html",
            controller: 'ProductController',
            controllerAs: 'vm'
        }).otherwise({ redirectTo: '/'});//default route
}]);

/**
 * Controllers */
angular.module('myApp')
    .controller('WelcomeController', ['$route', function($route) {
        var vm = this;//as sintax
        vm.details = "Hello From WELCOME";
        /**getting params from URL STRING (route) */
        vm.queryStringParams= $route.current.params;

        vm.reload=()=>{
            $route.reload();
        };
        /**routes properties/data */
        vm.exmplData= $route.current.exampleData;
}]);

angular.module('myApp')
    .controller('AboutController', [ function() {
        var vm = this;//as sintax
        vm.details = "Hello From About";
}]);

angular.module('myApp')
    .controller('ProductController', ['$routeParams',function($routeParams) {
        var vm = this;//as sintax
        vm.details = "Hello From product";
         vm.productId=$routeParams.productId;
}]);

angular.module('myApp')
    .controller('MyNavController', ['$location', function($location) {
        var vm = this;//as sintax
        vm.details = "Hello From About";

        vm.goto=(path)=>{
            $location.path(path);
        };
}]);
