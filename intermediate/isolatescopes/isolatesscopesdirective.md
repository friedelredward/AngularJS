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
  /*binding separte scopes*/
  <test-Vehicle-V item1="item1"></test-Vehicle-V>  
  <test-Vehicle-V item1="item2"></test-Vehicle-V> 
```
> equal sign sets up 2way Databinding. scope and watcher ensures that if data bound is changing(input), gets throu the directive

- We can __add dynamic functionality__ to the directive by __invoking outerscope(controller) functions__

> passing strings to isolated scope check main controller, test vehicle View directive.

linking shorthand example for style directive that adds class
```javascript
/*get injected automatically those attributes*/
angular.module('myApp').directive('testCss', ()=>{
     return function(scope, element, attrs){
         element.bind('mouseover'function(){
             element.addClass('');
         });
         element.bind('mouseout'function(){
             element.removeClass('');
         });
     };
 });
```