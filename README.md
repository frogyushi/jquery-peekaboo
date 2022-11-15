> Note: this repo is relatively new and wip, there's lots of ideas ahead so stay tuned :)

# peekaboo

A simple easy-to-use jQuery plugin for collapsing/expanding html

###### Check out our [JSFiddle Demo](https://jsfiddle.net/4jsavz31/59/)

### Features

- Customizability
- Easy-to-use
- Not made to *just* collapse text elements

### CDNs
###### Example using jsDelivr
```html
<script type="text/javascript" src="//cdn.jsdelivr.net/gh/frogyushi/jquery-peekaboo@master/jquery.peekaboo.min.js"></script>
```

## Settings
| Option            | Type    | Default      | Description                                                                                                                                                                                                                            |
|-------------------|---------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| activeClass       | string  | 'active'     | Define a class referencing open/close states of peekaboo. 'close' state removes the class associated with 'activeClass' from the parent element                                                                                        |
| expanderElement   | string  | '\<div\>'    | Set html for the expander                                                                                                                                                                                                              |
| expanderPlacement | string  | 'innerafter' | Accepts 'innerbefore', 'innerafter', 'outerbefore', and 'outerafter'. Define the placement of the expander inside the html |
| preserveExpander  | boolean | false        | Disable expander hide when the amount of children is equal or less than 'windowSize'                                                                                                                                                   |
| openText          | string  | 'open'       | Set html for expander on open                                                                                                                                                                                                          |
| closeText         | string  | 'close'      | Set html for expander on close                                                                                                                                                                                                         |
| windowSize        | int     | 10           | Set the amount of child elements to be shown on document load. Child elements of which index is greater than 'windowSize' are hidden                                                                                                   |                                                |

### Data Attribute Settings (Optional)
###### Example on predefining 'openText' and 'closeText' using data attributes
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
    preserveExpander: false,
    openText: 'open',
    closeText: 'close',
    windowSize: 10,
});
```
