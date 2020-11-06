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
}]);
