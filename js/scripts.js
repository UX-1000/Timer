$(function () {

    /* =========================================
        COUNTDOWN TIMES
     ========================================= */
    function get15dayFromNow() {
        return new Date(new Date().valueOf() + 15 * 24 * 60 * 60 * 1000);
    }
    function time2m() {
        return new Date(new Date().valueOf() + 2 * 60 * 1000);
    }
    function time3m() {
        return new Date(new Date().valueOf() + 3 * 60 * 1000);
    }

    $('#clock-c').countdown(0, function(event) {
		var $this = $(this).html(event.strftime(''
		/*+ '<span class="h1 font-weight-bold">%D</span> Day%!d'
        + '<span class="h1 font-weight-bold">%H</span> H'*/
        + '<span class="h1 font-weight-bold">%M</span> M'
        + '<span class="h1 font-weight-bold">%S</span> S'));
    });
	
   /* $('#clock-c').countdown(time2m(), function(event) {
		var $this = $(this).html(event.strftime(''
		+ '<span class="h1 font-weight-bold">%D</span> Day%!d'
        + '<span class="h1 font-weight-bold">%H</span> H'
        + '<span class="h1 font-weight-bold">%M</span> M'
        + '<span class="h1 font-weight-bold">%S</span> S'));
    }).on('finish.countdown',function() {
		$('#alarm').get(0).play();
			$('body').addClass('alarm');
	}); */

    /* =========================================
        Buttons
     ========================================= */
    $('#btn-2m').click(function() {
			$('body').removeClass('alarm');
        $('#clock-c').countdown(time2m()).on('finish.countdown',function() {
			$('#alarm').get(0).play();
			$('body').addClass('alarm');
		});
    });
    $('#btn-3m').click(function() {
			$('body').removeClass('alarm');
        $('#clock-c').countdown(time3m()).on('finish.countdown',function() {
			$('#alarm').get(0).play();
			$('body').addClass('alarm');
		});
    });
    $('#btn-pause').click(function() {
			$('body').removeClass('alarm');
        $('#clock-c').countdown('pause');
    });
    $('#btn-stop-snd').click(function() {
		$('#alarm').get(0).pause();
			$('body').removeClass('alarm');
    });
    $('#btn-resume').click(function() {
        $('#clock-c').countdown('resume');
    });
	
	/*$('#btn-2m').trigger('click');*/

});
