'use strict';
/**OJO !! Have to inject it */
angular.module('myApp', ['ngCookies']);

/**custom service */
/**/
angular.module('myApp')
        .service('AppModel', function($http){
            this.users=[{
                login:"defaultUser1"
            }];

            this.getUsers= function(){
                $http.get("https://api.github.com/users")
                    .then(function(response){
                        this.users= response.data;
                    }.bind(this),
                    function(response){
                        console.log(response.data);
                    })
            };
});
/* comment this to make GET service work
 angular.module('myApp')
         .factory('AppModel', function(){
            var model={};//creates objet to return it
        
             model.user={
                name:"jhon Doe From ServiceFactory"
             };
            model.sayHello= function(){
             alert("Hellow from service-Factory");
            };

            return model;
});
*/
/*
 angular.module('myApp')
         .service('AppModel', function(){
             this.user={
                 name:"jhon Doe From Service"
             };
             this.sayHello= function(){
                 alert("Hellow from service");
             };
});
*/

/**
 * Controllers */
angular.module('myApp')
        .controller('MainController', ['AppModel','$scope','$interval','$timeout', function(AppModel, $scope, $interval, $timeout){
            var vm=this;//as sintax
            vm.model=AppModel;
}]);

angular.module('myApp')
        .controller('TimeoutController', ['$timeout', function($timeout){
            var vm=this;//as sintax
            vm.message="No timeout set";
            vm.delay= 2000;
             var timeoutPromise= null;

            vm.startTimeout= ()=>{
                vm.message='';
                //**OJO! */
                vm.cancelTimeout();
                vm.message +="Starting new timeout...";

                timeoutPromise=$timeout((data)=>{
                    vm.message ="Timout complete; with data sent: "+data;
                    /**wew have to finish the promise */
                    timeoutPromise= null;
                },vm.delay, true, {data:"passed data testing.. 1234"});

            };
            vm.cancelTimeout= ()=>{
                if(timeoutPromise){//check if there is 1 first
                    /**OJO */
                    $timeout.cancel(timeoutPromise);
                    timeoutPromise=null;
                    
                    vm.message="canceled Timeout."
                }
            };
}]);

angular.module('myApp')
        .controller('CacheController', ['$cacheFactory', function($cacheFactory){
            var vm=this;//as sintax
            vm.keys=[];
            /**we intatiate */
            vm.cache= $cacheFactory('testCache');

            vm.addItem=(itemKey, itemValue)=>{
                vm.keys.push(itemKey);
                vm.cache.put(itemKey, itemValue);
            };
            vm.getItem=(itemKey)=>{
                vm.curentItem= vm.cache.get(itemKey);
            };
            vm.removeItem=(itemKey)=>{
                //we remove the key from our keys array
                vm.keys.filter((key)=>{
                    return key!== itemKey;
                });
                //also from cache
                vm.cache.remove(itemKey);
            };
}]);

angular.module('myApp')
        .controller('ErrorHandlerController', [function(){
            var vm=this;//as sintax

            vm.throwBasicError= ()=>{
                throw new Error("This is my basic error");
            };
            /**we override the default exception handler */     
}]);/*** WE OVERRIDE THE default with the factory method */
/*
angular.module('myApp')
        .factory('$exceptionHandler', function(){
           return function(exception, cause){
                alert("Opps. Exception thrown");
                console.log("Dayum SOmething went bad!");
           };     
});
*/
/**OJO !! Have to inject it */
// angular.module('myApp', ['ngCookies']);
angular.module('myApp')
        .controller('MyCookieController', ['$cookies', function($cookies){
            var vm=this;//as sintax
            vm.keys=[];

            vm.addItem=(itemKey, itemValue)=>{
                vm.keys.push(itemKey);
                $cookies.put(itemKey, itemValue);
            };
            vm.getItem=(itemKey)=>{
                vm.curentItem=  $cookies.get(itemKey);
            };
            vm.getCookieValue=(key)=>{
               return $cookies.get(key);
            };
            vm.removeItem=(itemKey)=>{
                //we remove the key from our keys array
                vm.keys.filter((key)=>{
                    return key!== itemKey;
                });
                //also from cache
                $cookies.remove(itemKey);
            };          
}]);

/**service 2 ways.. as a service and with factory ; check declaration */
angular.module('myApp')
        .controller('FatherServiceController', ['AppModel', function(AppModel){
            var vm=this;//as sintax
            vm.model= AppModel;
}]);
angular.module('myApp')
        .controller('FirstChildServiceController', ['AppModel', function(AppModel){
            var vm=this;//as sintax
            vm.model= AppModel;

            vm.user1={/**some local info */
                name:"JhonDoe1 from fristChild"
            };
}]);
angular.module('myApp')
        .controller('SecondChildServiceController', ['AppModel', function(AppModel){
            var vm=this;//as sintax
            vm.model= AppModel;
            
            vm.user2={
                name:"Jane Doe from Second"
            };
}]);

/**OJO SIEMPRE ES APP MODEL!!!! SOLO SE APENDEN NUEVOS DATOS */
angular.module('myApp')
        .controller('GetServiceController', ['AppModel', function(AppModel){
            var vm=this;//as sintax
            vm.model= AppModel;
            
            vm.userDefault=vm.model.users;
}]);
