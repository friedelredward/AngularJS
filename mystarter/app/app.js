'use strict';

angular.module('myApp', []);//se declara vacio y se va rellenando
angular.module('myApp')
        .controller('MainController', ['$scope','$interval', function($scope, $interval){
            console.log("Hello ANgUlAR JS");
            //injectamos en el scope 
            $scope.mimensaje=" bbsita";
            $scope.mifuncHola=function(nombre){
                return $scope.mimensaje+" "+nombre;
            };
            /**
             * 2way databinding works with ng-model
             */
            var frutas=["apple","apple2","apple3","apple4"];
            $scope.itemIndex=null;
            $scope.actualItem="";
            $scope.setItem=function(){
                $scope.actualItem= frutas[$scope.itemIndex];
            }

            /*gracias a interval podemos pone esto peeriodico; 
            actualizar valor e invocar el setter*/
            $interval(function(){
                $scope.itemIndex= Math.round(Math.random() * (frutas.length - 1));
                $scope.setItem();
            }, 1000);



}]);