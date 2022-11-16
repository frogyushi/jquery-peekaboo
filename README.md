# peekaboo

A simple easy-to-use jQuery plugin for collapsing/expanding HTML.

## Getting started
Place the import in your `<head>` tag to start working with peekaboo:
```html
<script type="text/javascript" src="//cdn.jsdelivr.net/gh/frogyushi/jquery-peekaboo/jquery.peekaboo.min.js"></script>
```

## Options
Available options and their default values are shown here:
| Option            | Type    | Default      | Description                                                                                                                                                                                                                            |
|-------------------|---------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| parentClass       |**string**     | pab     | Set a class to be added to the parent element                                                                          |
| expanderElement   | **string**  | \<div\>    | Set html for the expander                                                                                                                                                                                                              |
| expanderPlacement | **string**  | innerafter | Accepts **innerbefore**, **innerafter**, **outerbefore**, and **outerafter**. Define expander's placement |
| enableAutoHide    | **boolean** | true        | Enable expander's auto-hide when the amount of child elements is equal or less than **windowSize**                                                                                                                                                  |
| openText          | **string**  | open       | Set html for expander on open                                                                                                                                                                                                          |
| closeText         | **string**  | close      | Set html for expander on close                                                                                                                                                                                                         |
| windowSize        |**int**     | 10          | Set an amount of child elements to be displayed on document load. Child elements of which index is greater than **windowSize** are hidden                                                                                                   |                                                |

### Data Attribute Settings (Optional)
Predefining **openText** and **closeText** options through data attributes:
```html
<ul class="peekaboo"
    data-pab-open-text="<?php echo __('open', 'text-domain') ?>"
    data-pab-close-text="<?php echo __('close', 'text-domain') ?>">
```

## Usage
Example of peekaboo using default option values:
```js
$('.peekaboo').peekaboo({
    parentClass: 'pab',
    expanderElement: '<div>',
    expanderPlacement: 'innerafter',
    enableAutoHide: true,
    openText: 'open',
    closeText: 'close',
    windowSize: 10,
});
```
