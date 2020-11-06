'use strict';

angular.module('myApp', []);

angular.module('myApp')
        .controller('MainController', ['$scope','$interval', function($scope, $interval){
            
            /**from convention we tag this as vm */
            var vm=this;
            vm.nombre="jhondoe";
           
}]);

/**as alias and father syntax */
angular.module('myApp')
        .controller('exampleController', [ function(){

         this.mimensaje="mensaje desde Fathercontroller con THIS syntax /no scope"   
         this.algo={
            isActive:false};
}]);