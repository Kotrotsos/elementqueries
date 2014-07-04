Element Queries jQuery plugin!
===

### USAGE
```javascript
   $(".l-aside").elementquery({
      breakpoints: [ 
         {  "bp": 600 ,"classname": "eq-phone" },
         {  "bp": 768 ,"classname": "eq-tablet" }, 
         {  "bp": 1024 ,"classname": "eq-desktop" }]
   });

```

The above code adds the attribute (recursively) classname to .l-aside when container sizes hit or fall below bp (breakpoint) These are computed values.

### DEMO


https://dl.dropboxusercontent.com/u/1903617/elementquery/demo/index.html
