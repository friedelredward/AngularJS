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