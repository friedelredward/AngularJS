# AngularJs
## working with angular js directives
<details>
    <summary>Contents</summary>
   
- instantiate a template once per item from a collection
- use ng-include to include an external HTML fragment
- specify custom behavior when an element is clicked
- use ng-show and ng-hide to control the display of elements
- use nested variable scopes in AngularJS
- use the ngClick and ngDblClick directives in AngularJS
- specify custom behaviors based on mousedown and mouseup events
- specify custom behaviors based on mouseover and mousemove events
- specify custom behaviors based on mouseenter and mouseleave events
- compare the ngChange directive with the JavaScript onchange event
- replace elements using the ngBind and ngBindTemplate directives
- insert an HTML element using the ngBindHTML directive
-use different bindings to create custom behaviors based on different mouse events
</details>

 > All thing(modles etc) attached to the rootScope are available across all scopes but not issolate scopes!¡¡CAREFULL with overriding(MASKED SCOPE)

 - `ng-click="main.makeclick()"` directive and `ng-DblClick`
 - `ng-mousedown="domousedown($event)"` /// `ng-mouseup="domouseup($event)"`/// `ng-mousemove/mouseleave="doMouse($event)"` /// `ng-mouseenter/mouseleave="domousedown($event)"`
 - `ng-change`
 - `ng-bind-html` with the sanitize package and we can iject a var like `$sce.trustAsHtml('html code');` and `{{ }}`
 
> for more check directives project

# Moar directives

<details>
    <summary>Contents and key POINTS+ syntax(check)</summary>
   
- set CSS style on an HTML element conditionally using the ngStyle directive
- dynamically set CSS classes on an HTML element using the ngClass directive __CAN TOGGLE CLASES__
- use the ngClassEven and ngClassOdd directives in conjunction with `ng-repeat`
- use the ngHref and ngSrc directives
- use the ngModel directive __WILL create the vas on js side__ but its good practice to have it
- use the ngFocus `ng-focus`and ngBlur `ng-blur="controller.onBlurrdo()"` directives
- + `autofocus` input trick ;)
- use AngularJS directives in Internet Explorer
</details>

## syntax for  custom directive

```javascript
/**Directive declaration and use..se html
 * very important Syntax Atribbute Element Class
 */
angular.module('myApp').directive('myDirective', ()=>{
    return {
        template: 'Hello from custom directive',
        restrict:'AEC'
    };
});
```
```html
<p> directive invocationn(3) Note: "train-notation"<span my-directive></span>||
  <span class="my-directive"></span>||
  as element:<my-directive></my-directive>  
</p>
```