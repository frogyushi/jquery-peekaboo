# peekaboo
A simple easy-to-use jQuery plugin for collapsing/expanding html

### Features

- Customizability
- Extensive yet easy-to-use
- Not made to *just* collapse text elements

### CDN
###### Example using jsDelivr
```html
<script type="text/javascript" src="//cdn.jsdelivr.net/gh/frogyushi/jquery-peekaboo@master/jquery.peekaboo.min.js"></script>
```

## Settings
| Option | Type | Default | Description |
|---|---|---|---|
| activeClass | string | 'active' | Define a class referencing open/close states of peekaboo. 'close' state removes the class associated with 'activeClass' from the parent element |
| expanderElement | string | '\<div\>' | Set html for the expander button wrap |
| expanderPlacement | string | 'innerafter' | Accepts 'innerafter' or 'outerafter'. Define the placement of the expander button in the html. 'innerafter' places the expander button inside of the parent whereas 'outerafter' places the element after the parent |
| expanderUnderflowHide | boolean | true | Set `display: none;` on the expander button only when the amount of children is equal or less `=<` than 'windowSize' |
| openText | string | 'open' | Set html for expander button on open |
| closeText | string | 'close' | Set html for expander button on close |
| windowSize | int | 10 | Window size references the amount of child elements to be shown on document load. Elements of which index is greater than 'windowSize' are hidden |                                                |

### Data Attribute Settings (Optional)
###### Example on predefining 'openText' and 'closeText' using data attributes. Useful when trying to implement translations using PHP
```html
<ul class="peekaboo"
    data-peekaboo-open="<?php echo __('open', 'text-domain') ?>"
    data-peekaboo-close="<?php echo __('close', 'text-domain') ?>">
```

### Usage in jQuery
```js
$('.peekaboo').peekaboo({
    activeClass: 'active',
    expanderElement: '<div>',
    expanderPlacement: 'innerafter',
    expanderUnderflowHide: true,
    openText: 'open',
    closeText: 'close',
    windowSize: 10,
});
```
