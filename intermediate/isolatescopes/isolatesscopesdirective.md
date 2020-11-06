# AngularJs
## Examining Isolate Scope Directives
<details>
    <summary>Contents</summary>
   
describe isolate scopes in directives
use the equals sign to set up two-way binding
use the ampersand sign to invoke outer scope functions
use the at symbol to pass strings into the directives
create a directive using shorthand notation
replace directive elements in HTML markup
</details>
- sometimes is betteer to design a general directive(separatescope) and bind data to use it.

> to Declare an isolate indepentende scope for each time the directive is called we declare the `scope` atribute in the directive. So we can have different directive instances
```javascript
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
```

```html
  /*binding sepparte scopes*/
  <test-Vehicle-V item1="item1"></test-Vehicle-V>  
  <test-Vehicle-V item1="item2"></test-Vehicle-V>  
```