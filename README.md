# jquery-peekaboo
A simple lightweight jQuery library for collapsing/expanding HTML

## Using in JavaScript
```js
$('.peekaboo').peekaboo({
    expander: '<li class="pab-expand"></li>',  
    open: 'show more',      
    close: 'show less',   
    size: 5,                
});
```

## Example in HTML

```html
<ul class="peekaboo">
  <li></li>
  <li></li>
  <li></li>
  <li class="pab-expand">show more</li>
</ul>
```
