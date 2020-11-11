function prettify(number) {
    number = parseFloat(number.toFixed(3));
    if (number >= 1000) number = 999;
    number = number.toString();
    var hasDecimal = number.split('.');
    if (typeof hasDecimal[1] === 'undefined' || hasDecimal[0].length >= 3) return number.substring(0, 3);
    return number.substring(0, 4);
}

function format(number) {
    var numberTmp = number;
    number = Math.round(number * 1000000) / 1000000;
    if (!isFinite(number)) return "Infinite";
    if (number >= 1000 && number < 10000) return Math.floor(number);
    if (number === 0) {
        return prettify(0);
    }
    var base = Math.floor(Math.log(number) / Math.log(1000));
    if (base <= 0) return prettify(number);
    number /= Math.pow(1000, base);

        var suffices = [
            'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud',
            'Dd', 'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Od', 'Nd', 'V', 'Uv', 'Dv',
            'Tv', 'Qav', 'Qiv', 'Sxv', 'Spv', 'Ov', 'Nv', 'Tt'
        ];
        var suffix;
        if ((base <= suffices.length && base > 0)) {
            suffix = suffices[base - 1];
        }
        else {
            var exponent = parseFloat(numberTmp).toExponential(2);
            exponent = exponent.replace('+', '');
            return exponent;
        }

        return prettify(number) + suffix;
} 

(function($){

    $.fn.animationCounter = function(options) {
        return this.each(function() {
            try {
                var element = $(this);

                var defaults = {
                    start: 0,
                    end: null,
                    step: 1,
                    delay: 1000,
                    txt: ""
                }

                var settings = $.extend(defaults, options || {})

                var nb_start = settings.start;
                var nb_end = settings.end;

                element.text(nb_start + settings.txt);

                var counter = function() {
                    // Definition of conditions of arrest
                    if (nb_end != null && nb_start >= nb_end) {
                        return;
                    }
                    // incrementation
                    nb_start = nb_start + settings.step;
                    // display
                    element.text(nb_start + settings.txt);
                }

                // Timer
                // Launches every "settings.delay"
                setInterval(counter, settings.delay);

            } catch(e){
                alert( e + ' at line ' + e.lineNumber );
            }
        });
    };

})(jQuery);