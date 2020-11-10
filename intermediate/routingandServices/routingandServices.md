# AngularJs
## Routing, & HTTP Services
<details>
    <summary>Contents</summary>
   
set up routing
use route parameters
set up a default route
- use the $route service to read query strings
use the $route service to reload pages
- set up a simple route using the templates property to lead directly the html provided(no extermal file)
- create custom properties on routes(__ANY NAME__ :pej: `data:{}`) then bind them to `vm.` in the controller
- use the $location service to perform client site routing AKA dynamic navigation
use the $location service to replace views without altering browser history
- use the $log service

```javascript
        vm.clickLog= function(data){
            console.log("clicked");
            $log.log(data);
            $log.error(data);
            $log.info(data);
            $log.warn(data);
            $log.debug(data);
        };
```

- use the $filter function (AS SERVICE)from markup and controller
use the $rootScope service
- use the `$window and $document` services are available though all angula since are native JS, window.alert(). console.log(document)
use the $q service `var defer=q.defer()` if succes `defer.resolve(data)` else `defer.reject(new Error("erorr"))`...` return defer.promise` wich later we consume in the controller
</details>
