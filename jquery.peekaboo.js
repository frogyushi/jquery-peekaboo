/**
 * Peekaboo
 *
 * A simple lightweight jQuery plugin for collapsing/expanding HTML
 *
 * @author yushi
 * @license MIT-license
 */

$ = jQuery.noConflict();

$(function () {

    /**
     * Create new Peekaboo instance
     *
     * @param { jQuery } element
     * @param { Peekaboo.default } options
     * @constructor
     */
    function Peekaboo(element, options) {
        this.parent = element;
        this.children = element.children();

        /**
         * Peekaboo preset
         */
        this.data = $.extend({ pab: this }, Peekaboo.default, options);

        /**
         * Expander button
         */
        this.expander = $(this.data.expander)
            .html(this.data.state.active ? this.data.close : this.data.open)
            .data('jquery.peekaboo.expander', this.data);

        build();
    }

    function build() {
        this.parent.append(this.expander);
        this.state.active ? this.open() : this.close();

        this.expander.on('click.peekaboo', function () {
            var $this = $(this).data('jquery.peekaboo.expander');

            if ($this.state.active) {
                $this.pab.close();
                $this.state.active = false;
                $(this).html($this.open);
            } else {
                $this.pab.open();
                $this.state.active = true;
                $(this).html($this.close);
            }
        });
    }

    /**
     * Peekaboo settings
     */
    Peekaboo.default = {
        expander: '<div>',
        open: 'open',
        close: 'close',

        size: 10,
        state: {
            active: false,
        },
    };

    Peekaboo.prototype.close = function () {
        var data = this.data;
        var $this = this.expander;

        this.children.each(function (index) {
            if (data.size > index && $this !== $(this)) {
                $(this).hide();
            }
        });
    };

    Peekaboo.prototype.open = function () {
        this.children.each(function () {
            $(this).show();
        });
    };

    /**
     * create peekaboo
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

});