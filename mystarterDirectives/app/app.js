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

            var vm=this;
            vm.name="Jsmith";
            vm.nameInput="";
            vm.message="";

            vm.doChange= function(){
                if(vm.nameInput==vm.name){
                    vm.message="Bienvenido tu. cambio done";
                }else{vm.message="";}
            }
}]);
angular.module('myApp')
        .controller('exampleFinalController', [ function(){

            var vm=this;

            vm.mousedownCount=0;
            vm.mouseupCount=0;
            vm.mouseoverCount=0;
            vm.mouseenterCount=0;
            vm.mouseleaveCount=0;
            vm.mouseX=0;
            vm.mouseY=0;

            vm.doMousedownCount=function(){
                vm.mousedownCount++;
            }
            vm.doMouseupCount=function(){
                vm.mouseupCount++;
            }
            vm.doMouseoverCount=function(){
                vm.mouseoverCount++;
            }
            vm.doMouseenterCount=function(){
                vm.mouseenterCount++;
            }
            vm.doMouseleaveCount=function(){
                vm.mouseleaveCount++;
            }

            vm.doMousemove=function(event){
                console.log("Mouse moved");
                vm.mouseY= event.offsetY;
                vm.mouseX= event.offsetX;
            };
}]);