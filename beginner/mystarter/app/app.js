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
/**Scope y model */
angular.module('myApp')
        .controller('FatherController', ['$scope', function($scope){
            console.log("Hello from father");
            
            $scope.mimensaje=" Hellow";
            $scope.model={
                mimensaje:" modelHellow"
            };

}]);
angular.module('myApp')
        .controller('ChildController', ['$scope', function($scope){
            console.log("Hello Hello from son");

}]);

/**databinding with service */
angular.module('myApp').service('SharedService', function(){
    return { mimensaje: 'injectado con service'};
});

angular.module('myApp')
        .controller('indieController', ['$scope','SharedService', function($scope, SharedService){
            console.log(" Hello from indie1");

            $scope.model= SharedService;
}]);
angular.module('myApp')
        .controller('indieController2', ['$scope','SharedService', function($scope, SharedService){
            console.log("Hello Hello from indie2");
            $scope.model= SharedService;
}]);
/**as alias and father syntax */
angular.module('myApp')
        .controller('sintaxFatherController', [ function(){

         this.mimensaje="mensaje desde Fathercontroller con THIS syntax /no scope"   
}]);
/**para interval y watche we need the scope injected */
angular.module('myApp')
        .controller('sintaxController', ['$scope','$interval', function($scope,$interval){

            this.mimensaje="mensaje desde controller con THIS syntax /no scope"
            this.valor=0;

            /**cada x secs valor= nro random */
            $interval(function(){
             this.valor= Math.round(Math.random()*100000)+1;
            }.bind(this), 5000);
            /**watcher que loguea mi valor */
            $scope.$watch('sintaxC.valor', function(newValue, oldValue){
                console.log("NewV:"+newValue+" || OldVal= "+oldValue);
            });
}]);
/**filters pej capitalize */
angular.module('myApp').filter('capitalize', function(){
    return function(value){
        var result =null;
        var words = value.split(' ');
        words.forEach(element => {
            if(result){
                result+=' ';
            }else{
                result ='';
            }
           result += element.substr(0,1).toUpperCase() + element.substr(1).toLowerCase();
        }); return result;
    }
});
