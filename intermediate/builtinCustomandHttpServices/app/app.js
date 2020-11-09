'use strict';

angular.module('myApp', []);

angular.module('myApp')
        .controller('MainController', ['$scope','$interval','$timeout', function($scope, $interval, $timeout){
            var vm=this;//as sintax

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
        .controller('ErrorHandlerController', ['$cacheFactory', function($cacheFactory){
            var vm=this;//as sintax

            vm.throwBasicError= ()=>{
                throw new Error("This is my basic error");
            };
            /**we override the default exception handler */     
}]);/*** WE OVERRIDE THE default with the factory method */
angular.module('myApp')
        .factory('$exceptionHandler', function(){
           return function(exception, cause){
                alert("Opps. Exception thrown");
                console.log("Dayum SOmething went bad!");
           };     
});