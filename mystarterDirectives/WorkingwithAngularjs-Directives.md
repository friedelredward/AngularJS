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