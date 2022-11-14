# jQuery-peekaboo
A simple lightweight jQuery library for collapsing/expanding HTML

## Usage

First, we implement peekaboo in our JavaScript file using jQuery.
```js
$('.peekaboo').peekaboo({
    expander: '<li class="pab-expand"></li>',  
    open: 'show more',      
    close: 'show less',   
    size: 5,                
});
```

And then, we also have to reference it in the HTML.

```html
<ul class="peekaboo">
  <li></li>
  <li></li>
  <li></li>
  <li class="pab-expand">show more</li>
</ul>
```
