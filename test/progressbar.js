/**
* ProgressBar for jQuery
*
* @version 1 (27. April 2013)
* @author Faisal Mushtaq
* @email  faisalm25@yahoo.com
* Inspired by: @Ivan Lazarevic   http://workshop.rs
* @requires jQuery
*/

function getTextHeight(html) { //argument can be text or html
    var calc = '<div style="display:none;height:auto;margin:0;padding:0">' + html + '</div>';
    $(document.body).append(calc);
    var $div = $(document.body).find('div:last');
    var height = $div.height();
    $div.remove();
    return height;
}

var Progressbar = (function ($) {

    return {
        _defaults: {
            selector: null, //Must supply it
            percent: 0, //percent must be between 0 and 100
            width: '400px',
            height: 'auto',
            textColor: null, //If not specified then it will be inherited
            alignTextTo: 'right',
            skin: 'default',
            reloadSkin: false,
            showReverseAnimationOnStart: false, //false for not showing reverse animation at start
            onCompleted: function () { //Event raised on 100% pbar progress

            }
        },
        //Call this first from outside to show pbar
        show: function (options) {
            this.options = options || {};
            if (!this.options.selector) {
                alert("Container element's selector must be specified in options");
                return;
            }

            this.options = $.extend({}, this._defaults, this.options);
            this.percent = this.options.percent && !isNaN(this.options.percent) ? this.options.percent : 0;

            this._loadSkinAndUI();
        },
        _loadSkinAndUI: function () {
            this.pbarCSSLoaded = this.pbarCSSLoaded || false;

            if (!this.pbarCSSLoaded || (this.options.reloadSkin == true)) {
                this.skin = this.options.skin || 'default';

                $("<link/>", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: 'Styles/skins/' + this.skin + '/progressbar.css'
                }).appendTo("head");

                this.pbarCSSLoaded = true;
            }

            this._createUI();
        },
        _createUI: function () {
            this.$element = $(this.options.selector);
            this.$element.empty();

            var alignTextTo = this.options.alignTextTo || 'right';
            var width = this.options.width || '100%';
            var height = this.options.height || 'auto';
            var textColor = this.options.textColor ? ("color:" + this.options.textColor) : "";

            this.$element.append("<div id=\"progress-bar-element\" class=\"" + this.skin + "\" " +
                    "style=\"text-align:" + alignTextTo + ";width:" + width + ";height:" + height + "\">" +
                    "<div style=\"z-index:2000;font-size:12px;font-weight:bold;" + textColor + ";height:100%;vertical-align:middle\"></div>" +
                    "</div>");

            var innerEle = this.$element.find('#progress-bar-element div');
            innerEle.html("0%&nbsp;");
            var textHeight = getTextHeight(innerEle.html());

            var paddingTop = (innerEle.height() / 2) - textHeight / 2;
            innerEle.css({ "padding-top": (paddingTop + "px") }); //show in middle vertically

            this.setValue(this.options.percent);
        },
        //This method should be called from outside whenever it is desired to update percentage value on pbar
        //Note: percent must be between 0 and 100. Other values are ignored.
        setValue: function (percent) {

            var isInvalidValue = false;
            isInvalidValue = isNaN(percent) || (percent < 0);
            if (isInvalidValue) {
                percent = 0;
                this.percent = Math.max(this.percent, percent); //To let stay bar at old value, if some invalid percentage is currently given
            }
            else
                this.percent = percent;

            var containerEle = this.$element.find('#progress-bar-element');
            var innerEle = containerEle.find('div');
            var progressBarWidth = (percent * containerEle.width() / 100);

            if (this.options.showReverseAnimationOnStart == false && this.percent == 0)
                innerEle.css({ "width": progressBarWidth }).html((this.percent > 100 ? 100 : this.percent) + "%&nbsp;");
            else {
                if (this.percent <= 100)
                    innerEle.animate({ width: progressBarWidth }, 200).html(this.percent + "%&nbsp;");
            }

            if (this.percent >= 100) {
                this.percent = 0; //reset

                var context = this;
                setTimeout(function () {
                    containerEle.remove();
                    if (typeof context.options.onCompleted == 'function')
                        context.options.onCompleted(); //Fire event
                }, 1000);
            }
        }

    };

})(jQuery);
