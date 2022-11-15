# peekaboo
A simple yet extensive lightweight jQuery library for collapsing/expanding HTML.

## Settings
| Option                | Type    | Default      | Description                                                                                                                                                                                                          |
|-----------------------|---------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| expanderElement       | string  | '\<div\>'      | Set html for the expander button wrap                                                                                                                                                                                |
| expanderPlacement     | string  | 'innerafter' | Accepts 'innerafter' or 'outerafter'. Define the placement of expander button in the html. 'innerafter' places the expander button inside of the parent whereas 'outerafter' places the element after the parent |
| expanderUnderflowHide | boolean | true         | Enable `display: none` on the expander button only when the amount of children is equal or less `=<` than the window size                                                                                                     |
| openText              | string  | 'open'       | Set html for expander button on open                                                                                                                                                         |
| closeText             | string  | 'close'      | Set html for expander button on close                                                                                                                                                  |
| windowSize            | int     | 10           | Window size references the amount of child elements to be shown on document load. Elements of which index is greater than 'window size' are hidden.                                                                  |
