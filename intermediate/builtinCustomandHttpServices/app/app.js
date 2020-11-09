'use strict';

angular.module('myApp', []);

angular.module('myApp')
        .controller('MainController', ['$scope','$interval','$timeout', function($scope, $interval, $timeout){
            var vm=this;//as sintax
            vm.message="No timeout set";
            vm.delay= 2000;
             var timeoutPromise= null;

            vm.startTimeout= ()=>{
                vm.message='';
                //**OJO! */
                vm.cancelTimeout();
                vm.message +="Startting new timout...";

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

