'use strict';

angular.module('myApp', []);
 angular.module('myApp').directive('testVehicleV', ()=>{
     return {
         /**scope default is true */
         scope:{
             item1:'='
         },
         templateUrl:'templates/vehicleV.html',
         restrict: 'AE'
     };
 });
 
 angular.module('myApp').directive('testFunctions', ()=>{
    return {
        scope:{
            generatorFunction:'&',
            onSave:'&',
            count:'=?'
        },
        templateUrl:'templates/functionsV.html',
        restrict: 'AE',
        controller: function($scope){
            if ($scope.generatorFunction) {
                /**we can attach new values to scope pej items
                 * with the falues from the param fucntion
                 */
                $scope.items= $scope.generatorFunction({count: $scope.count});
                /**_func is for internal function */
                $scope._onSave=function(){
                    if ($scope.onSave) {//if exists we launch it
                        $scope.onSave();
                    }
                };
            }
        }
    };
});

 angular.module('myApp').directive('testVehicleView', ()=>{
    return {
        /**scope default is true */
        scope:{
            name:"@",
            maker: "@",
            model:"@",
            year: "@", 
            coche:"@"
        },
        templateUrl:'templates/vehicleView.html',
        restrict: 'AE', 
        controller: ($scope)=>{
            console.log("testVehicleView_scopes values: "+
            $scope.name+", "+$scope.maker+", "+$scope.year+", "+$scope.model);
        }
    };
});

angular.module('myApp')
        .controller('MainController', ['$scope','$interval', function($scope, $interval){
            var vm=this;

            $scope.item1={
                name:"toyota",
                maker: "T",
                model:"325i",
                year: 2014
            };
            $scope.item2={
                name:"bmv",
                maker: "T",
                model:"325i",
                year: 2014
            };

}]);

/**as alias and father syntax */
angular.module('myApp')
        .controller('exampleController', [ function(){
            var vm=this;  
            vm.saveFirst=()=>{
                alert("Saved First! From controller scope");
            };
            vm.saveSecond=()=>{
                alert("Saved second!From controller scope");
            };
            vm.randomNumbers=(count)=>{
                console.log(count);
                return [55,22,43,4,51];
            };
            vm.sequencialNumbers=(count)=>{
                console.log(count);
                return [1,2,3,4,5];
            };
}]);
