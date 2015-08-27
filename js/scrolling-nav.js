$(window).load(function() {
    $('#loading').remove();

    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

        $("#dpssmall").hide();

        $("#intro").hide().fadeIn(1000);

        $('#dpssmall').css({
            '-webkit-transform': 'rotate(0deg)',
            'transform': 'rotate(0deg)'
        });

        $("#semitone").hide();
        $("#sofaspud").hide();
        $("#getitdone").hide();
        $("#tictactoe").hide();
        $("#aptitune").hide();
        $("#mozaiq").hide();

        // hover logic for thumbnails and full-size
        var apps = ["aptitune", "semitone", "sofaspud", "getitdone", "tictactoe", "mozaiq"];
        apps.forEach(function(app) {
            $("#" + app + "-thumb").mouseenter(function() {
                $("#" + app).fadeIn("fast");
            }).mouseleave(function() {
                $("#" + app).fadeOut("fast");
            });
        });

    });


    $(window).scroll(function() {
        if ($(".navbar").offset().top > ($(window).height() - 50) && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            $("#name").addClass("hide-brand").hide();
            $("#dev").addClass("hide-brand").hide();
            $("#dpssmall").fadeIn(500);

            //logo spin on scroll
            $(window).scroll(function() {
                var theta = $(window).scrollTop() / 150;
                $('#dpssmall').css({ transform: 'rotate(' + theta + 'rad)' });
            });

            $('#dpssmall').css({
                '-webkit-transition' : 'none',
                'transition' : 'none',
                '-webkit-transform': 'rotate(0deg)',
                'transform': 'rotate(0deg)'
            });

            $.fn.scrollStopped = function(callback) {
                $(window).scroll(function(){
                    if ($(window).data('scrollTimeout')) {
                        clearTimeout($(window).data('scrollTimeout'));
                    }
                    $(window).data('scrollTimeout', setTimeout(callback,1300,self));
                });
            };

            $(window).scrollStopped(function(){
                $('#dpssmall').css({
                    '-webkit-transition' : '.4s ease-in-out',
                    'transition' : '.4s ease-in-out',
                    '-webkit-transform': 'rotate(0deg)',
                    'transform': 'rotate(0deg)'
                });
            });


            //logo back to normal on hover
            $('#dpssmall').hover(function() {
                $('#dpssmall').css({
                    '-webkit-transition' : 'all .4s ease-in-out',
                    'transition' : 'all .4s ease-in-out',
                    '-webkit-transform': 'rotate(360deg)',
                    'transform': 'rotate(360deg)'
                });
            }, function() {
                $('#dpssmall').css({
                    '-webkit-transition' : 'none',
                    'transition' : 'none',
                    '-webkit-transform': 'rotate(0deg)',
                    'transform': 'rotate(0deg)'
                });
            });

        } else if ($(".navbar").offset().top < ($(window).height() - 50)) {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            $("#dpssmall").hide();
            $("#name").removeClass("hide-brand").fadeIn(1000);
            $("#dev").removeClass("hide-brand").fadeIn(1000);
        }

    });

});