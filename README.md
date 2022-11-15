# peekaboo
A simple easy-to-use jQuery plugin for collapsing/expanding html

### Features

- Customizability
- Extensive yet easy-to-use
- Not made to *just* collapse text elements

## Settings
| Option | Type | Default | Description |
|---|---|---|---|
| expanderElement | string | '\<div\>' | Set html for the expander button wrap |
| expanderPlacement | string | 'innerafter' | Accepts 'innerafter' or 'outerafter'. Define the placement of expander button in the html. 'innerafter' places the expander button inside of the parent whereas 'outerafter' places the element after the parent |
| expanderUnderflowHide | boolean | true | Enable `display: none` on the expander button only when the amount of children is equal or less `=<` than 'windowSize' |
| openText | string | 'open' | Set html for expander button on open |
| closeText | string | 'close' | Set html for expander button on close |
| windowSize | int | 10 | Window size references the amount of child elements to be shown on document load. Elements of which index is greater than 'windowSize' are hidden. |                                                |

### Data Attribute Settings (Optional)
###### Example on predefining 'openText' and 'closeText' using data attributes. Useful when trying to implement translations using PHP
```html
<ul class="peekaboo"
    data-peekaboo-open="<?php echo __('open', 'text-domain') ?>"
    data-peekaboo-close="<?php echo __('close', 'text-domain') ?>">
```

### Setting it up in jQuery
```js
$('.peekaboo').peekaboo({
    activeClass: 'active',
    expanderElement: '<div class="peekaboo-expander">',
    expanderPlacement: 'innerafter',
    expanderUnderflowHide: true,
    openText: 'open',
    closeText: 'close',
    windowSize: 10,
});
```
