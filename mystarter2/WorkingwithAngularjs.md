# AngularJs
## working with angular js
<details>
    <summary>Contents</summary>
   
- work with user input
- perform basic client-side form validation
- use the CSS classes that are provided with AngularJS
- filter output based on content
- use the $interpolate service to change the default braces
- use the $scope.$watch functionality
- use the $q.all function to handle multiple promises
- use the angular.forEach function
- validate data types
</details>

> U can databind any input with `ng-model` to an scoped object!!(wil bind/update_UI)

<details>
  <summary>/**filters pej yesorno */</summary>

```javascript
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
```
```html
<!--Custom filter-->
<div ng-controller="sintaxFatherController as father">
  <input type="checkbox"/>
  <p>{{father.algo.isActive | yesorno}} formateado con custom filter</p>
</div>
```
</details>
 - ng-repeat `|orderBy |limitTo :2:3` filters; __se pueden encadenar!!__
 ## Validation
 - with html(required) + angular directives + css
 
 > remember

 ```html
 <form novalidate name="userForm">
 ....</form>
     <button  ng-click="main.submitForm(userForm)" >
      Sumbit Form</button>
 ```
 - thanks to special clases we can do this:

 ```css
 input.ng-dirty.ng-valid{color:green};
 input.ng-dirty.ng-valid{background-color:red};
 ```
 - `ng-pattern` /// `ng-minlength` /// 
 - special css clsases: 
 ```css
 div.ng-scope{}
 .ng-binding{}
 .ng-dirty{}
 .ng-pristine{}
 .ng-touched{}
 ```
 ## Using a filter on ng repeat ro create list filter
 ```html
 ng.model="main.userSelectedType"
    <li ng-repeat="item in main.items | filter: main.userSelectedType">
    {{ item.name }} -> {{ item.type }} 
    <li>
 ```

 ## configure interpolator
 ```javascript
 angular.module('myApp').config(function($interpolateProvider){
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');

});
 ```
# the convention is to tag controller `var vm=this` to viewmodel
# watchers Listeners are based on scope



