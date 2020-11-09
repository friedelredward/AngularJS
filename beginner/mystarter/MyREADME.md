# AngularJs Introduction
## Angularjs

<details>
  <summary>remember to edit `package.json`:  and `run copy-libs`</summary>
 
```json
  "scripts": {
    "start": "http-server -a localhost -p 8000 -c-1 ./app",
    "copy-libs": "cpx \"node_modules/{angular,angular-*,html5-boilerplate/dist}/**/*\" app/lib -C",
    "test": "echo \"Error: no test specified\" && exit 1"
  },...
  "devDependencies": {
    "http-server": "^0.12.3",
    "cpx": "^1.5.0"
  }
```
</details>

- $scope travels from father to child-controller with 2 way databinding. But not from child to father. for that we use model(which is reactive)
<details>
  <summary>2way databinding +Model</summary>
 
```javascript
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
```
```html
<!--Scope & Model-->
<h3>2way databinding limitations and workarounds; change value to see effects</h3>
<div ng-controller="FatherController">
  <input type="text" ng-model="mimensaje"/>||with model||<input type="text" ng-model="model.mimensaje"/>

  <div ng-controller="ChildController">

    <input type="text" ng-model="mimensaje"/>||with model||<input type="text" ng-model="model.mimensaje"/>
  </div>
</div>
```
</details>

> child COntroller inherits _All from father_ (but WATCH vars_names cuz can overrite.. unexpected results)|
another controller has another different MODEL
- SO to chare data between differnet controllers.. u can put them UNDER the same Father MODEL
## sharing data with services(simpletons)+ injection(then attach to model)
<details>
  <summary>codes</summary>

```javascript
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
```
```html
<!--Servie data sharing-->
<h3> databinding for different components(unrelated)</h3>
<div ng-controller="indieController">
  <input type="text" ng-model="model.mimensaje"/>
</div>
<div ng-controller="indieController2">
  <input type="text" ng-model="model.mimensaje"/>
</div>

```
</details>

## controller alis `as` syntax (and scope elimination)
<details>
  <summary>codes</summary>

```javascript
/**as alias and father syntax */
angular.module('myApp')
        .controller('sintaxFatherController', [ function(){

         this.mimensaje="mensaje desde Fathercontroller con THIS syntax /no scope"   
}]);
angular.module('myApp')
        .controller('sintaxController', [function(){

         this.mimensaje="mensaje desde controller con THIS syntax /no scope"   
}]);
```
```html
<div ng-controller="sintaxFatherController as father">
  <input type="text" ng-model="father.mimensaje"/>

  <div ng-controller="sintaxController as indie">
    <input type="text" ng-model="indie.mimensaje"/>||from father||  <input type="text" ng-model="father.mimensaje"/>
  </div>
</div>
```
</details>

> !!!!Remember¡¡¡ to add watcher we need the scope injected!!

<details>
  <summary>Interval +watch +this(scope)</summary>

```javascript
/**para interval y watche we need the scope injected */
angular.module('myApp')
        .controller('sintaxController', ['$scope','$interval', function($scope,$interval){

            this.mimensaje="mensaje desde controller con THIS syntax /no scope"
            this.valor=0;
            /**cada x secs valor= nro random */
            $interval(function(){
             this.valor= Math.round(Math.random()*100000)+1;
            }.bind(this), 2000);
            /**watcher que loguea mi valor */
            $scope.$watch('sintaxC.valor', function(newValue, oldValue){
                console.log("NewV:"+newValue+" || OldVal= "+oldValue);
            });
}]);
```
```html
  <div ng-controller="sintaxController as sintaxC">
    <input type="text" ng-model="sintaxC.mimensaje"/>||from father||  <input type="text" ng-model="father.mimensaje"/>
    <p>valor: {{ sintaxC.valor}}</p>
  </div>
</div>
```
</details>

## Filters(uppercase lowercase, currency, date:'shortDate', number, json)+ custom

<details>
  <summary>/**filters pej capitalize */</summary>

```javascript
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
```
```html
<!--Custom filter-->
<div ng-controller="sintaxFatherController as father">
  <p>{{father.mimensaje | capitalize}} formateado con custom filter</p>
</div>
```
</details>
 - ng-repeat `|orderBy |limitTo :2:3` filters; __se pueden encadenar!!__
