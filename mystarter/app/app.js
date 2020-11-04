'use strict';

angular.module('myApp', []);//se declara vacio y se va rellenando
angular.module('myApp')
            .controller('MainController', ['$scope', function(){
                console.log("Hello ANgUlAR JS")
            }]);