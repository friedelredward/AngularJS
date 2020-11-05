'use strict';

angular.module('myApp', []);
/**Interpolator + config */
/**COMENTR STO PQARA KE FUNCIONE EL RESTO */
angular.module('myApp').config(function($interpolateProvider){
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');

});

angular.module('myApp')
        .controller('MainController', ['$scope','$interval', function($scope, $interval){
            this.user={
                nombre: "test"
            };

            this.submitForm= function(form){
                if (form.$valid) {
                    window.alert("PASeed");
                } else {
                    window.alert("Failed");
                    
                }
            }

}]);

/**as alias and father syntax */
angular.module('myApp')
        .controller('sintaxFatherController', [ function(){

         this.mimensaje="mensaje desde Fathercontroller con THIS syntax /no scope"   
         this.algo={
            isActive:false};
}]);
/**filters pej yesorno */
angular.module('myApp').filter('yesorno', function(){
    return function(value){
        if(value=== true){
            return 'yes';
        }else if(value=== false){
            return 'no';
        }else{
            return 'uknown';
        }
    }
});