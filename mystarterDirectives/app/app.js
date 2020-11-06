'use strict';

angular.module('myApp', []);
/**scope hyerarchy with rootScpe  this is available to all child scopes*/
angular.module('myApp', []).run(function($rootScope){
    $rootScope.userModel={
        name: 'Jsmith',
        age: 36
    };
});

angular.module('myApp')
        .controller('MainController', ['$scope','$interval', function($scope, $interval){
            
            /**from convention we tag this as vm */
            var vm=this;
            vm.showFirst=true;
            vm.showSecond=false;

            vm.isSecondToggle=function(){
                return vm.showSecond
            }
           
}]);

/**as alias and father syntax */
angular.module('myApp')
        .controller('exampleController', [ function(){

         this.mimensaje="mensaje desde Fathercontroller con THIS syntax /no scope"   
         this.algo={
            isActive:false};
}]);