/**
 * peekaboo
 *
 * A simple easy-to-use jQuery plugin for collapsing/expanding html
 *
 * @author yushi
 * @license MIT-license
 */

$ = jQuery.noConflict();

(function ($) {

    /**
     * Create new Peekaboo instance
     *
     * @param { jQuery | HTMLElement } element
     * @param { Peekaboo.default } options
     * @constructor
     */
    function Peekaboo(element, options) {

        this.$parent = $(element);
        this.$children = this.$parent.children();

        /**
         * Peekaboo preset reapply
         */
        this.data = $.extend({ $pab: this, state: { active: false } }, Peekaboo.default, options);

        /**
         * Expander button & Translation support from PHP
         */
        if (this.$parent.data('peekaboo-open')) {
            this.data.openText = this.$parent.data('peekaboo-open');
        }

        if (this.$parent.data('peekaboo-close')) {
            this.data.closeText = this.$parent.data('peekaboo-close');
        }

        /**
         * Create expander button
         *
         * @type { jQuery }
         */
        this.expander = $(this.data.expanderElement)
            .html(this.data.state.active ? this.data.closeText : this.data.openText)
            .data('jquery.peekaboo.expander', this.data);

        if (this.data.state.active) {
            this.$parent.addClass(this.data.activeClass);
        }

        // Start DOM
        this.build();
    }

    Peekaboo.prototype.build = function () {

        /**
         * if windowSize is not overflowed then hide expander
         */
        if (
            this.data.enableAutoHide &&
            this.$children.length <= this.data.windowSize
        ) {
            this.expander.hide();
        }

        /**
         * Set placement of expander
         */
        switch (this.data.expanderPlacement) {
            case 'innerbefore':
                this.$parent.prepend(this.expander);
                break;
            case 'innerafter':
                this.$parent.append(this.expander);
                break;
            case 'outerbefore':
                this.expander.insertBefore(this.$parent);
                break;
            case 'outerafter':
                this.expander.insertAfter(this.$parent);
                break;
        }

        /**
         * Open or close peekaboo
         */
        this.data.state.active ? this.open() : this.close();

        /**
         * Onclick event for expander
         */
        this.expander.on('click.peekaboo', function () {
            var $this = $(this).data('jquery.peekaboo.expander');

            if ($this.state.active) {
                $this.$pab.close();
                $this.state.active = false;
                $(this).html($this.openText);
            } else {
                $this.$pab.open();
                $this.state.active = true;
                $(this).html($this.closeText);
            }

            var parent = $this.$pab.$parent;

            if (parent.hasClass($this.activeClass)) {
                parent.removeClass($this.activeClass);
            } else {
                parent.addClass($this.activeClass);
            }
        });
    };

    /**
     * Peekaboo default preset
     *
     * @type {{expanderPlacement: string, windowSize: number, expanderElement: string, closeText: string, state: {active: boolean}, openText: string}}
     */
    Peekaboo.default = {
        activeClass: 'active',
        expanderElement: '<div>',
        expanderPlacement: 'innerafter',
        enableAutoHide: true,
        openText: 'open',
        closeText: 'close',
        windowSize: 10,
    };

    Peekaboo.prototype.close = function () {
        var data = this.data;
        var $this = this.expander;

        this.$children.each(function (index) {
            if (index >= data.windowSize && $this !== $(this)) {
                $(this).hide();
            }
        });
    };

    Peekaboo.prototype.open = function () {
        this.$children.each(function () {
            $(this).show();
        });
    };

    /**
     * Create a Peekaboo
     *
     * @param { Peekaboo.default } options
     */
    $.fn.peekaboo = function (options) {
        return this.each(function () {
            if ($(this).data('jquery.peekaboo')) {
                return;
            }

            $(this).data('jquery.peekaboo', new Peekaboo($(this), options));
        });
    };

    $.fn.peekaboo.Constructor = Peekaboo;

})($);