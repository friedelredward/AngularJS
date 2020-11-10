'use strict';
/**OJO !! Have to inject it */
angular.module('myApp', ['ngRoute']);

angular.module('myApp')
    .filter('dashes', [ () =>{
        return (value)=>{
            return value.replace(/\s/g, '-');
        };   
}]);

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

angular.module('myApp')
    .run( function($rootScope) {
        /**global variable */
        /** CAN be used in ANY controller
         * but every controller can ovveride it and lose root info
         * so USE WITH CAUTION
         */
        $rootScope.exampleValue="Value from root scope";
        $rootScope.sayhello=()=>{alert("Hellow from rooscope");}
});


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
        vm.goto=(path)=>{
            $location.path(path);
        };
}]);
/**browsing/ routing without affecting browser hystory!! 
 * AKA ::replacing views
*/
angular.module('myApp')
    .controller('MyNavHistoryController', ['$location','$log', function($location, $log) {
        var vm = this;//as sintax
        vm.goto=(path)=>{
            $location.replace();
            $location.path(path);
        };

        vm.clickLog= function(data){
            console.log("clicked");
            $log.log(data);
            $log.error(data);
            $log.info(data);
            $log.warn(data);
            $log.debug(data);
        };
}]);

angular.module('myApp')
    .controller('BasicFilterController', ['$filter', function($filter) {
        var vm = this;//as sintax

        var dashes= $filter('dashes');
        vm.randomMessage="Thjis is a basic string to prove filter";
        vm.codeFilteredValue= dashes(vm.randomMessage);

        vm.aplyFilter=()=>{
            vm.parsedValue= dashes(vm.inputValue);
        };
}]);
